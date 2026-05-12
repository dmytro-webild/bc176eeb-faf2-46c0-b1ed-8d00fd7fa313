"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Car, ShieldCheck, DollarSign, LogIn } from 'lucide-react';

export default function LandingPage() {
  const whatsapp = { label: "Chat on WhatsApp", href: "https://wa.me/1234567890" };

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
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Features", id: "features" },
        { name: "Inventory", id: "/inventory" },
        { name: "Vehicle Details", id: "/vehicle-details" },
        { name: "Metrics", id: "metrics" },
        { name: "Testimonials", id: "testimonials" },
        { name: "FAQ", id: "faq" },
        { name: "Contact", id: "contact" },
        { name: "Login", id: "/login" }
      ]}
      brandName="Right Drive Auto"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{ variant: "gradient-bars" }}
      title="Quality Pre-Owned Vehicles at Prices You Can Afford"
      description="Experience the Right Drive Auto difference. We provide a transparent, stress-free path to owning a reliable vehicle that fits your budget perfectly."
      buttons={[
        { text: "Explore Inventory", href: "/inventory" },
        { text: "Contact Sales", href: "#contact" }
      ]}
      carouselItems={[
        { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/woman-talking-sales-man-car-showroom_1303-15146.jpg" },
        { id: "2", imageSrc: "http://img.b2bpic.net/mechanics-repairing-car-workshop_329181-11856.jpg?_wi=1" },
        { id: "3", imageSrc: "http://img.b2bpic.net/dealership-salesman-answering-customers-questions-about-cars_482257-124577.jpg?_wi=1" },
        { id: "4", imageSrc: "http://img.b2bpic.net/female-mechanic-preparing-check-list_1170-1444.jpg" },
        { id: "5", imageSrc: "http://img.b2bpic.net/man-buying-car-showroom_1303-14589.jpg?_wi=1" },
        { id: "6", imageSrc: "http://img.b2bpic.net/happy-customers-car-dealership_23-2149106166.jpg?_wi=1" }
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      title="Why Choose Right Drive"
      description="We are committed to delivering the best vehicle buying experience in the market."
      textboxLayout="default"
      useInvertedBackground={false}
      buttons={[{ text: "View Inventory", href: "/inventory" }]}
      features={[
        { title: "Inspected Excellence", description: "Rigorous multi-point inspections and stress-free financing tailored to your needs.", buttonIcon: ShieldCheck },
        { title: "Transparent Financing", description: "Stress-free financing tailored to your needs.", buttonIcon: DollarSign },
        { title: "Warranty Protected", description: "Drive with full peace of mind.", buttonIcon: Car },
        { title: "Customer Portal Login", description: "Access your personalized dashboard, manage your vehicle documents, and check financing status securely.", buttonIcon: LogIn, buttonHref: "/login" },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      title="Inventory"
      description="Browse our comprehensive selection of quality pre-owned vehicles."
      gridVariant="three-columns-all-equal-width"
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      products={[
        { id: "1", name: "2020 Honda Accord", price: "$22,500", imageSrc: "http://img.b2bpic.net/front-headlamp-with-brilliant-reflections-body-car_146671-14974.jpg?_wi=1", onProductClick: () => window.location.href = '/vehicle-details' },
        { id: "2", name: "2019 Toyota Camry", price: "$21,000", imageSrc: "http://img.b2bpic.net/man-buying-car-showroom_1303-14589.jpg?_wi=2", onProductClick: () => window.location.href = '/vehicle-details' },
        { id: "3", name: "2021 Ford Escape", price: "$24,800", imageSrc: "http://img.b2bpic.net/mechanics-repairing-car-workshop_329181-11856.jpg?_wi=2", onProductClick: () => window.location.href = '/vehicle-details' },
        { id: "4", name: "2018 Jeep Grand Cherokee", price: "$28,900", imageSrc: "http://img.b2bpic.net/high-angle-security-guards-working_23-2148404048.jpg?_wi=1", onProductClick: () => window.location.href = '/vehicle-details' },
        { id: "5", name: "2020 Nissan Altima", price: "$19,500", imageSrc: "http://img.b2bpic.net/dealership-salesman-answering-customers-questions-about-cars_482257-124577.jpg?_wi=2", onProductClick: () => window.location.href = '/vehicle-details' },
        { id: "6", name: "2017 Chevrolet Tahoe", price: "$31,000", imageSrc: "http://img.b2bpic.net/happy-customers-car-dealership_23-2149106166.jpg?_wi=2", onProductClick: () => window.location.href = '/vehicle-details' }
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      title="Our Impact"
      description="Key performance indicators of our service."
      gridVariant="uniform-all-items-equal"
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "1", value: "1500+", title: "Cars Sold", description: "Vehicles on the road", icon: Car },
        { id: "2", value: "98%", title: "Satisfied", description: "Happy customers", icon: ShieldCheck }
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      title="Driver Reviews"
      description="See why our customers love their new vehicles."
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Alex R.", role: "Purchaser", testimonial: "The process was seamless and I love my new car!" },
        { id: "2", name: "Jamie S.", role: "Purchaser", testimonial: "Fair pricing and excellent support throughout." }
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      title="Help Center"
      description="Frequently asked questions about our process."
      textboxLayout="default"
      useInvertedBackground={false}
      faqsAnimation="slide-up"
      buttons={[{ text: whatsapp.label, href: whatsapp.href }]}
      faqs={[
        { id: "1", title: "Do you offer test drives?", content: "Yes, all vehicles are available for testing." },
        { id: "2", title: "Financing options?", content: "We have tailored plans for all credit histories." },
        { id: "3", title: "Where are you located?", content: "8320 Gtwy Blvd E, El Paso, TX 79907, United States" }
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      background={{ variant: "gradient-bars" }}
      text="Ready to drive your dream? Get in touch today at 8320 Gtwy Blvd E, El Paso, TX 79907."
      buttons={[{ text: whatsapp.label, href: whatsapp.href }]}
      useInvertedBackground={false}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Right Drive Auto"
      columns={[
        { title: "Support", items: [whatsapp] },
        { title: "Location", items: [{ label: "8320 Gtwy Blvd E, El Paso, TX 79907", href: "#" }] },
        { title: "Company", items: [{ label: "Home", href: "/" }] }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}