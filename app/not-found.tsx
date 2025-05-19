import Link from 'next/link'
import { Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center space-y-4 py-16 text-center">
      <Brain className="h-16 w-16 text-muted-foreground" />
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">404 - Not Found</h1>
      <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
        The page you're looking for doesn't exist or has been moved. Maybe you 
        need to touch grass?
      </p>
      <div className="flex gap-4">
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
        <Link href="/browse">
          <Button variant="outline">Browse Terms</Button>
        </Link>
      </div>
    </div>
  )
}