import type { MetadataRoute } from "next";
import { serviceOfferings } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.SITE_URL || "https://rdpsc.ca").replace(/\/$/, "");
  const paths = ["", "/about", "/services", "/resources", "/contact", "/consultation", "/partnerships", "/who-we-serve", "/blog", "/privacy-policy", "/terms-of-service", "/cookies-policy", ...serviceOfferings.map(({ id }) => `/services/${id}`)];
  return paths.map(path => ({ url: `${baseUrl}${path}` }));
}
