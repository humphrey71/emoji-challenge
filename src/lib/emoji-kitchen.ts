import metadata from "./metadata.json"

export interface EmojiMetadata {
    knownSupportedEmoji: Array<string>
    data: {
        [emojiCodepoint: string]: EmojiData
    }
}

export interface EmojiData {
    alt: string
    keywords: Array<string>
    emojiCodepoint: string
    gBoardOrder: number
    combinations: { [otherEmojiCodepoint: string]: Array<EmojiCombination> }
}

export interface EmojiCombination {
    gStaticUrl: string
    alt: string
    leftEmoji: string
    leftEmojiCodepoint: string
    rightEmoji: string
    rightEmojiCodepoint: string
    date: string
    isLatest: boolean
    gBoardOrder: number
}

export const emojiMetadata = metadata as EmojiMetadata


export function getNotoEmojiUrl(emojiCodepoint: string): string {
    return `https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u${emojiCodepoint
      .split("-")
      .filter((x) => x !== "fe0f")
      .map((x) => x.padStart(4, "0")) // Handle ©️ and ®️
      .join("_")}.svg`;
  }