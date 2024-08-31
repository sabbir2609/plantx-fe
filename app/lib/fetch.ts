"use server";

export default async function Fetch({ endpoint }: { endpoint: string }) {
    console.log(`Fetching data from ${process.env.NEXT_PUBLIC_HOST}/${endpoint}`);
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/${endpoint}`, {
        cache: "no-cache",
    });
    // const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/${endpoint}`);
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
}