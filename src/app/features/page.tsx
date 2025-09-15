import { Navigation } from "@/components/layout/navigation";
import { CTASplit } from "@/components/sections/cta-split";
import { SiteFooter } from "@/components/sections/site-footer";
import { FeatureHero } from "@/components/sections/feature-hero";
import { DetailedFeature } from "@/components/sections/detailed-feature";
import { iconMap } from "@/lib/icons";
import { Card, CardContent } from "@/components/ui/card";
import { APP_ROUTES } from "@/constants/routes";

// Import Lottie animations
import tutorAnimation from "@/assets/lottie/tutor.json";
import chatAnimation from "@/assets/lottie/chat.json";
import teachingAnimation from "@/assets/lottie/teaching.json";
import dashboardAnimation from "@/assets/lottie/dashboard.json";
import communityAnimation from "@/assets/lottie/community.json";
import securityAnimation from "@/assets/lottie/security.json";

export const metadata = {
  title: "Features - What Makes Linguaflex Unique · Linguaflex",
  description: "Discover Linguaflex's powerful features: AI voice tutor, built-in chat system, freelance marketplace, personalized learning dashboard, global community, and secure payments.",
};

export default function FeaturesPage() {
  const ctaData = {
    leftCTA: {
      title: "Start Learning Today",
      description: "Experience the power of AI-driven language learning with personalized feedback and real-time conversations.",
      buttonText: "Start Learning",
      buttonIcon: "microphone" as const,
      href: APP_ROUTES.LANGUAGE
    },
    rightCTA: {
      title: "Join as a Teacher/Consultant",
      description: "Share your expertise, build your reputation, and earn money by teaching or consulting on our platform.",
      buttonText: "Join as Teacher",
      buttonIcon: "briefcase" as const,
      href: APP_ROUTES.SIGN_UP
    }
  };

  return (
    <>
      <Navigation />
      <main>
        <FeatureHero />
        
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
            <DetailedFeature
              icon="microphone"
              title="AI Voice Language Tutor"
              description="Experience natural language learning through real-time voice conversations with our advanced AI tutor."
              features={[
                "Real-time voice conversations with AI",
                "Instant grammar, pronunciation & vocabulary corrections",
                "Multilingual support (English, Spanish, French, more coming soon)",
                "Adaptive learning that grows with your pace"
              ]}
              lottieAnimation={tutorAnimation}
            />

            <DetailedFeature
              icon="speech-bubble"
              title="Built-in Chat System"
              description="Communicate seamlessly with teachers and students through our integrated messaging platform."
              features={[
                "Text + Voice messaging",
                "Conversation history tracking",
                "Secure and private chats",
                "Similar to Upwork's chat for teachers and students"
              ]}
              lottieAnimation={chatAnimation}
              reverse
            />

            <DetailedFeature
              icon="female-teacher"
              title="Freelance Marketplace for Teachers & Consultants"
              description="Connect with learners worldwide and monetize your expertise through our comprehensive marketplace."
              features={[
                "Post gigs (language tutoring, consulting, coaching, etc.)",
                "Set your own pricing and availability",
                "Reach a global student/client base",
                "Ratings & reviews to build credibility"
              ]}
              lottieAnimation={teachingAnimation}
            />

            <DetailedFeature
              icon="bar-chart"
              title="Personalized Learning Dashboard"
              description="Track your progress and stay motivated with detailed analytics and personalized recommendations."
              features={[
                "Track your learning journey",
                "Progress reports and analytics",
                "Achievements & rewards for consistency",
                "Personalized recommendations for next lessons"
              ]}
              lottieAnimation={dashboardAnimation}
              reverse
            />

            <DetailedFeature
              icon="earth"
              title="Global Community"
              description="Connect with learners and teachers from around the world in our vibrant learning community."
              features={[
                "Peer-to-peer learning opportunities",
                "Join topic-based learning groups",
                "Share experiences and tips",
                "Build your global network"
              ]}
              lottieAnimation={communityAnimation}
            />

            <DetailedFeature
              icon="lock"
              title="Secure Payments & Earnings"
              description="Enjoy peace of mind with our secure payment system and transparent earning model."
              features={[
                "Multiple payment options for learners",
                "Fast and reliable withdrawals for teachers/consultants",
                "Transparent commission model",
                "Dispute resolution and support"
              ]}
              lottieAnimation={securityAnimation}
              reverse
            />

            <Card className="bg-gradient-to-r from-primary-500 to-primary-600 border-none text-white rounded-2xl">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {iconMap.rocket && <iconMap.rocket className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-2xl font-bold mb-4">All-in-One Platform</h3>
                <p className="text-primary-100 text-lg">
                  No need to juggle multiple apps—Linguaflex combines learning + freelancing + communication in one place.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <CTASplit 
          leftCTA={ctaData.leftCTA}
          rightCTA={ctaData.rightCTA}
          className="bg-gray-50"
        />
      </main>
      <SiteFooter />
    </>
  );
}
