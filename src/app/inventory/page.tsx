"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';

export default function InventoryPage() {
  const products = [];

  const handleEnquire = () => {
    window.location.href = 'mailto:info@rightdriveauto.co';
  };

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
      <div className="pt-32 pb-20">
        <ProductCardThree
            title="Vehicles for Sale"
            description="Browse our comprehensive selection of quality pre-owned vehicles. Click any vehicle to enquire."
            gridVariant="three-columns-all-equal-width"
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            products={products.map(p => ({
                ...p,
                priceButtonProps: {
                    text: "Enquire",                    onClick: handleEnquire
                }
            }))}
        />
      </div>
    </ThemeProvider>
  );
}