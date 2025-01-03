import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { BASE_PATH } from "../basepath";

interface DestinationCardProps {
  href: string;
  imageSrc: string;
  name: string;
  rating: number;
  reviews: number | string;
  badges: string[];
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  href,
  imageSrc,
  name,
  rating,
  reviews,
  badges,
}) => {
  return (
    <Link href={`detail/${href}`}>
      <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <Image
          src={`${BASE_PATH}${imageSrc}`}
          alt={name}
          width={358}
          height={192}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{name}</h2>
            <div className="flex items-center">
              <Star className="text-yellow-400 mr-1" size={16} />
              <span>{rating.toFixed(1)}</span>
              <span className="text-sm text-gray-500 ml-1">({reviews})</span>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            {badges.map((badge, index) => (
              <Badge key={index} variant="secondary">
                {badge}
              </Badge>
            ))}
          </div>
        </div>
        <div className="p-4 border-t">
          <Button className="w-full">Explore</Button>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
