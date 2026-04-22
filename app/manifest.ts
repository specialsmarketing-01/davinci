import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Davinci Properties",
    short_name: "Davinci",
    description:
      "Davinci Properties Dubai: buy, sell, rent, and invest in premium UAE real estate with expert advisory support.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#020101",
    lang: "en-AE",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
