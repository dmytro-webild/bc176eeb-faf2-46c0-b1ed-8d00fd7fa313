"use client";

import { useState } from 'react';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCatalog from '@/components/ecommerce/productCatalog/ProductCatalog';

export default function InventoryPage() {
  const [searchValue, setSearchValue] = useState('');
  const [filters, setFilters] = useState([
    { label: "Make", options: ["Any", "Honda", "Toyota", "Ford", "Mazda", "Porsche", "Kia"], selected: "Any" },
    { label: "Model", options: ["Any", "CR-V", "Camry", "F-150", "3", "718 Cayman", "Telluride", "Civic"], selected: "Any" },
    { label: "Year", options: ["Any", "2018", "2019", "2020", "2021", "2022", "2023"], selected: "Any" },
    { label: "Price", options: ["Any", "$10k - $20k", "$20k - $30k", "$30k - $40k", "$40k+"], selected: "Any" },
  ]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleFilterChange = (label: string, value: string) => {
    setFilters(prevFilters =>
      prevFilters.map(filter =>
        filter.label === label ? { ...filter, selected: value } : filter
      )
    );
  };

  const dummyProducts = [
    {
      id: "1",      category: "SUV",      name: "2020 Honda CR-V",      price: "$25,000",      rating: 4,
      reviewCount: "85",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DcMkOoL2COCmBJKYkA7aitVXFP/uploaded-1778684821975-7044vtay.jpg?_wi=1",      imageAlt: "2020 Honda CR-V"},
    {
      id: "2",      category: "Sedan",      name: "2022 Toyota Camry",      price: "$28,500",      rating: 5,
      reviewCount: "120",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DcMkOoL2COCmBJKYkA7aitVXFP/uploaded-1778684821976-zv4nr4yg.jpg?_wi=1",      imageAlt: "2022 Toyota Camry"},
    {
      id: "3",      category: "Truck",      name: "2019 Ford F-150",      price: "$35,000",      rating: 4,
      reviewCount: "90",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DcMkOoL2COCmBJKYkA7aitVXFP/uploaded-1778684821976-apauiaiu.jpg",      imageAlt: "2019 Ford F-150"},
    {
      id: "4",      category: "Hatchback",      name: "2021 Mazda 3",      price: "$21,000",      rating: 4,
      reviewCount: "70",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DcMkOoL2COCmBJKYkA7aitVXFP/uploaded-1778684821976-r42n1lup.jpg",      imageAlt: "2021 Mazda 3"},
    {
      id: "5",      category: "Convertible",      name: "2018 Porsche 718 Cayman",      price: "$60,000",      rating: 5,
      reviewCount: "45",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DcMkOoL2COCmBJKYkA7aitVXFP/uploaded-1778684821976-03ign7ah.jpg",      imageAlt: "2018 Porsche 718 Cayman"},
    {
      id: "6",      category: "SUV",      name: "2023 Kia Telluride",      price: "$38,000",      rating: 5,
      reviewCount: "110",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DcMkOoL2COCmBJKYkA7aitVXFP/uploaded-1778684821975-7044vtay.jpg?_wi=2",      imageAlt: "2023 Kia Telluride"},
    {
      id: "7",      category: "Sedan",      name: "2020 Honda Civic",      price: "$19,800",      rating: 4,
      reviewCount: "95",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DcMkOoL2COCmBJKYkA7aitVXFP/uploaded-1778684821976-zv4nr4yg.jpg?_wi=2",      imageAlt: "2020 Honda Civic"},
  ];

  // Basic filtering logic
  const filteredProducts = dummyProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchValue.toLowerCase());

    const matchesFilters = filters.every(filter => {
      if (filter.selected === "Any") return true;
      switch (filter.label) {
        case "Make":
          return product.name.includes(filter.selected);
        case "Model":
          return product.name.includes(filter.selected);
        case "Year":
          return product.name.includes(filter.selected);
        case "Price":
          // This is a simplified price filter, can be expanded for more robust logic
          if (filter.selected.includes("-")) {
            const [min, max] = filter.selected.replace(/[^0-9-]/g, '').split('-').map(Number);
            const productPrice = parseInt(product.price.replace(/[^0-9]/g, ''));
            return productPrice >= min * 1000 && productPrice <= max * 1000;
          } else if (filter.selected.includes("+")) {
            const min = parseInt(filter.selected.replace(/[^0-9]/g, ''));
            const productPrice = parseInt(product.price.replace(/[^0-9]/g, ''));
            return productPrice >= min * 1000;
          }
          return true;
        default:
          return true;
      }
    });
    return matchesSearch && matchesFilters;
  });

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
        <ProductCatalog
          layout="page"
          products={filteredProducts}
          searchValue={searchValue}
          onSearchChange={handleSearchChange}
          filters={filters.map(f => ({
            label: f.label,
            options: f.options,
            selected: f.selected,
            onChange: (value) => handleFilterChange(f.label, value)
          }))}
          searchPlaceholder="Search vehicles..."
          emptyMessage="No vehicles found matching your criteria."
        />
      </div>
    </ThemeProvider>
  );
}