
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

// Types for our tracking data
export interface PageView {
    path: string;
    timestamp: string;
    referrer?: string;
}

export interface UserEvent {
    name: string;
    data?: any;
    timestamp: string;
}

export const useTracking = () => {
    const location = useLocation();

    // Track page views (including referrer for lead source attribution)
    useEffect(() => {
        if (!supabase) {
            return;
        }

        const trackPageView = async () => {
            try {
                await supabase.from('page_views').insert({
                    path: location.pathname,
                    timestamp: new Date().toISOString(),
                    referrer: document.referrer || "",
                });
                console.log("Tracked page view:", location.pathname);
            } catch (error) {
                console.error("Error tracking page view:", error);
            }
        };

        trackPageView();
    }, [location]);

    // Track button clicks dispatch events
    useEffect(() => {
        const handleTrackEvent = (e: Event) => {
            const customEvent = e as CustomEvent;
            if (customEvent.detail && customEvent.detail.name) {
                trackEvent('CTA Clicked', {
                    button: customEvent.detail.name,
                    page: location.pathname,
                });
            }
        };

        window.addEventListener('track-button-click', handleTrackEvent);
        return () => window.removeEventListener('track-button-click', handleTrackEvent);
    }, [location]);

    // Function to track custom events
    const trackEvent = async (name: string, data?: any) => {
        if (!supabase) {
            return;
        }

        try {
            await supabase.from('events').insert({
                name,
                data: { ...data, page: location.pathname },
                timestamp: new Date().toISOString(),
            });
            console.log("Tracked event:", name, data);
        } catch (error) {
            console.error("Error tracking event:", error);
        }
    };

    return { trackEvent };
};
