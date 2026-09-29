import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent/10 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        accent: "bg-accent text-accent-foreground hover:bg-accent-dark shadow-md hover:shadow-lg font-bold",
        hero: "bg-accent text-accent-foreground hover:bg-accent-dark shadow-lg hover:shadow-xl font-bold text-base",
        heroOutline: "border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  trackingName?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, trackingName, onClick, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    // We can't easily use hooks inside a forwarded ref without importing it,
    // so we'll just fire the supabase event directly here to keep it simple,
    // or we can import useTracking. We'll import useTracking at the top.

    return <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      onClick={(e) => {
        if (trackingName) {
          try {
            // Dispatch a custom event that the Tracker component can listen to, or we directly use supabase here.
            // Given this is a UI component, dispatching a custom DOM event is cleanest.
            window.dispatchEvent(new CustomEvent('track-button-click', { detail: { name: trackingName } }));
          } catch (err) { }
        }
        if (onClick) onClick(e);
      }}
      {...props}
    />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
