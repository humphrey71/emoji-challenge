import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const metadata = {
    title: "Emoji Kitchen - Create Unique Emoji Mashups | EmojiChallenge.org",
    description: "Discover Emoji Kitchen, Google's creative tool for combining emojis into unique mashups. Learn how to create over 100,000 possible combinations and enhance your digital communication with personalized emoji stickers.",
}

export default function EmojiKitchenPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 text-white text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] z-0" />
                <div className="absolute inset-0 bg-[url('/bg-kitchen.webp')] bg-cover bg-center opacity-30 z-[1]" />
                <div className="container mx-auto px-4 relative z-[2]">
                    <h1 className="text-5xl font-bold mb-6">Welcome to Emoji Kitchen</h1>
                    <p className="text-xl max-w-2xl mx-auto mb-8">
                        Unleash your creativity with Google&apos;s Emoji Kitchen! Mix and match emojis to create unique,
                        expressive stickers for your digital conversations.
                    </p>
                    <Button asChild size="lg" variant="secondary">
                        <a href="#try-kitchen">Start Creating</a>
                    </Button>
                </div>
            </section>

            {/* Emoji Kitchen Tool Section */}
            <section id="try-kitchen" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8">Try Emoji Kitchen</h2>
                    <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
                        Mix and match emojis right here to create your own unique combinations.
                        Select any two emojis and see what delightful mashup you can create!
                    </p>

                    <div className="relative w-full max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden">
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://emojikitchen.com"
                                className="w-full h-[600px] border-0 rounded-lg"
                                allow="clipboard-write"
                                title="Emoji Kitchen Tool"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8">What is Emoji Kitchen?</h2>
                    <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
                        Emoji Kitchen is Google&apos;s innovative feature that lets you combine different emojis
                        to create unique mashups. With over 100,000 possible combinations, it&apos;s revolutionizing
                        how we express ourselves in digital communication.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Creative Mashups",
                                icon: "🎨",
                                description: "Combine any two emojis to create unique sticker designs. From color modifications to conceptual combinations, Emoji Kitchen offers endless creative possibilities.",
                                features: [
                                    "Over 100,000 combinations",
                                    "Unique sticker designs",
                                    "Creative expression",
                                    "Playful communication"
                                ]
                            },
                            {
                                title: "Cross-Platform Access",
                                icon: "🌐",
                                description: "Originally part of Gboard for Android, Emoji Kitchen is now available across multiple platforms including iOS, Windows, and macOS through Google Search.",
                                features: [
                                    "Multi-platform support",
                                    "Easy web access",
                                    "Gboard integration",
                                    "Universal compatibility"
                                ]
                            },
                            {
                                title: "Expert Curation",
                                icon: "✨",
                                description: "Each combination is carefully curated by Google&apos;s design team, ensuring meaningful and expressive results that reflect cultural expressions.",
                                features: [
                                    "Professional design",
                                    "Cultural relevance",
                                    "Regular updates",
                                    "Quality assurance"
                                ]
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

            {/* How It Works Section */}
            <section id="how-it-works" className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8">How Emoji Kitchen Works</h2>
                    <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
                        Creating unique emoji mashups is simple and fun with Emoji Kitchen. Follow these steps
                        to start mixing your favorite emojis into creative combinations.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-8">
                            <h3 className="text-2xl font-bold mb-6">Getting Started</h3>
                            <div className="steps-list">
                                {[
                                    "Visit Google Search or open Gboard",
                                    "Enter 'Emoji Kitchen' in the search bar",
                                    "Click 'Get cooking' to open the interface",
                                    "Select your first emoji",
                                    "Choose a second emoji to combine",
                                    "Save or share your creation"
                                ].map((step, index) => (
                                    <div key={index} className="flex gap-3 mb-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF6B6B] text-white flex items-center justify-center">
                                            {index + 1}
                                        </div>
                                        <p>{step}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h3 className="text-2xl font-bold mb-6">Pro Tips</h3>
                            <div className="steps-list">
                                {[
                                    "Try the same emoji twice for exaggerated versions",
                                    "Use 🪄 or ✨ to access hidden blob designs",
                                    "Experiment with face + object combinations",
                                    "Mix contrasting emotions for unique results",
                                    "Share creations directly to social media",
                                    "Save favorites for quick access"
                                ].map((tip, index) => (
                                    <div key={index} className="flex gap-3 mb-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4ECDC4] text-white flex items-center justify-center">
                                            💡
                                        </div>
                                        <p>{tip}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Mashup Types Section */}
            <section id="mashup-types" className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8">Types of Emoji Kitchen Mashups</h2>
                    <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
                        Discover the five distinct types of emoji combinations available in Emoji Kitchen,
                        each offering unique ways to express yourself.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Color Modifiers",
                                icon: "🎨",
                                description: "Change the color scheme of emojis by combining them with color-related emojis.",
                                example: "😊 + 💙 = Blue Happy Face"
                            },
                            {
                                title: "Fusion Faces",
                                icon: "🤪",
                                description: "Merge two face emojis to create unique emotional expressions.",
                                example: "😂 + 😭 = Laughing with Tears"
                            },
                            {
                                title: "Object Juxtaposition",
                                icon: "🎭",
                                description: "Combine faces with objects for creative and humorous results.",
                                example: "😎 + 🌮 = Cool Taco"
                            },
                            {
                                title: "Double Tap",
                                icon: "✌️",
                                description: "Use the same emoji twice for exaggerated versions.",
                                example: "🥺 + 🥺 = Extra Pleading Face"
                            },
                            {
                                title: "Conceptual Combos",
                                icon: "🤔",
                                description: "Create clever combinations based on related concepts.",
                                example: "⭐ + 🐟 = Starfish"
                            },
                            {
                                title: "Hidden Blobs",
                                icon: "🪄",
                                description: "Access special blob designs using magic wand or sparkles.",
                                example: "✨ + 😊 = Blob Happy Face"
                            }
                        ].map((type, index) => (
                            <Card key={index} className="p-6">
                                <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                                <div className="text-4xl mb-4">{type.icon}</div>
                                <p className="mb-4">{type.description}</p>
                                <div className="text-sm text-gray-600">
                                    Example: {type.example}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Usage Stats Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8">Emoji Kitchen by the Numbers</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                number: "100,000+",
                                label: "Possible Combinations",
                                description: "Unique emoji mashups available to create"
                            },
                            {
                                number: "3B+",
                                label: "Shared Stickers",
                                description: "Stickers created and shared by users worldwide"
                            },
                            {
                                number: "2020",
                                label: "Launch Year",
                                description: "When Google first introduced Emoji Kitchen"
                            }
                        ].map((stat, index) => (
                            <Card key={index} className="p-6 text-center">
                                <div className="text-4xl font-bold text-[#FF6B6B] mb-2">{stat.number}</div>
                                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                                <p className="text-gray-600">{stat.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#4ECDC4] to-[#FF6B6B] text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Start Cooking with Emojis?</h2>
                    <p className="text-xl mb-8">Join millions of users creating unique emoji combinations!</p>
                    <Button asChild size="lg" variant="secondary" className="hover:scale-105 transition-transform">
                        <a href="#try-kitchen">Try Emoji Kitchen Now</a>
                    </Button>
                </div>
            </section>

        </div>
    )
} 