import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Rss } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="space-y-8">
      <section className="text-center space-y-4">
        <h2 className="text-xl font-semibold">GO-Holiday</h2>
        <Image
          src="/holiday.jpg"
          alt="Profile"
          width={100}
          height={100}
          className="mx-auto rounded-full"
        />
        <p className="text-muted-foreground">Find Your Journey Here</p>
        <div className="flex justify-center gap-4">
          {[Facebook, Twitter, Instagram, Youtube, Rss].map((Icon, i) => (
            <Link
              key={i}
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">NEWSLETTER</h2>
        <p className="text-sm text-muted-foreground">
          Never miss any updates on events, guides and photos. Never spam, I
          promise!
        </p>
        <form className="space-y-2">
          <Input type="email" placeholder="Email Address" />
          <Button className="w-full bg-black text-white hover:bg-gray-800">
            SUBSCRIBE
          </Button>
        </form>
      </section>

     
    </aside>
  );
}
