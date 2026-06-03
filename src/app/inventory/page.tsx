"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';

export default function InventoryPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="mediumLarge"
        background="fluid"
        cardStyle="outline"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <NavbarStyleFullscreen
        navItems={[
          { name: "Home", id: "/" },
          { name: "Features", id: "features" },
          { name: "Inventory", id: "/inventory" },
          { name: "Store Hours", id: "#hours" },
          { name: "Metrics", id: "metrics" },
          { name: "Testimonials", id: "testimonials" },
          { name: "FAQ", id: "faq" },
          { name: "Contact", id: "contact" },
          { name: "Login", id: "/login" },
          { name: "Add Vehicle", id: "/admin/add-vehicle" }
        ]}
        brandName="Right Drive Auto"
      />
      <div className="pt-32 pb-20 w-full">
        <iframe
          src="https://beacons.ai/rightdriveautotx"
          title="Right Drive Auto Texas Inventory"
          style={{ width: '100%', minHeight: '800px', border: 'none' }}
        ></iframe>
      </div>
    </ThemeProvider>
  );
}