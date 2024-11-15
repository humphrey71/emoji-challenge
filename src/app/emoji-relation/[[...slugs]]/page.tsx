import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BaseEmojiSelector } from "../component/base-emoji-selector"
import { CombiningEmojiSelector } from "../component/combining-emoji-selector"
import { ShowResult } from "../component/show-result"

export const metadata = {
    title: "Emoji Relation - Create Unique Emoji Connections",
    description: "Discover Emoji Relation, where emotions meet through unique emoji combinations. Create and share your emoji connections, experience the magic of emoji fusion, and build meaningful relationships.",
}

export default function EmojiRelationPage({ params: { slugs } }: { params: { slugs: string[] } }) {
    const baseEmojiCodepoint = slugs?.[0]
    const combiningEmojiCodepoint = slugs?.[1]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section id="hero" className="relative pt-32 pb-32 text-white">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#A5B4FC] z-0" />
                <div className="absolute inset-0 bg-[url('/bg-emoji-relation.webp')] bg-cover bg-center opacity-20 z-[1]" />
                <div className="container mx-auto px-4 relative z-[2]">
                    {/* Hero Content */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold mb-6">Welcome to Emoji Relation</h1>
                        <p className="text-xl max-w-2xl mx-auto mb-8">
                            Join millions in creating unique emoji connections! Choose your emoji,
                            share with friends, and discover magical combinations together.
                        </p>
                    </div>

                    {baseEmojiCodepoint ? (
                        combiningEmojiCodepoint ? (
                            <ShowResult baseEmojiCodepoint={baseEmojiCodepoint} combiningEmojiCodepoint={combiningEmojiCodepoint} />
                        ) : (
                            <CombiningEmojiSelector baseEmojiCodepoint={baseEmojiCodepoint} />
                        )
                    ) : (
                        <BaseEmojiSelector />
                    )}

                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8">How Emoji Relation Works</h2>
                    <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
                        Experience the magic of Emoji Relation through our simple three-step process.
                        Each step is carefully designed to create anticipation and excitement,
                        making every interaction special and memorable.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Select Emoji",
                                icon: "🎯",
                                description: "Choose an emoji that represents your current mood and create a unique Emoji Relation link to share"
                            },
                            {
                                title: "Share Link",
                                icon: "🔗",
                                description: "Generate a unique link and share it with friends, waiting for their response, and create unique emoji combinations together."
                            },
                            {
                                title: "Discover Together",
                                icon: "✨",
                                description: "When your friend also makes their choice, witness the moment where two emojis transform into a unique creation!"
                            }
                        ].map((step, index) => (
                            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-bold mb-4 text-[#6366F1]">{step.title}</h3>
                                <div className="text-4xl mb-4">{step.icon}</div>
                                <p className="text-gray-600">{step.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8">Unique Features</h2>
                    <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
                        Emoji Relation offers a suite of innovative features designed to make every
                        interaction meaningful. From the moment you choose your emoji to the final
                        reveal, every detail is crafted to create an unforgettable experience.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Mystery Design",
                                icon: "🎭",
                                description: "The secretive mechanism: We'll keep your friend's choice a secret until they make their choice. This anticipation makes every interaction exciting."
                            },
                            {
                                title: "Beautiful Animations",
                                icon: "✨",
                                description: "The unique animation effect: Each step of the process is accompanied by carefully designed animations, making the entire process feel special."
                            },
                            {
                                title: "Smart Fusion",
                                icon: "🎨",
                                description: "Creative emoji combinations: Using advanced Emoji Kitchen technology, we blend two emojis perfectly, creating a unique combination."
                            },
                            {
                                title: "Convenient Sharing",
                                icon: "📱",
                                description: "Multi-platform sharing: Supports major social platforms like WeChat, WhatsApp, and Twitter, making it easy to share moments."
                            }
                        ].map((feature, index) => (
                            <Card key={index} className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className="text-4xl">{feature.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8">Perfect for Every Relationship</h2>
                    <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
                        Discover how Emoji Relation transforms everyday interactions into magical moments.
                        Whether connecting with friends, expressing love, or breaking the ice,
                        find the perfect way to share emotions through emoji combinations.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Friendship",
                                icon: "👥",
                                description: "Create unique emojis with friends, making every interaction exciting.",
                                examples: ["Birthday wishes", "Daily greetings", "Fun challenges"]
                            },
                            {
                                title: "Romantic Love",
                                icon: "💑",
                                description: "Create unique romantic emojis, leaving sweet memories.",
                                examples: ["Romantic proposals", "Anniversary surprises", "Daily flirting"]
                            },
                            {
                                title: "Holiday Greetings",
                                icon: "🎉",
                                description: "Send unique holiday greetings, making greetings warmer.",
                                examples: ["New Year wishes", "Holiday greetings", "Special commemorations"]
                            },
                            {
                                title: "Team Building",
                                icon: "🤝",
                                description: "Improve team cohesion, create unique team emojis.",
                                examples: ["Team building activities", "Icebreaker games", "Team celebrations"]
                            },
                            {
                                title: "Family Love",
                                icon: "👨‍👩‍👧‍👦",
                                description: "Create warm emojis with family members, conveying浓浓亲情。",
                                examples: ["Family expressions", "Family gatherings", "Daily care"]
                            },
                            {
                                title: "Social Icebreaker",
                                icon: "🎮",
                                description: "Make social interactions more fun and easy to connect with people.",
                                examples: ["First meeting", "Lively atmosphere", "Fun interactions"]
                            }
                        ].map((useCase, index) => (
                            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">{useCase.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                                <p className="text-gray-600 mb-4">{useCase.description}</p>
                                <div className="flex gap-2 flex-wrap justify-center">
                                    {useCase.examples.map((example, i) => (
                                        <span key={i} className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                                            {example}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Animation Preview Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8">Beautiful Animations</h2>
                    <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
                        The Emoji Relation experience comes alive through carefully crafted animations.
                        Each interaction is enhanced with smooth transitions and delightful effects,
                        making every moment special.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Select Animation",
                                icon: "🎯",
                                description: "The scaling effect during emoji selection, making each click feel responsive",
                                details: ["Smooth transition", "Visual feedback", "Smooth experience"]
                            },
                            {
                                title: "Reveal Animation",
                                icon: "🎭",
                                description: "The flipping effect when revealing the friend's emoji, creating anticipation",
                                details: ["Elegant display", "Surprise experience", "Perfect timing"]
                            },
                            {
                                title: "Fusion Animation",
                                icon: "✨",
                                description: "The magical effect during emoji fusion, witnessing the magic moment",
                                details: ["Creative transition", "Unique effect", "Perfect presentation"]
                            }
                        ].map((animation, index) => (
                            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">{animation.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{animation.title}</h3>
                                <p className="text-gray-600 mb-4">{animation.description}</p>
                                <div className="flex gap-2 flex-wrap justify-center">
                                    {animation.details.map((detail, i) => (
                                        <span key={i} className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                                            {detail}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#6366F1] to-[#A5B4FC] text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Start Your Emoji Relation Journey?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join millions of users who are already creating meaningful connections through
                        Emoji Relation. Express yourself in a unique way, share magical moments with
                        friends, and discover the joy of emoji fusion. Start your journey today and
                        create your first Emoji Relation!
                    </p>
                    <div className="space-y-4">
                        <Button asChild size="lg" variant="secondary" className="hover:scale-105 transition-transform">
                            <a href="#hero">Get Started</a>
                        </Button>
                        <p className="text-sm opacity-90">
                            Over 1 million unique emoji combinations created through Emoji Relation
                            <br />
                            Join us and discover a new way to connect
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
} 