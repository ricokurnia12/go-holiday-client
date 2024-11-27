import Link from "next/link"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface BlogCardProps {
  title: string
  category: string
  excerpt: string
  imageUrl: string
  authorName: string
  authorImage: string
  date: string
}

export function BlogCard({
  title,
  category,
  excerpt,
  imageUrl,
  authorName,
  authorImage,
  date,
}: BlogCardProps) {
  return (
    <article className="group">
      <Link href="#" className="block mb-4">
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={400}
          className="w-full h-48 object-cover rounded-lg"
        />
      </Link>
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground uppercase tracking-wider">
          {category}
        </div>
        <h2 className="text-xl font-semibold leading-tight">
          <Link href="#" className="hover:text-muted-foreground">
            {title}
          </Link>
        </h2>
        <div className="flex items-center gap-2 text-sm">
          <Avatar className="h-6 w-6">
            <AvatarImage src={authorImage} alt={authorName} />
            <AvatarFallback>
              {authorName.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <span>by {authorName}</span>
          <span className="text-muted-foreground">• {date}</span>
        </div>
        <p className="text-muted-foreground line-clamp-2">{excerpt}</p>
        <Link
          href="#"
          className="inline-block text-sm border rounded-full px-4 py-1 hover:bg-secondary transition-colors"
        >
          Continue reading
        </Link>
      </div>
    </article>
  )
}

