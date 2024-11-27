"use client";
import React, { useState } from "react";
import { Star, MapPin, Clock, Navigation, Camera, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const DestinationDetail = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const destinationDetails = {
    name: "Jembatan Ampera",
    location: "Palembang, Sumatera Selatan",
    rating: 4.8,
    reviews: "2.3k",
    description:
      "Jembatan Ampera adalah ikon kota Palembang yang megah, menghubungkan dua sisi Sungai Musi. Dibangun pada tahun 1962, jembatan ini tidak hanya menjadi sarana transportasi penting, tetapi juga menjadi landmark bersejarah dan kebanggaan masyarakat Palembang.",
    highlights: [
      "Arsitektur unik bersejarah",
      "Pemandangan Sungai Musi yang menakjubkan",
      "Pusat aktivitas sosial dan budaya",
      "Spot foto yang Instagramable",
    ],
    images: [
      "/jembatanampera.jpeg",
      "/jembatanampera-night.jpeg",
      "/jembatanampera-landscape.jpeg",
    ],
    travelInfo: {
      bestTime: "Sepanjang tahun, terutama saat matahari terbit/terbenam",
      duration: "1-2 jam",
      entranceFee: "Gratis",
    },
    nearbyAttractions: [
      {
        name: "Museum Sultan Mahmud Badaruddin II",
        distance: "1.2 km",
        image: "/museum.jpeg",
      },
      {
        name: "Palembang Indah Mall",
        distance: "2.5 km",
        image: "/pim.jpeg",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img
          src={destinationDetails.images[0]}
          alt="Jembatan Ampera"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-end pb-10">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">
              {destinationDetails.name}
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span>{destinationDetails.location}</span>
              </div>
              <div className="flex items-center">
                <Star className="text-yellow-400 mr-2" size={20} />
                <span>
                  {destinationDetails.rating} ({destinationDetails.reviews}{" "}
                  reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Destination Tabs */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="flex space-x-4 border-b mb-6">
          {["overview", "gallery", "nearby"].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 capitalize ${
                activeTab === tab
                  ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Tentang Destinasi</h2>
              <p className="text-gray-700 mb-6">
                {destinationDetails.description}
              </p>

              <h3 className="text-xl font-semibold mb-3">Highlights</h3>
              <ul className="space-y-2 mb-6">
                {destinationDetails.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-blue-600">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Clock className="text-blue-600" size={24} />
                      <div>
                        <h4 className="font-semibold">
                          Waktu Kunjungan Terbaik
                        </h4>
                        <p className="text-gray-600">
                          {destinationDetails.travelInfo.bestTime}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Navigation className="text-blue-600" size={24} />
                      <div>
                        <h4 className="font-semibold">Durasi</h4>
                        <p className="text-gray-600">
                          {destinationDetails.travelInfo.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Galeri Foto</h2>
                <Button variant="outline" size="sm">
                  <Camera size={16} className="mr-2" /> Lihat Semua
                </Button>
              </div>
              <Carousel>
                <CarouselContent>
                  {destinationDetails.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={image}
                        alt={`Jembatan Ampera ${index + 1}`}
                        className="w-full h-80 object-cover rounded-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Informasi Praktis</h2>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">Biaya Masuk</h4>
                      <p className="text-gray-600">
                        {destinationDetails.travelInfo.entranceFee}
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">Akses</h4>
                      <p className="text-gray-600">
                        Mudah dijangkau, dekat pusat kota
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === "gallery" && (
          <div className="grid md:grid-cols-3 gap-4">
            {destinationDetails.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Jembatan Ampera ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            ))}
          </div>
        )}

        {/* Nearby Attractions Tab */}
        {activeTab === "nearby" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Atraksi Terdekat</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {destinationDetails.nearbyAttractions.map((attraction, index) => (
                <Card key={index} className="overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">
                        {attraction.name}
                      </h3>
                      <Badge variant="secondary">{attraction.distance}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="max-w-7xl mx-auto px-4 mt-8 flex justify-center space-x-4">
        <Button size="lg" className="flex items-center">
          <Navigation size={20} className="mr-2" /> Dapatkan Petunjuk Arah
        </Button>
        <Button variant="outline" size="lg" className="flex items-center">
          <Share2 size={20} className="mr-2" /> Bagikan
        </Button>
      </div>
    </div>
  );
};

export default DestinationDetail;
