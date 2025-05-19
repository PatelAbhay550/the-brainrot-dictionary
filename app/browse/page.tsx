"use client"

import { useState } from 'react'
import Link from 'next/link'
import { searchTerms, terms, allTags, type Tag } from '@/lib/data'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Search, Hash, Sparkles } from 'lucide-react'

export default function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])
  
  const handleTagToggle = (tag: Tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }
  
  let filteredTerms = searchQuery ? searchTerms(searchQuery) : terms
  
  if (selectedTags.length > 0) {
    filteredTerms = filteredTerms.filter(term => 
      selectedTags.some(tag => term.tags.includes(tag))
    )
  }

  const tagColors: Record<Tag, string> = {
    'TikTok': 'bg-pink-500/20 text-pink-500 hover:bg-pink-500/30',
    'Twitter': 'bg-blue-500/20 text-blue-500 hover:bg-blue-500/30',
    'Gaming': 'bg-green-500/20 text-green-500 hover:bg-green-500/30',
    'Delulu': 'bg-purple-500/20 text-purple-500 hover:bg-purple-500/30',
    'Music': 'bg-amber-500/20 text-amber-500 hover:bg-amber-500/30',
    'Anime': 'bg-red-500/20 text-red-500 hover:bg-red-500/30',
    'Meme': 'bg-indigo-500/20 text-indigo-500 hover:bg-indigo-500/30',
    'Stan': 'bg-teal-500/20 text-teal-500 hover:bg-teal-500/30',
  }

  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-3xl font-bold mb-6">Browse Terms</h1>
      
      {/* Search bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search for a term..."
          className="pl-10 h-12"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* Tags filter */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Hash className="h-4 w-4 text-muted-foreground" />
          <h2 className="font-medium">Filter by tags</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <Badge
              key={tag}
              variant="outline"
              className={`cursor-pointer transition-all ${
                selectedTags.includes(tag) 
                  ? tagColors[tag]
                  : 'bg-transparent hover:bg-muted'
              }`}
              onClick={() => handleTagToggle(tag)}
            >
              {tag}
            </Badge>
          ))}
          {selectedTags.length > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs h-6"
              onClick={() => setSelectedTags([])}
            >
              Clear filters
            </Button>
          )}
        </div>
      </div>
      
      {/* Results */}
      {filteredTerms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTerms.map(term => (
            <Link
              key={term.id}
              href={`/term/${term.id}`}
              className="block group border rounded-lg p-4 transition-all hover:border-primary/50 hover:shadow-md bg-card"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                  {term.term}
                </h3>
                <div className="flex gap-1">
                  {term.tags.slice(0, 2).map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {term.tags.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{term.tags.length - 2}
                    </Badge>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                {term.definition}
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Sparkles className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-medium mb-2">No results found</h3>
          <p className="text-muted-foreground mb-6">
            We couldn't find any terms matching your search
          </p>
          <Button onClick={() => {
            setSearchQuery('')
            setSelectedTags([])
          }}>
            Clear search
          </Button>
        </div>
      )}
    </div>
  )
}