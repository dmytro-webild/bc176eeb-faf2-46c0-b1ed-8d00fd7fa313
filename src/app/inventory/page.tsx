"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import { ArrowRight } from 'lucide-react'; // Needed for buttonIcon

export default function InventoryPage() {
  const tiktokVideos = [
    {
      title: "Daily Car Tips!",      description: "Quick hacks to keep your ride in top shape. Follow us for more!",      videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-modern-car-showcase-4364-large.mp4", // Placeholder video
      imageAlt: "TikTok video: Daily Car Tips",      buttonIcon: ArrowRight, // Directly in feature item
      buttonHref: "https://www.tiktok.com/@rightdriveautotx/video/7300000000000000001" // Dummy TikTok video link
    },
    {
      title: "POV: Test Driving Your Dream Car",      description: "Come experience the thrill at Right Drive Auto. What's your dream car?",      videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-driving-on-the-highway-in-a-yellow-car-5415-large.mp4", // Placeholder video
      imageAlt: "TikTok video: Test Drive POV",      buttonIcon: ArrowRight,
      buttonHref: "https://www.tiktok.com/@rightdriveautotx/video/7300000000000000002"
    },
    {
      title: "Behind the Scenes: Detailing",      description: "See how we get our vehicles showroom ready. Precision and care in every detail!",      videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-worker-cleaning-car-interior-with-a-sponge-4404-large.mp4", // Placeholder video
      imageAlt: "TikTok video: Detailing process",      buttonIcon: ArrowRight,
      buttonHref: "https://www.tiktok.com/@rightdriveautotx/video/7300000000000000003"
    },
    {
      title: "New Inventory Arrivals!",      description: "First look at our freshest stock! Don't miss out on your next car.",      videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-car-dealer-looking-at-new-car-5626-large.mp4", // Placeholder video
      imageAlt: "TikTok video: New Arrivals",      buttonIcon: ArrowRight,
      buttonHref: "https://www.tiktok.com/@rightdriveautotx/video/7300000000000000004"
    }
  ];

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
        <FeatureCardTwentySix
            title="Latest from @rightdriveautotx"
            description="Explore our TikTok feed for daily insights, car care tips, and exclusive looks at new arrivals. Each video is playable inline, so dive right in!"
            textboxLayout="default"
            useInvertedBackground={false}
            features={tiktokVideos}
            buttons={[{ text: "View all on TikTok", href: "https://www.tiktok.com/@rightdriveautotx" }]} // Global button
        />
      </div>
    </ThemeProvider>
  );
}