import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder"

export default async function getLocalBase64(imageUrl: string) {
    try {
        const file = await fs.readFile(`./public${imageUrl}`)
        const { base64 } = await getPlaiceholder(file)
        return base64
    } catch (e) {
        if (e instanceof Error) console.log(e.stack)
    }
}