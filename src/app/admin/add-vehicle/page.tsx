"use client";

import { useState } from 'react';
import { ThemeProvider } from '@/providers/themeProvider/ThemeProvider';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';

export default function AddVehiclePage() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
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
      <div className="min-h-screen flex items-center justify-center p-8 pt-32">
        <div className="w-full max-w-md bg-[var(--card)] p-8 rounded-[var(--border-radius)] border border-[var(--accent)]">
          <h1 className="text-3xl font-bold mb-6 text-[var(--foreground)]">Add New Vehicle</h1>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Vehicle Name"
              className="w-full p-3 rounded-lg border border-[var(--accent)]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Price"
              className="w-full p-3 rounded-lg border border-[var(--accent)]"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button className="w-full py-3 bg-[var(--primary-cta)] text-[var(--primary-cta-text)] font-semibold rounded-lg">
              Add Vehicle
            </button>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
}