"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BlogCard } from "./Blog-card";
import { Sidebar } from "./Sidebar";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import EventCard from "./custom/EventCard";
import DestinationCard from "./custom/DestinationCard";

const TourismHomepage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const popularDestinations = [
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
  const event = [
    {
      id: "1",
      name: "Oasis Champaign Supernova",

      images: "/eventmusic.png",
    },
    {
      id: "2",
      name: "Weekly Bike",

      images: "/sepeda.png",
    },
    {
      id: "3",
      name: "Pagelaran Wayang",
      images: "/wayang.png",
    },
    {
      id: "4",
      name: "Oasis Champaign Supernova",
      images: "/eventmusic.png",
    },
    {
      id: "5",
      name: "Pagelaran Wayang",
      images: "/wayang.png",
    },
    {
      id: "6",
      name: "Pemuda Berkarya",
      images: "/pemuda.png",
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
          <div className="absolute inset-0 bg-black/50" />
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

      {/* Popular Destinations */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-xl font-bold my-8 text-[#152A4E]">Event</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 gap-4 p-0">
          {event.map((el) => (
            <EventCard
              href={el.id}
              imageSrc={el.images}
              key={el.id}
              title={el.name}
            />
          ))}
        </div>
        <h2 className="text-xl font-bold my-8">Popular Destination</h2>
        <Carousel>
          <CarouselContent>
            {popularDestinations.map((destination, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <DestinationCard
                  badges={destination.badges}
                  href={destination.name}
                  imageSrc={destination.images}
                  name={destination.name}
                  rating={destination.rating}
                  reviews={destination.reviews}
                />
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
