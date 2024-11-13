import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#FF6B6B] font-bold text-xl">
            <Image src="/logo.png" alt="EmojiChallenge.org" width={40} height={40} />
            EmojiChallenge.org
          </div>
          <nav>
            <Button asChild variant="default">
              <a href="#about">Learn More</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 text-white text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] z-0" />
        <div className="absolute inset-0 bg-[url('/bg-emojis.webp')] bg-cover bg-center opacity-30 z-[1]" />
        <div className="container mx-auto px-4 relative z-[2]">
          <h1 className="text-5xl font-bold mb-6">Welcome to the Emoji Challenge</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join millions in the most exciting social media trend that combines creativity, acting, and fun!
            Express yourself through emojis and showcase your emotional range.
          </p>
          <Button asChild size="lg" variant="secondary">
            <a href="#how-to-play">Start Playing</a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">What is the Emoji Challenge?</h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
            The Emoji Challenge is a viral social media phenomenon that combines creativity,
            acting skills, and emotional expression through emoji interpretations.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Social Media Trend",
                icon: "🌟",
                description: "The Emoji Challenge gained massive popularity on TikTok...",
                features: ["Viral social media trend", "Creative emoji interpretations", "Millions of participants worldwide"]
              },
              {
                title: "Creative Expression",
                icon: "🎭",
                description: "Participants showcase their acting abilities and emotional range...",
                features: ["Acting skill showcase", "Emotional range display", "Personal style integration"]
              },
              {
                title: "Community Engagement",
                icon: "🤝",
                description: "The challenge creates a vibrant community where users can share performances...",
                features: ["Global community participation", "Friendly competition", "Social interaction"]
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-[#FF6B6B]">{feature.title}</h3>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <p className="mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#FF6B6B]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section id="how-to-play" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">How to Play the Emoji Challenge</h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
            The Emoji Challenge offers multiple ways to play, from social media performances to memory games.
            Choose your preferred format and start expressing yourself!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Social Media Version",
                icon: "📱",
                steps: [
                  "Choose your platform (TikTok, Instagram, etc.)",
                  "Select emoji combinations for your performance",
                  "Record your creative interpretation",
                  "Add music and effects to enhance your video",
                  "Share and engage with the community"
                ]
              },
              {
                title: "Memory Game Version",
                icon: "🎮",
                steps: [
                  "Print or prepare digital emoji cards",
                  "Create an 8x5 grid of face-down cards",
                  "Use one hand to find matching pairs",
                  "Track your time for competition",
                  "Challenge friends to beat your score"
                ]
              }
            ].map((version, index) => (
              <Card key={index} className="p-8">
                <h3 className="text-2xl font-bold mb-4">{version.title}</h3>
                <div className="text-4xl mb-6">{version.icon}</div>
                <div className="space-y-4">
                  {version.steps.map((step, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF6B6B] text-white flex items-center justify-center">
                        {i + 1}
                      </div>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Popular Platforms for Emoji Challenge</h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
            The Emoji Challenge has found its home across various social media platforms,
            each offering unique features and communities.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "TikTok",
                icon: "📱",
                features: [
                  "Built-in music library",
                  "Easy video editing tools",
                  "Huge emoji challenge community",
                  "Trending hashtags and sounds",
                  "Duet and reaction features"
                ]
              },
              {
                name: "Instagram",
                icon: "📸",
                features: [
                  "Instagram Reels",
                  "Stories with emoji stickers",
                  "Feed posts with carousels",
                  "Live performances",
                  "Collaborative challenges"
                ]
              },
              {
                name: "Snapchat",
                icon: "👻",
                features: [
                  "AR filters and effects",
                  "Quick sharing with friends",
                  "Creative camera tools",
                  "Private group challenges",
                  "Spotlight submissions"
                ]
              },
              {
                name: "WhatsApp",
                icon: "💬",
                features: [
                  "Status updates",
                  "Group challenges",
                  "Video messages",
                  "Story sharing",
                  "Private competitions"
                ]
              }
            ].map((platform, index) => (
              <Card key={index} className="p-6">
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-xl font-bold mb-4">{platform.name}</h3>
                <ul className="space-y-2">
                  {platform.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#FF6B6B]">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Popular Emoji Challenge Examples</h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
            Check out these creative interpretations from social media stars that made the Emoji Challenge go viral!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Tati's Southern Farmer Act",
                emojis: "🤢 👨‍🌾 😂 😤",
                description: "TikTok creator Tati showcased her impressive acting range by repeating \"You stink!\" in a Southern farmer's voice..."
              },
              {
                title: "Chechin's Stranger Things Reference",
                emojis: "😠 😺 🗣️",
                description: "Creator Chechin went viral with his \"Chrissy, wake up!\" performance..."
              },
              {
                title: "Justin Han's K-Pop Version",
                emojis: "👦 💃",
                description: "Adding a K-Pop twist to the challenge, Justin Han collaborated with his little cousin..."
              },
              {
                title: "James Charles' Signature Style",
                emojis: "👋 😄 😢 😡",
                description: "Beauty influencer James Charles put his spin on the challenge using his famous \"Hi sisters!\" catchphrase..."
              }
            ].map((example, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-bold mb-3">{example.title}</h3>
                <div className="text-2xl mb-4 tracking-wider">{example.emojis}</div>
                <p className="text-sm">{example.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4ECDC4] to-[#FF6B6B] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Take the Emoji Challenge?</h2>
          <p className="text-xl mb-8">Join millions of players worldwide and show off your emoji acting skills!</p>
          <Button asChild size="lg" variant="secondary" className="hover:scale-105 transition-transform">
            <a href="#platforms">Get Started Now</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; 2024 EmojiChallenge.org - The Ultimate Destination for Emoji Challenge Enthusiasts</p>
        </div>
      </footer>
    </div>
  )
}
