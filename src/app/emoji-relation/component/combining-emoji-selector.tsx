"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { emojiMetadata, getNotoEmojiUrl } from "@/lib/emoji-kitchen"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useMemo, useState } from "react"
export function CombiningEmojiSelector({ baseEmojiCodepoint }: { baseEmojiCodepoint: string }) {
    const router = useRouter()

    const [combiningEmojiCodepoint, setCombiningEmojiCodepoint] = useState<string | null>(null)

    const handleGenerate = async () => {
        if (!baseEmojiCodepoint || !combiningEmojiCodepoint) return

        try {
            // 生成分享链接
            const shareUrl = `${window.location.origin}/emoji-relation/${encodeURIComponent(baseEmojiCodepoint)}/${encodeURIComponent(combiningEmojiCodepoint)}`

            router.push(shareUrl)
        } catch (error) {
            console.error('Error sharing:', error)
        }
    }

    const combinableEmojiCodepoints = useMemo(() => {

        const baseEmojiData = emojiMetadata.data[baseEmojiCodepoint]
        const combinations = Object.entries(baseEmojiData.combinations).map(([combiningEmojiCodepoint]) => combiningEmojiCodepoint)
        return combinations
    }, [baseEmojiCodepoint])



    return (
        <Card className="w-96 bg-transparent mx-auto">
            <CardHeader>
                <CardTitle className="text-center">Choose Your Emoji</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">

                <ScrollArea className="w-96 h-96">
                    <div className="grid grid-cols-8 ">
                        {emojiMetadata.knownSupportedEmoji.map((emojiCodepoint) => {
                            const emojiData = emojiMetadata.data[emojiCodepoint]
                            return (
                                <div key={emojiCodepoint} className="size-8">
                                    {
                                        combinableEmojiCodepoints.includes(emojiCodepoint) ? (
                                            <Image
                                                unoptimized
                                                src={getNotoEmojiUrl(emojiData.emojiCodepoint)}
                                                alt={emojiData.alt}
                                                width={32}
                                                height={32}
                                                className="cursor-pointer hover:scale-120 transition-all"
                                                onClick={() => setCombiningEmojiCodepoint(emojiCodepoint)}
                                            />
                                        ) : (
                                            <Image
                                                unoptimized
                                                src={getNotoEmojiUrl(emojiData.emojiCodepoint)}
                                                alt="Unsupport"
                                                width={32}
                                                height={32}
                                                className="opacity-50"
                                            />
                                        )
                                    }
                                </div>
                            )
                        })}
                    </div>
                    <ScrollBar orientation="vertical" />
                </ScrollArea>
            </CardContent>
            <CardFooter>
                <div className="mx-auto flex items-center gap-2">

                    <Button
                        size="lg"
                        className="w-full bg-[#6366F1] hover:bg-[#4F46E5] text-lg disabled:opacity-50"
                        onClick={handleGenerate}
                        disabled={!combiningEmojiCodepoint}
                    >
                        {combiningEmojiCodepoint ? 'Mix our emoji' : 'Select an emoji first'}
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
