"use client";

import { Calendar } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BookCallSection() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                theme: "dark",
                styles: { branding: { brandColor: "#000000" } },
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, []);

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">

                <p className="text-lg dark:text-white/70 text-black/70 mb-12 max-w-2xl mx-auto">
                    Schedule a 30-minute strategy session
                </p>

                <button
                    data-cal-link="kanishk-trikha-7w803u/30min"
                    data-cal-config='{"layout":"month_view"}'
                    className="inline-flex items-center gap-3 px-8 py-4 text-lg font-medium rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 transition-all duration-200 hover:scale-105 shadow-lg"
                >
                    <Calendar className="w-5 h-5" />
                    Book a Call
                </button>
            </div>
        </section>
    );
}
