"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';

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
            { name: "Inventory", id: "/inventory" },
            { name: "Add Vehicle", id: "/admin/add-vehicle" },
            { name: "Login", id: "/login" }
        ]}
        brandName="Right Drive Auto"
      />
      <div className="pt-32 pb-20">
        <ProductCardThree
            title="Available Vehicles"
            description="Browse our comprehensive selection of quality pre-owned vehicles."
            gridVariant="three-columns-all-equal-width"
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            products={[
                { id: "1", name: "2020 Honda Accord", price: "$22,500", imageSrc: "http://img.b2bpic.net/front-headlamp-with-brilliant-reflections-body-car_146671-14974.jpg?_wi=2" },
                { id: "2", name: "2019 Toyota Camry", price: "$21,000", imageSrc: "http://img.b2bpic.net/man-buying-car-showroom_1303-14589.jpg?_wi=2" },
                { id: "3", name: "2021 Ford Escape", price: "$24,800", imageSrc: "http://img.b2bpic.net/mechanics-repairing-car-workshop_329181-11856.jpg?_wi=2" },
                { id: "4", name: "2018 Jeep Grand Cherokee", price: "$28,900", imageSrc: "http://img.b2bpic.net/high-angle-security-guards-working_23-2148404048.jpg?_wi=2" },
                { id: "5", name: "2020 Nissan Altima", price: "$19,500", imageSrc: "http://img.b2bpic.net/dealership-salesman-answering-customers-questions-about-cars_482257-124577.jpg?_wi=2" },
                { id: "6", name: "2017 Chevrolet Tahoe", price: "$31,000", imageSrc: "http://img.b2bpic.net/happy-customers-car-dealership_23-2149106166.jpg?_wi=2" }
            ]}
        />
      </div>
    </ThemeProvider>
  );
}