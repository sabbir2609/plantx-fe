"use server";

import { headers } from "next/headers";

interface TrackLinkPayload {
  link: string;
  referrer: string | null;
  user_agent: string;
  timestamp?: string;
}

export default async function trackPage(href: string): Promise<void> {
  try {
    const headersList = await headers();

    const payload: TrackLinkPayload = {
      link: href,
      referrer: headersList.get("referer") || null,
      user_agent: headersList.get("user-agent") || "unknown",
      timestamp: new Date().toISOString(),
    };

    const endpoint = `${process.env.NEXT_PUBLIC_HOST}/track/tracklinks/`;
    const response = await await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to track page");
    }
  } catch (error) {
    console.error("Error tracking page:", error);
  }
}
