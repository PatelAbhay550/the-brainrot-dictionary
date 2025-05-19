export type Tag = 'TikTok' | 'Twitter' | 'Gaming' | 'Delulu' | 'Music' | 'Anime' | 'Meme' | 'Stan'

export type Term = {
  id: string
  term: string
  definition: string
  origin: string
  examples: string[]
  relatedTerms: string[]
  tags: Tag[]
}

export const terms: Term[] = [
  {
    id: 'delulu',
    term: 'delulu',
    definition: 'A portmanteau of "delusional" and "lulu" (Korean slang for "crazy"), used to describe unrealistic or excessive fantasies and expectations, especially in the context of fan-celebrity relationships.',
    origin: 'Originated from K-pop stan culture, specifically from fans who maintain unrealistic fantasies about their favorite idols.',
    examples: [
      "I know he looked at me during the concert, we're totally getting married next week! I'm so delulu lol.",
      "She's completely delulu if she thinks they're going to date just because they followed her back on Instagram.",
      "My delulu is my solulu (My delusion is my solution)."
    ],
    relatedTerms: ['stan', 'parasocial', 'simp'],
    tags: ['Delulu', 'Stan', 'TikTok']
  },
  {
    id: 'rizz',
    term: 'rizz',
    definition: 'The ability to attract or charm someone, especially romantically; charisma or game.',
    origin: 'Derived from the word "charisma," popularized on TikTok and Twitch in 2021-2022, notably by streamer Kai Cenat.',
    examples: [
      'His rizz is unmatched, he got her number in like 5 minutes.',
      'I have zero rizz, I always freeze up when talking to my crush.',
      'W rizz, bro. Teach me your ways.'
    ],
    relatedTerms: ['W', 'L', 'simp'],
    tags: ['TikTok', 'Twitter', 'Meme']
  },
  {
    id: 'no-cap',
    term: 'no cap',
    definition: 'No lie or exaggeration; telling the truth.',
    origin: 'Derived from the slang term "capping," which means lying or exaggerating, popular in hip-hop culture before spreading to mainstream use via social media.',
    examples: [
      "No cap, that was the best concert I've ever been to.",
      'The homework takes like three hours to finish, no cap.',
      'I swear I saw her at the mall yesterday, no cap.'
    ],
    relatedTerms: ['fr', 'bussin', 'based'],
    tags: ['Twitter', 'TikTok', 'Music']
  },
  {
    id: 'based',
    term: 'based',
    definition: 'A term of approval for something considered authentic, agreeable, or admirable, often used to express appreciation for someone speaking their mind or holding a controversial opinion without concern for criticism.',
    origin: 'Originally a derogatory term for someone addicted to crack cocaine, rapper Lil B reclaimed it as a positive term meaning being yourself. It was later adopted by various internet communities.',
    examples: [
      'He just told the teacher the assignment was pointless. That\'s so based.',
      'That movie criticized everyone equally. Based director.',
      'Based take, I completely agree even though everyone\'s mad about it.'
    ],
    relatedTerms: ['W', 'chad', 'red-pilled'],
    tags: ['Twitter', 'Gaming', 'Meme']
  },
  {
    id: 'sus',
    term: 'sus',
    definition: 'Short for "suspicious" or "suspect," describing someone or something that seems questionable, shady, or untrustworthy.',
    origin: 'While "sus" has been slang in Black and LGBTQ+ communities for decades, it gained massive popularity in 2020 through the game Among Us, where players must identify "suspicious" impostors.',
    examples: [
      'Why are you sneaking around the kitchen at 3 AM? That\'s kinda sus.',
      'The way he changed the subject when we mentioned the party was sus.',
      'Red is sus, I saw them vent in electrical.'
    ],
    relatedTerms: ['impostor', 'sussy', 'vent'],
    tags: ['Gaming', 'Meme', 'TikTok']
  },
  {
    id: 'touch-grass',
    term: 'touch grass',
    definition: 'An instruction for someone to go outside and experience the real world, implying they\'ve spent too much time online or are too invested in internet culture/drama.',
    origin: 'Evolved from earlier phrases like "go outside" or "get a life," becoming widespread on Twitter and gaming communities around 2020-2021.',
    examples: [
      'You\'ve been arguing with strangers on Twitter for 6 hours straight. Please touch grass.',
      'If you know all the lore from that series, you need to touch grass immediately.',
      'I haven\'t touched grass in weeks, this game is too addictive.'
    ],
    relatedTerms: ['grass-deficient', 'terminally-online', 'chronically-online'],
    tags: ['Twitter', 'Gaming', 'Meme']
  },
  {
    id: 'parasocial',
    term: 'parasocial',
    definition: 'Describing a one-sided relationship where a person extends emotional energy, interest and time into a public figure who is unaware of their existence.',
    origin: 'Originally an academic term from the 1950s to describe TV viewer relationships with personalities, now commonly used on social media to describe fan-influencer dynamics.',
    examples: [
      'My parasocial relationship with that streamer is getting out of hand, I feel like we\'re friends.',
      'It\'s okay to enjoy content creators, just don\'t get too parasocial about it.',
      'She refers to her favorite YouTuber by their first name like they know each other. Peak parasocial behavior.'
    ],
    relatedTerms: ['stan', 'delulu', 'parafamily'],
    tags: ['Twitter', 'TikTok', 'Stan']
  },
  {
    id: 'simp',
    term: 'simp',
    definition: 'Someone who shows excessive admiration, attention, or affection towards another person (traditionally a man towards a woman), especially when that affection is not reciprocated.',
    origin: 'While the term has been around since the 1980s, it gained massive popularity on TikTok and Twitch in 2019-2020.',
    examples: [
      'He donated his entire paycheck to that streamer just so she\'d say his name. Major simp.',
      'I\'m not a simp, I just think she makes good content.',
      'Simping isn\'t a crime, let people enjoy things.'
    ],
    relatedTerms: ['stan', 'white knight', 'delulu'],
    tags: ['TikTok', 'Twitter', 'Gaming']
  },
  {
    id: 'npc',
    term: 'NPC',
    definition: 'Used to describe a person who seems to lack original thought or personality, as if they\'re programmed like a Non-Player Character in a video game.',
    origin: 'Derived from gaming terminology, where NPCs are computer-controlled characters with limited dialogue and predictable behavior patterns.',
    examples: [
      'He just repeats whatever is trending without any critical thinking. Total NPC behavior.',
      'I felt like an NPC in that conversation, just nodding and saying "yeah" repeatedly.',
      'The café was full of NPCs all ordering the same viral TikTok drink.'
    ],
    relatedTerms: ['sheep', 'basic', 'normie'],
    tags: ['Gaming', 'Meme', 'Twitter']
  },
  {
    id: 'stan',
    term: 'stan',
    definition: 'An extremely enthusiastic and devoted fan, often to the point of obsession.',
    origin: 'Derived from the Eminem song "Stan" (2000) about an obsessive fan, later adopted as both a noun and verb in fan culture.',
    examples: [
      'I stan her so hard, I\'ve watched every interview she\'s ever done.',
      'The stans are fighting on Twitter again over who has better album sales.',
      'I\'m a casual listener, not a stan. I don\'t know their birthdays or anything.'
    ],
    relatedTerms: ['fandom', 'simp', 'delulu'],
    tags: ['Stan', 'Twitter', 'Music']
  }
]

export function getTermById(id: string): Term | undefined {
  return terms.find(term => term.id === id)
}

export function getRandomTerm(): Term {
  const randomIndex = Math.floor(Math.random() * terms.length)
  return terms[randomIndex]
}

export function searchTerms(query: string): Term[] {
  const lowercasedQuery = query.toLowerCase()
  return terms.filter(term => 
    term.term.toLowerCase().includes(lowercasedQuery) || 
    term.definition.toLowerCase().includes(lowercasedQuery) || 
    term.tags.some(tag => tag.toLowerCase().includes(lowercasedQuery))
  )
}

export function getTermsByTag(tag: Tag): Term[] {
  return terms.filter(term => term.tags.includes(tag))
}

export const allTags: Tag[] = ['TikTok', 'Twitter', 'Gaming', 'Delulu', 'Music', 'Anime', 'Meme', 'Stan']