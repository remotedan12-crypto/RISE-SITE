import fs from "fs";
import path from "path";
import puppeteer from "puppeteer-core";
import express from "express";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All project routes
const routes = [
  "/",
  "/about",
  "/services",
  "/services/move-out-cleaning",
  "/services/deep-cleaning",
  "/services/window-cleaning",
  "/services/post-construction-cleaning",
  "/services/recurring-cleaning",
  "/services/decluttering-organizing",
  "/services/commercial-cleaning",
  "/services/standard-cleaning",
  "/services/airbnb-cleaning",
  "/services/move-in-cleaning",
  "/services/spring-cleaning",
  "/why-choose-us",
  "/how-it-works",
  "/gallery",
  "/industries",
  "/checklist",
  "/contact",
  "/reviews",
  "/cleaning-services-texas",
  "/cleaning-services-colorado",
  "/house-cleaning-austin",
  "/cleaning-denver",
  "/house-cleaning-dallas",
  "/cleaning-houston",
  "/cleaning-colorado-springs",
  "/house-cleaning-boulder",
];

async function prerender() {
  const distPath = path.resolve(__dirname, "../dist");

  if (!fs.existsSync(distPath)) {
    console.error('Error: dist directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  // Start local server
  const app = express();

  app.use(
    express.static(distPath, {
      maxAge: "1y",
      extensions: ["html"],
    })
  );

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });

  const server = app.listen(8080, () => {
    console.log("Local server started at http://localhost:8080");
  });

  // Browser paths
  const possiblePaths = [
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  ];

  let executablePath = null;

  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      executablePath = p;
      break;
    }
  }

  if (!executablePath) {
    console.error("Error: Could not find Chrome or Edge.");
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    headless: "new",
    executablePath,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--disable-background-networking",
      "--disable-background-timer-throttling",
      "--disable-renderer-backgrounding",
    ],
  });

  const page = await browser.newPage();

  // Better viewport for responsive SEO snapshots
  await page.setViewport({
    width: 1440,
    height: 900,
  });

  // Block unnecessary heavy assets for faster prerender
  await page.setRequestInterception(true);

  page.on("request", (req) => {
    const resourceType = req.resourceType();
    const url = req.url();

    // Skip videos, analytics, fonts, trackers
    if (
      ["media", "font", "websocket"].includes(resourceType) ||
      url.includes("googletagmanager") ||
      url.includes("google-analytics") ||
      url.includes("doubleclick")
    ) {
      req.abort();
    } else {
      req.continue();
    }
  });

  console.log(
    `Starting optimized SEO prerendering process using ${executablePath}...`
  );

  for (const route of routes) {
    try {
      console.log(`Prerendering ${route}...`);

      await page.goto(`http://localhost:8080${route}`, {
        waitUntil: "domcontentloaded",
        timeout: 120000,
      });

      // Extra time for React hydration + lazy sections
      await new Promise((resolve) => setTimeout(resolve, 4000));

      // Optional scroll to trigger lazy-loaded sections/images
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 500;

          const timer = setInterval(() => {
            window.scrollBy(0, distance);
            totalHeight += distance;

            if (totalHeight >= document.body.scrollHeight) {
              clearInterval(timer);
              window.scrollTo(0, 0);
              resolve();
            }
          }, 150);
        });
      });

      // Small final wait
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Get rendered HTML
      const html = await page.content();

      let routeDir = path.resolve(distPath, route.slice(1));

      if (route === "/") {
        routeDir = distPath;
      } else {
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
      }

      const filePath = path.resolve(routeDir, "index.html");

      fs.writeFileSync(filePath, html, "utf8");

      console.log(`Saved: ${filePath}`);
    } catch (err) {
      console.error(`Failed to prerender ${route}:`, err.message);
    }
  }

  await browser.close();
  server.close();

  console.log(
    "Prerendering completed successfully. All pages are now SEO-optimized static HTML."
  );
}

prerender();