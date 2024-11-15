import { emojiMetadata, getNotoEmojiUrl } from "@/lib/emoji-kitchen"
import Image from "next/image"

export function ShowResult({ baseEmojiCodepoint, combiningEmojiCodepoint }: { baseEmojiCodepoint: string, combiningEmojiCodepoint: string }) {
    const baseEmojiData = emojiMetadata.data[baseEmojiCodepoint]
    const combiningEmojiData = emojiMetadata.data[combiningEmojiCodepoint]
    const combination = baseEmojiData.combinations[combiningEmojiCodepoint][0]

    return (
        <div className="flex flex-row items-center justify-center mx-auto gap-2">
            <Image
                unoptimized
                src={getNotoEmojiUrl(combination.leftEmojiCodepoint)}
                alt={baseEmojiData.alt}
                width={64}
                height={64}
                className="cursor-pointer hover:scale-120 transition-all"
            />
            +
            <Image
                unoptimized
                src={getNotoEmojiUrl(combination.rightEmojiCodepoint)}
                alt={combiningEmojiData.alt}
                width={64}
                height={64}
                className="cursor-pointer hover:scale-120 transition-all"
            />
            =
            <Image
                unoptimized
                src={combination.gStaticUrl}
                alt={combination.alt}
                width={64}
                height={64}
                className="cursor-pointer hover:scale-120 transition-all"
            />
        </div>
    )
}