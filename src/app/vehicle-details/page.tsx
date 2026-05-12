"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import ButtonHoverMagnetic from '@/components/button/ButtonHoverMagnetic/ButtonHoverMagnetic';

export default function VehicleDetailsPage() {
  const whatsapp = { label: "Chat on WhatsApp", href: "https://wa.me/1234567890" };
  
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLarge"
        background="fluid"
        cardStyle="outline"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "/" },
            { name: "Inventory", id: "/inventory" },
            { name: "Add Vehicle", id: "/admin/add-vehicle" },
            { name: "Login", id: "/login" }
          ]}
          brandName="Right Drive Auto"
        />
        
        <main className="py-24 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card rounded-3xl p-4 overflow-hidden">
              <img src="http://img.b2bpic.net/front-headlamp-with-brilliant-reflections-body-car_146671-14974.jpg?_wi=1" alt="Vehicle" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-4xl font-light">2020 Honda Accord</h1>
              <p className="text-2xl font-semibold">$22,500</p>
              <p className="text-lg opacity-80">Experience a perfect blend of performance, style, and reliability with this meticulously maintained sedan. Features modern safety tech and premium interior comfort.</p>
              <div className="pt-6">
                <ButtonHoverMagnetic 
                    text="Buy Now via WhatsApp"
                    href={whatsapp.href}
                />
              </div>
            </div>
          </div>
        </main>

        <FooterBaseReveal
          logoText="Right Drive Auto"
          columns={[
            { title: "Support", items: [whatsapp] },
            { title: "Location", items: [{ label: "8320 Gtwy Blvd E, El Paso, TX 79907", href: "#" }] },
            { title: "Company", items: [{ label: "Home", href: "/" }] }
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}