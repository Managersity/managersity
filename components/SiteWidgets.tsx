"use client";

import { usePathname } from "next/navigation";
import ChatBot from "@/components/ChatBot";
import OfferBanner from "@/components/OfferBanner";

export default function SiteWidgets() {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) return null;

  return (
    <>
      <OfferBanner />
      <ChatBot />
    </>
  );
}
