import HeroImageLg from "./sub/HeroImage";

export default async function Hero() {
  const title = "Elevate your space with nature";
  const description =
    "Transform your environment with our sustainable plant-based solutions";

  return <HeroImageLg title={title} description={description} />;
}
