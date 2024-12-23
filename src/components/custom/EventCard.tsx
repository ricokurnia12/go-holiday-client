import Link from "next/link";
import Image from "next/image";

interface EventCardProps {
  href: string;
  imageSrc: string;
  title: string;
}

const EventCard: React.FC<EventCardProps> = ({ href, imageSrc, title }) => {
  return (
    <Link
      href={href}
      className="group relative aspect-[9/16] overflow-hidden rounded-lg"
    >
      <Image
        src={imageSrc}
        alt={`View of ${title}`}
        className="object-cover transition-transform duration-300 group-hover:scale-110"
        fill
        sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <h2 className="absolute bottom-4 left-4 text-sm font-semibold text-white">
        {title}
      </h2>
    </Link>
  );
};

export default EventCard;
