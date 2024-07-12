import { getPlaiceholder } from "plaiceholder"

export default async function getRemoteBase64(imageUrl: string) {
    try {
        const src = imageUrl;

        const buffer = await fetch(src).then(async (res) =>
            Buffer.from(await res.arrayBuffer())
        );

        const { base64 } = await getPlaiceholder(buffer, { size: 10 });
        console.log(base64);
        return base64;

    } catch (e) {
        if (e instanceof Error) console.log(e.stack)
    }
}