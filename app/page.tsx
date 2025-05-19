import Link from 'next/link'
import { Brain, ExternalLink, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getRandomTerm } from '@/lib/data'

export default function Home() {
  const randomTerm = getRandomTerm()
  
  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)]">
      {/* Hero section */}
      <section className="px-4 py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/50 border-b">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4">
          <div className="space-y-2">
            <div className="inline-block p-2 bg-primary/10 rounded-lg mb-4">
              <Brain className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-300% mb-4">
              The Brainrot Dictionary
            </h1>
            <p className="max-w-[700px] text-lg md:text-xl text-muted-foreground mx-auto">
              A chaotic guide to modern internet language, slang, and all things Gen Z
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 min-[400px]:gap-4">
            <Link href="/browse">
              <Button size="lg" className="transition-all hover:shadow-xl">
                Browse Terms
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href={`/term/${randomTerm.id}`}>
              <Button size="lg" variant="outline" className="transition-all hover:shadow-xl">
                Random Term
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block p-2 bg-primary/10 rounded-lg mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="m21 11-8-8-8 8" />
                    <path d="M21 22V11H3v11" />
                    <path d="M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Stay Current</h3>
                <p className="text-muted-foreground">
                  Never be confused by internet slang again. Keep up with the latest terms from TikTok, Twitter, and beyond.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block p-2 bg-primary/10 rounded-lg mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Learn the Context</h3>
                <p className="text-muted-foreground">
                  Understand where terms came from and how to use them correctly to avoid those cringey misunderstandings.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block p-2 bg-primary/10 rounded-lg mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Search & Discover</h3>
                <p className="text-muted-foreground">
                  Find exactly what you're looking for or discover new terms through our tags and random generator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured terms */}
      <section className="py-12 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Terms</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Check out some of the most searched terms in our dictionary
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {['delulu', 'rizz', 'touch-grass'].map((id) => (
              <Link 
                key={id}
                href={`/term/${id}`}
                className="block group relative rounded-xl border border-accent p-6 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-bold">{id}</h3>
                <div className="h-0.5 w-12 bg-primary/20 my-3"></div>
                <p className="text-muted-foreground line-clamp-3">
                  {id === 'delulu' && "When your fantasies about your favorite idol are completely unrealistic..."}
                  {id === 'rizz' && "The mysterious ability to attract someone with nothing but charisma and charm..."}
                  {id === 'touch-grass' && "What you need to do if you're reading internet dictionaries for fun..."}
                </p>
                <div className="flex justify-end mt-4">
                  <ArrowRight className="text-primary h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/browse">
              <Button variant="outline">
                View All Terms
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}