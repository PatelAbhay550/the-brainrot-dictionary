import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTermById, allTags, type Tag } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, Share2, ArrowRight, ExternalLink } from 'lucide-react'
import { TagIcon } from '@/components/tag-icon'

export default function TermPage({ params }: { params: { id: string } }) {
  const term = getTermById(params.id)
  
  if (!term) {
    return notFound()
  }
  
  const tagColors: Record<Tag, string> = {
    'TikTok': 'bg-pink-500/20 text-pink-500 border-pink-500/30',
    'Twitter': 'bg-blue-500/20 text-blue-500 border-blue-500/30',
    'Gaming': 'bg-green-500/20 text-green-500 border-green-500/30',
    'Delulu': 'bg-purple-500/20 text-purple-500 border-purple-500/30',
    'Music': 'bg-amber-500/20 text-amber-500 border-amber-500/30',
    'Anime': 'bg-red-500/20 text-red-500 border-red-500/30',
    'Meme': 'bg-indigo-500/20 text-indigo-500 border-indigo-500/30',
    'Stan': 'bg-teal-500/20 text-teal-500 border-teal-500/30',
  }

  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8">
        <Link href="/browse">
          <Button variant="ghost" size="sm" className="mb-4">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Browse
          </Button>
        </Link>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h1 className="text-4xl font-bold">{term.term}</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {term.tags.map(tag => (
            <Link key={tag} href={`/browse?tag=${tag}`}>
              <Badge 
                variant="outline"
                className={`cursor-pointer ${tagColors[tag]}`}
              >
                
                {tag}
              </Badge>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Definition */}
          <section className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Definition</h2>
            <p className="text-muted-foreground">
              {term.definition}
            </p>
          </section>
          
          {/* Origin */}
          <section className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Origin</h2>
            <p className="text-muted-foreground">
              {term.origin}
            </p>
          </section>
          
          {/* Examples */}
          <section className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Examples</h2>
            <div className="space-y-4">
              {term.examples.map((example, index) => (
                <div key={index} className="message-bubble received">
                  {example}
                </div>
              ))}
            </div>
          </section>
        </div>
        
        <div className="space-y-8">
          {/* Related Terms */}
          <section className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Related Terms</h2>
            <div className="space-y-3">
              {term.relatedTerms.length > 0 ? (
                term.relatedTerms.map(relatedTermId => {
                  const relatedTerm = getTermById(relatedTermId);
                  return (
                    <Link 
                      key={relatedTermId} 
                      href={`/term/${relatedTermId}`}
                      className="flex items-center justify-between p-3 rounded-md hover:bg-muted group transition-colors"
                    >
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {relatedTermId}
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  );
                })
              ) : (
                <p className="text-muted-foreground text-sm">No related terms available</p>
              )}
            </div>
          </section>
          
          {/* More Info */}
          <section className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">More Info</h2>
            <div className="space-y-3">
              <a 
                href="#" 
                className="flex items-center justify-between p-3 rounded-md hover:bg-muted group transition-colors"
                
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium group-hover:text-primary transition-colors">
                    Urban Dictionary
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
              </a>
              <a 
                href="#" 
                className="flex items-center justify-between p-3 rounded-md hover:bg-muted group transition-colors"
              
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium group-hover:text-primary transition-colors">
                    Know Your Meme
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
