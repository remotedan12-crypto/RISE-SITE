import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testInsert() {
    console.log("Testing insert into leads...");
    const { data, error } = await supabase.from('leads').insert({
        name: "Test User",
        email: "test@example.com",
        phone: "1234567890",
        company: "Test Corp",
        service: "other",
        status: "New",
        source: "Website Contact Form",
        date: new Date().toISOString()
    });

    if (error) {
        console.error("Insert failed:", error);
    } else {
        console.log("Insert successful:", data);
    }
}

testInsert();
