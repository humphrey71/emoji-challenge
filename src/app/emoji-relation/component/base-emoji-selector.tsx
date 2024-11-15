"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { toast } from "@/hooks/use-toast"
import { emojiMetadata, getNotoEmojiUrl } from "@/lib/emoji-kitchen"
import Image from "next/image"
import { useState } from "react"

export function BaseEmojiSelector() {
    const [baseEmojiCodepoint, setBaseEmojiCodepoint] = useState<string | null>(null)


    const handleGenerate = async () => {
        if (!baseEmojiCodepoint) return

        try {
            // 生成分享链接
            const shareUrl = `${window.location.origin}/emoji-relation/${encodeURIComponent(baseEmojiCodepoint)}`

            // 使用 Web Share API 分享
            if (navigator.share) {
                await navigator.share({
                    title: 'Create Emoji Relation',
                    text: 'Join me to create a unique emoji combination!',
                    url: shareUrl
                })
            } else {
                // 如果不支持 Web Share API，则复制到剪贴板
                await navigator.clipboard.writeText(shareUrl)
                // 这里可以添加一个提示，告诉用户链接已复制
                toast({
                    title: "Success",
                    description: "Link copied to clipboard",
                    duration: 3000,
                })
            }
        } catch (error) {
            console.error('Error sharing:', error)
        }
    }


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
                                    <Image
                                        unoptimized
                                        src={getNotoEmojiUrl(emojiData.emojiCodepoint)}
                                        alt={emojiData.alt}
                                        width={32}
                                        height={32}
                                        className="cursor-pointer hover:scale-120 transition-all"
                                        onClick={() => setBaseEmojiCodepoint(emojiCodepoint)}
                                    />
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
                        disabled={!baseEmojiCodepoint}
                    >
                        {baseEmojiCodepoint ? 'Sharing Link' : 'Select an emoji first'}
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
