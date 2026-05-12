"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

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
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Inventory",
          id: "products",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Right Drive Auto"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "gradient-bars",
      }}
      title="Drive Your Dream Car Today"
      description="At Right Drive Auto, we make buying your next vehicle simple, affordable, and stress-free. Discover a wide selection of quality pre-owned vehicles waiting for you."
      imageSrc="http://img.b2bpic.net/free-photo/woman-talking-sales-man-car-showroom_1303-15146.jpg"
      imageAlt="Right Drive Auto Showroom"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "1",
          title: "Inspected Excellence",
          author: "QA Team",
          description: "Every vehicle undergoes a rigorous multi-point inspection to ensure reliability.",
          tags: [
            "Reliable",
            "Quality",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/mechanics-repairing-car-workshop_329181-11856.jpg",
        },
        {
          id: "2",
          title: "Transparent Financing",
          author: "Finance Dept",
          description: "Tailored financing solutions regardless of your credit history.",
          tags: [
            "Easy",
            "Fast",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/dealership-salesman-answering-customers-questions-about-cars_482257-124577.jpg",
        },
        {
          id: "3",
          title: "Warranty Covered",
          author: "Service Team",
          description: "Drive away with peace of mind thanks to our comprehensive warranty plans.",
          tags: [
            "Secure",
            "Protected",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/female-mechanic-preparing-check-list_1170-1444.jpg",
        },
      ]}
      title="Why Choose Right Drive"
      description="We are committed to delivering the best vehicle buying experience in the market."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "2022 Executive Sedan",
          price: "$24,500",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-security-guards-working_23-2148404048.jpg",
        },
        {
          id: "2",
          name: "2021 Sporty Hatch",
          price: "$18,900",
          imageSrc: "http://img.b2bpic.net/free-photo/front-headlamp-with-brilliant-reflections-body-car_146671-14974.jpg",
        },
        {
          id: "3",
          name: "2023 Premium Coupe",
          price: "$32,000",
          imageSrc: "http://img.b2bpic.net/free-photo/two-stylish-women-car-salon_1157-20866.jpg",
        },
        {
          id: "4",
          name: "2020 Family SUV",
          price: "$21,500",
          imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-female-customer-modern-stylish-bearded-businessman-automobile-saloon_146671-16021.jpg",
        },
        {
          id: "5",
          name: "2021 Hybrid Compact",
          price: "$19,500",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-women-dealership_23-2148266117.jpg",
        },
        {
          id: "6",
          name: "2022 Luxury Wagon",
          price: "$28,000",
          imageSrc: "http://img.b2bpic.net/free-photo/car-side-mirror-represents-reflection-safety-visual-extension_169016-57375.jpg",
        },
      ]}
      title="Explore Our Inventory"
      description="Find your perfect ride from our diverse collection of premium vehicles."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Our Track Record"
      tag="Milestones"
      metrics={[
        {
          id: "m1",
          value: "1500+",
          description: "Cars Sold",
        },
        {
          id: "m2",
          value: "98%",
          description: "Customer Satisfaction",
        },
        {
          id: "m3",
          value: "10+",
          description: "Years in Business",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Alex R.",
          handle: "@alexr",
          testimonial: "The process was seamless and I love my new car!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-buying-car-showroom_1303-14589.jpg",
        },
        {
          id: "2",
          name: "Jamie S.",
          handle: "@jamies",
          testimonial: "Fair pricing and excellent support throughout.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-customers-car-dealership_23-2149106166.jpg",
        },
        {
          id: "3",
          name: "Morgan D.",
          handle: "@morgand",
          testimonial: "Best dealership experience I've had so far.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/female-model-with-bunch-keys_1187-5671.jpg",
        },
        {
          id: "4",
          name: "Casey T.",
          handle: "@caseyt",
          testimonial: "Very professional and friendly team members.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-smiling-man-holding-car-keys_93675-134391.jpg",
        },
        {
          id: "5",
          name: "Taylor J.",
          handle: "@taylorj",
          testimonial: "Found exactly what I needed at a great price.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/car-dealership-salesman-inviting-customers-conduct-test-drives_482257-124482.jpg",
        },
      ]}
      showRating={true}
      title="What Our Drivers Say"
      description="Join our community of happy and satisfied vehicle owners."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Do you offer test drives?",
          content: "Yes, all vehicles in our inventory are available for a test drive.",
        },
        {
          id: "f2",
          title: "What financing options exist?",
          content: "We work with multiple lenders to provide flexible options for all credit types.",
        },
        {
          id: "f3",
          title: "Can I trade in my old car?",
          content: "Definitely! We provide competitive trade-in valuations on-site.",
        },
      ]}
      title="Frequently Asked"
      description="Common questions about our buying and service process."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      text="Ready to get behind the wheel? Contact us today to schedule your visit or test drive."
      buttons={[
        {
          text: "Contact Us",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "Inventory",
              href: "#products",
            },
            {
              label: "Financing",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
          ],
        },
      ]}
      logoText="Right Drive Auto"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
