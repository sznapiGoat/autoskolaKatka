import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  ["", 1],
  ["/ridicak-skupina-b", 0.9],
  ["/ridicak-na-motorku", 0.8],
  ["/nakladni-auto-a-traktor", 0.7],
  ["/kondicni-jizdy", 0.8],
  ["/prezkouseni-po-zakazu-rizeni", 0.8],
  ["/cenik", 0.9],
  ["/jak-na-ridicak", 0.7],
  ["/reference", 0.6],
  ["/kontakt", 0.8],
  ["/zasady-soukromi", 0.2],
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(([path, priority]) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-10-16"),
    priority,
  }));
}
