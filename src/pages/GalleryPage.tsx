import { useState } from "react";
import type { GalleryCategory } from "../types";
import CosplayGallery from "../components/CosplayGallery";
import galleryData from "../data/gallery.json";

export default function GalleryPage() {
  const [gallery] = useState<{ categories: GalleryCategory[] }>(galleryData);

  return (
    <div className="min-h-screen pt-20">
      <CosplayGallery categories={gallery.categories} />
    </div>
  );
}
