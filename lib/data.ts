export type Tag = 'TikTok' | 'Twitter' | 'Gaming' | 'Delulu' | 'Music' | 'Anime' | 'Meme' | 'Stan'

export type Term = {
  id: string
  term: string
  definition: string
  origin: string
  examples: string[]
  tags: Tag[]
  relatedTerms: string[]
  links?: {
    urbanDictionary?: string
    knowYourMeme?: string
  }
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
    tags: ['Delulu', 'Stan', 'TikTok'],
    links: {
      urbanDictionary: 'https://www.urbandictionary.com/define.php?term=Delulu',
      knowYourMeme: 'https://knowyourmeme.com/memes/delulu'
    }
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
    tags: ['TikTok', 'Twitter', 'Meme'],
    links: {
      urbanDictionary: 'https://www.urbandictionary.com/define.php?term=Rizz',
      knowYourMeme: 'https://knowyourmeme.com/memes/rizz'
    }
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
    tags: ['Twitter', 'TikTok', 'Music'],
    links: {
      urbanDictionary: 'https://www.urbandictionary.com/define.php?term=No%20Cap',
      knowYourMeme: 'https://knowyourmeme.com/memes/no-cap'
    }
  },
  {
    id: 'based',
    term: 'based',
    definition: 'A term of approval for something considered authentic, agreeable, or admirable...',
    origin: 'Originally a derogatory term for someone addicted to crack cocaine, rapper Lil B reclaimed it as a positive term...',
    examples: [
      'He just told the teacher the assignment was pointless. That\'s so based.',
      'That movie criticized everyone equally. Based director.',
      'Based take, I completely agree even though everyone\'s mad about it.'
    ],
    relatedTerms: ['W', 'chad', 'red-pilled'],
    tags: ['Twitter', 'Gaming', 'Meme'],
    links: {
      urbanDictionary: 'https://www.urbandictionary.com/define.php?term=Based',
      knowYourMeme: 'https://knowyourmeme.com/memes/based'
    }
  },
  {
    id: 'sus',
    term: 'sus',
    definition: 'Short for "suspicious" or "suspect," describing someone or something that seems questionable...',
    origin: 'While "sus" has been slang in Black and LGBTQ+ communities for decades, it gained massive popularity in 2020 through the game Among Us...',
    examples: [
      'Why are you sneaking around the kitchen at 3 AM? That\'s kinda sus.',
      'The way he changed the subject when we mentioned the party was sus.',
      'Red is sus, I saw them vent in electrical.'
    ],
    relatedTerms: ['impostor', 'sussy', 'vent'],
    tags: ['Gaming', 'Meme', 'TikTok'],
    links: {
      urbanDictionary: 'https://www.urbandictionary.com/define.php?term=Sus',
      knowYourMeme: 'https://knowyourmeme.com/memes/sus'
    }
  },
  {
    id: 'touch-grass',
    term: 'touch grass',
    definition: 'An instruction for someone to go outside and experience the real world...',
    origin: 'Evolved from earlier phrases like "go outside" or "get a life," becoming widespread on Twitter and gaming communities...',
    examples: [
      'You\'ve been arguing with strangers on Twitter for 6 hours straight. Please touch grass.',
      'If you know all the lore from that series, you need to touch grass immediately.',
      'I haven\'t touched grass in weeks, this game is too addictive.'
    ],
    relatedTerms: ['grass-deficient', 'terminally-online', 'chronically-online'],
    tags: ['Twitter', 'Gaming', 'Meme'],
    links: {
      knowYourMeme: 'https://knowyourmeme.com/memes/touch-grass'
    }
  },
  {
    id: 'parasocial',
    term: 'parasocial',
    definition: 'Describing a one-sided relationship where a person extends emotional energy...',
    origin: 'Originally an academic term from the 1950s...',
    examples: [
      'My parasocial relationship with that streamer is getting out of hand...',
      'It\'s okay to enjoy content creators, just don\'t get too parasocial about it.',
      'She refers to her favorite YouTuber by their first name...'
    ],
    relatedTerms: ['stan', 'delulu', 'parafamily'],
    tags: ['Twitter', 'TikTok', 'Stan'],
    links: {
      knowYourMeme: 'https://knowyourmeme.com/memes/parasocial'
    }
  },
  {
    id: 'simp',
    term: 'simp',
    definition: 'Someone who shows excessive admiration, attention, or affection...',
    origin: 'While the term has been around since the 1980s, it gained massive popularity on TikTok and Twitch in 2019-2020.',
    examples: [
      'He donated his entire paycheck to that streamer just so she\'d say his name.',
      'I\'m not a simp, I just think she makes good content.',
      'Simping isn\'t a crime, let people enjoy things.'
    ],
    relatedTerms: ['stan', 'white knight', 'delulu'],
    tags: ['TikTok', 'Twitter', 'Gaming'],
    links: {
      urbanDictionary: 'https://www.urbandictionary.com/define.php?term=Simp',
      knowYourMeme: 'https://knowyourmeme.com/memes/simp'
    }
  },
  {
    id: 'npc',
    term: 'NPC',
    definition: 'Used to describe a person who seems to lack original thought or personality...',
    origin: 'Derived from gaming terminology, where NPCs are computer-controlled characters...',
    examples: [
      'He just repeats whatever is trending without any critical thinking.',
      'I felt like an NPC in that conversation...',
      'The café was full of NPCs all ordering the same viral TikTok drink.'
    ],
    relatedTerms: ['sheep', 'basic', 'normie'],
    tags: ['Gaming', 'Meme', 'Twitter'],
    links: {
      urbanDictionary: 'https://www.urbandictionary.com/define.php?term=NPC',
      knowYourMeme: 'https://knowyourmeme.com/memes/npc-wojak'
    }
  },
  {
    id: 'stan',
    term: 'stan',
    definition: 'An extremely enthusiastic and devoted fan, often to the point of obsession.',
    origin: 'Derived from the Eminem song "Stan" (2000)...',
    examples: [
      'I stan her so hard, I\'ve watched every interview she\'s ever done.',
      'The stans are fighting on Twitter again...',
      'I\'m a casual listener, not a stan...'
    ],
    relatedTerms: ['fandom', 'simp', 'delulu'],
    tags: ['Stan', 'Twitter', 'Music'],
    links: {
      urbanDictionary: 'https://www.urbandictionary.com/define.php?term=Stan',
      knowYourMeme: 'https://knowyourmeme.com/memes/stan'
    }
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
