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
import { Car, ShieldCheck, DollarSign, Clock } from 'lucide-react';
import BlogCardThree from '@/components/sections/blog/BlogCardThree'; // New import

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
        { name: "Home", id: "/" }, // Changed id from "hero" to "/"
        { name: "Features", id: "features" },
        { name: "Inventory", id: "/inventory" },
        { name: "Store Hours", id: "#hours" },
        { name: "Metrics", id: "metrics" },
        { name: "Testimonials", id: "testimonials" },
        { name: "FAQ", id: "faq" },
        { name: "Contact", id: "contact" },
        { name: "Login", id: "/login" },
        { name: "Add Vehicle", id: "/admin/add-vehicle" } // Added for consistency
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
        {
          title: "Store Hours & Sales",          description: "Visit us to buy your next car. Open Mon-Sat 9am-7pm, Sun 10am-5pm.",          buttonIcon: Clock
        }
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <BlogCardThree
      title="Our Latest TikToks"
      description="Follow @rightdriveautotx for daily updates, car tips, and behind-the-scenes content!"
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      carouselMode="auto"
      uniformGridCustomHeightClasses="min-h-[400px]"
      gridVariant="three-columns-all-equal-width"
      blogs={[
        {
          id: "1",          category: "Tips",          title: "How to Check Your Oil",          excerpt: "Quick guide on keeping your engine healthy.",          imageSrc: "http://img.b2bpic.net/mechanic-checking-oil-car_482257-22906.jpg?_wi=1",          authorName: "@rightdriveautotx",          date: "2023-10-26",          onBlogClick: () => window.open("https://www.tiktok.com/@rightdriveautotx", "_blank")
        },
        {
          id: "2",          category: "Showcase",          title: "New Arrival: Honda Civic!",          excerpt: "Get a sneak peek at our latest inventory addition.",          imageSrc: "http://img.b2bpic.net/dealership-salesman-answering-customers-questions-about-cars_482257-124577.jpg?_wi=1",          authorName: "@rightdriveautotx",          date: "2023-10-25",          onBlogClick: () => window.open("https://www.tiktok.com/@rightdriveautotx", "_blank")
        },
        {
          id: "3",          category: "Fun",          title: "POV: Test Driving Your Dream Car",          excerpt: "Experience the thrill from the driver's seat!",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-driving-car_23-2148906969.jpg?_wi=1",          authorName: "@rightdriveautotx",          date: "2023-10-24",          onBlogClick: () => window.open("https://www.tiktok.com/@rightdriveautotx", "_blank")
        },
        {
          id: "4",          category: "Maintenance",          title: "Tire Pressure Essentials",          excerpt: "Don't forget to check your tire pressure for safety.",          imageSrc: "http://img.b2bpic.net/young-mechanic-standing-garage-holding-tire-car_342744-1234.jpg?_wi=1",          authorName: "@rightdriveautotx",          date: "2023-10-23",          onBlogClick: () => window.open("https://www.tiktok.com/@rightdriveautotx", "_blank")
        }
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
      buttons={[{ text: whatsapp.label, href: whatsapp.href }]} // Use whatsapp object
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
      buttons={[{ text: whatsapp.label, href: whatsapp.href }]} // Use whatsapp object
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