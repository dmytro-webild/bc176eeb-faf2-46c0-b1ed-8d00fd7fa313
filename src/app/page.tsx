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
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Car, ShieldCheck, DollarSign, Clock } from 'lucide-react';

export default function LandingPage() {
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
        { name: "Inventory", id: "products" },
        { name: "Metrics", id: "metrics" },
        { name: "Testimonials", id: "testimonials" },
        { name: "FAQ", id: "faq" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Right Drive Auto"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{ variant: "gradient-bars" }}
      title="Drive Your Dream Car Today"
      description="At Right Drive Auto, we make buying your next vehicle simple, affordable, and stress-free. Discover a wide selection of quality pre-owned vehicles waiting for you."
      carouselItems={[
        { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/woman-talking-sales-man-car-showroom_1303-15146.jpg" },
        { id: "2", imageSrc: "http://img.b2bpic.net/free-photo/mechanics-repairing-car-workshop_329181-11856.jpg" },
        { id: "3", imageSrc: "http://img.b2bpic.net/free-photo/dealership-salesman-answering-customers-questions-about-cars_482257-124577.jpg" },
        { id: "4", imageSrc: "http://img.b2bpic.net/free-photo/female-mechanic-preparing-check-list_1170-1444.jpg" },
        { id: "5", imageSrc: "http://img.b2bpic.net/free-photo/man-buying-car-showroom_1303-14589.jpg" },
        { id: "6", imageSrc: "http://img.b2bpic.net/free-photo/happy-customers-car-dealership_23-2149106166.jpg" }
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      title="Why Choose Right Drive"
      description="We are committed to delivering the best vehicle buying experience in the market."
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "Inspected Excellence", description: "Rigorous multi-point inspection.", buttonIcon: ShieldCheck },
        { title: "Transparent Financing", description: "Flexible options for all credits.", buttonIcon: DollarSign },
        { title: "Warranty Protected", description: "Drive with full peace of mind.", buttonIcon: Car },
        { title: "Swift Service", description: "Fast processing and delivery.", buttonIcon: Clock },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      title="Inventory"
      description="Premium selection of pre-owned vehicles."
      gridVariant="three-columns-all-equal-width"
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      products={[
        { id: "1", name: "Executive Sedan", price: "$24,500", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-security-guards-working_23-2148404048.jpg" },
        { id: "2", name: "Sporty Hatch", price: "$18,900", imageSrc: "http://img.b2bpic.net/free-photo/front-headlamp-with-brilliant-reflections-body-car_146671-14974.jpg" },
        { id: "3", name: "Premium Coupe", price: "$32,000", imageSrc: "http://img.b2bpic.net/free-photo/two-stylish-women-car-salon_1157-20866.jpg" }
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      title="Our Impact"
      gridVariant="uniform-all-items-equal"
      animationType="slide-up"
      textboxLayout="default"
      metrics={[
        { id: "1", value: "1500+", title: "Cars Sold", description: "Vehicles on the road", icon: Car },
        { id: "2", value: "98%", title: "Satisfied", description: "Happy customers", icon: ShieldCheck }
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      title="Driver Reviews"
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
      textboxLayout="default"
      faqsAnimation="slide-up"
      faqs={[
        { id: "1", title: "Do you offer test drives?", content: "Yes, all vehicles are available for testing." },
        { id: "2", title: "Financing options?", content: "We have tailored plans for all credit histories." }
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      background={{ variant: "gradient-bars" }}
      text="Ready to drive your dream? Get in touch today."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Right Drive Auto"
      columns={[{ title: "Company", items: [{ label: "Home", href: "#" }] }]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}