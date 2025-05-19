import type { LucideProps } from 'lucide-react'
import {
  Music,
  Hash,
  Gamepad2,
  Star,
  Video,
  Sparkles,
  HeartCrack,
  Users
} from 'lucide-react'
import { type Tag } from '@/lib/data'

interface TagIconProps extends LucideProps {
  tag: Tag
}

export function TagIcon({ tag, ...props }: TagIconProps) {
  switch (tag) {
    case 'TikTok':
      return <Video {...props} />
    case 'Twitter':
      return <Hash {...props} />
    case 'Gaming':
      return <Gamepad2 {...props} />
    case 'Delulu':
      return <HeartCrack {...props} />
    case 'Music':
      return <Music {...props} />
    case 'Anime':
      return <Star {...props} />
    case 'Meme':
      return <Sparkles {...props} />
    case 'Stan':
      return <Users {...props} />
    default:
      return <Hash {...props} />
  }
}
