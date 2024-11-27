"use client";
import React, { useState } from "react";
import { Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BlogCard } from "./Blog-card";
import { Sidebar } from "./Sidebar";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
const TourismHomepage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const popularDestinations = [
    {
      name: "Jembatan Ampera",
      rating: 4.8,
      images: "/jembatanampera.jpeg",
      reviews: "2.3k",
      badges: ["Nature", "Culture"],
    },
    {
      name: "Palembang Indah Mall ",
      rating: 4.9,
      images: "/pim.jpeg",
      reviews: "3.1k",
      badges: ["Recreation"],
    },
    {
      name: "Museum Sultan Mahmud II",
      rating: 4.7,
      images: "/museum.jpeg",
      reviews: "4.2k",
      badges: ["Culture", "Education"],
    },
    {
      name: "Jembatan Ampera",
      rating: 4.8,
      images: "/jembatanampera.jpeg",
      reviews: "2.3k",
      badges: ["Nature", "Culture"],
    },
    {
      name: "Palembang Indah Mall ",
      rating: 4.9,
      images: "/pim.jpeg",
      reviews: "3.1k",
      badges: ["Recreation"],
    },
    {
      name: "Museum Sultan Mahmud II",
      rating: 4.7,
      images: "/museum.jpeg",
      reviews: "4.2k",
      badges: ["Culture", "Education"],
    },
  ];
  const posts = [
    {
      title: "Pengalaman berbelanja di Palembang Indah Mall",
      category: "GUIDES",
      excerpt:
        "Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum",
      imageUrl: "/placeholder.svg?height=400&width=600",
      authorName: "Marie Nguyen",
      authorImage: "/placeholder.svg",
      date: "JUNE 15, 2024",
    },
    {
      title: "A day in Pale",
      category: "GUIDES",
      excerpt:
        "Royal organizations, parliament, and the royal court determined the appearance of Westminster for all: now it is still efficiently Royal district...",
      imageUrl: "/placeholder.svg?height=400&width=600",
      authorName: "Marie Nguyen",
      authorImage: "/placeholder.svg",
      date: "JUNE 15, 2024",
    },
    {
      title: "Ini dia oleh-oleh khas palembang",
      category: "GUIDES",
      excerpt:
        "Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added ",
      imageUrl: "/placeholder.svg?height=400&width=600",
      authorName: "Marie Nguyen",
      authorImage: "/placeholder.svg",
      date: "JUNE 15, 2024",
    },
    {
      title: "Refreshing di alam terbuka",
      category: "TRAVEL",
      excerpt:
        "Royal organizations, parliament, and the royal court determined the appearance of Westminster for all: now it is still efficiently Royal district...",
      imageUrl: "/placeholder.svg?height=400&width=600",
      authorName: "Marie Nguyen",
      authorImage: "/placeholder.svg",
      date: "JUNE 15, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0 ">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover "
          >
            <source src="/palepale.mov" type="video/mp4" />
          </video>
          {/* Add overlay */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-32">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              Kabur dari Rutinitas, Yuk Liburan!
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Hidup ini singkat, jangan cuma scrolling sosmed, mending scrolling
              dunia!
            </p>

            {/* Search Card */}
            <Card className="max-w-2xl mx-auto bg-white/20 border-none backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <Input
                      type="text"
                      placeholder="Search destinations, attractions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                    <Search
                      className="absolute left-3 top-2.5 text-gray-400"
                      size={20}
                    />
                  </div>
                  <Button className="" size="lg">
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 ">
        {/* <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Interactive Maps</h3>
                  <p className="text-gray-600">
                    Explore attractions with real-time crowd levels
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Smart Itineraries</h3>
                  <p className="text-gray-600">
                    Create personalized travel plans
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Camera className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Virtual Tours</h3>
                  <p className="text-gray-600">Preview with 360° experiences</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>

      {/* Popular Destinations */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Popular Destinations</h2>

        <Carousel>
          <CarouselContent>
            {popularDestinations.map((destination, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <Link href={`detail/${destination.name}`}>
                  <Card className="overflow-hidden">
                    <Image
                      src={destination.images}
                      alt={destination.name}
                      width={358}
                      height={192}
                      className="w-full h-48 object-cover hover:scale-105 duration-300"
                    />
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>{destination.name}</CardTitle>
                        <div className="flex items-center">
                          <Star className="text-yellow-400 mr-1" size={16} />
                          <span>{destination.rating}</span>
                          <span className="text-sm text-gray-500 ml-1">
                            ({destination.reviews})
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-2">
                        {destination.badges.map((badge, i) => (
                          <Badge key={i} variant="secondary">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardFooter>
                      <Button className="w-full">Explore</Button>
                    </CardFooter>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="max-w-7xl px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-8">Explore the journey</h2>
        <div className="grid lg:grid-cols-3 gap-8 ">
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              {posts.map((post, i) => (
                <BlogCard key={i} {...post} />
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourismHomepage;
