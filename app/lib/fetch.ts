"use server";

export default async function Fetch({ endpoint }: { endpoint: string }) {
    const url = `${process.env.NEXT_PUBLIC_HOST}/${endpoint}`;

    // if dev
    if (process.env.NODE_ENV === "development") {
        console.log(`Fetching data from ${url} in development mode`);
        const response = await fetch(url, {
            cache: "no-cache",
        });

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        return data;
    }

    // if prod
    else if (process.env.NODE_ENV === "production") {
        const response = await fetch(url, {
            next: {
                revalidate: 3600,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        return data;
    } else {
        throw new Error("Unknown environment");
    }
}
