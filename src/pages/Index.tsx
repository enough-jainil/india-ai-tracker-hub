"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InteractiveTimeline } from "@/components/InteractiveTimeline";
import { CompanyProfiles } from "@/components/CompanyProfiles";
import { ProgressDashboard } from "@/components/ProgressDashboard";
import {
  SearchIcon,
  TrendingUpIcon,
  BrainIcon,
  CalendarIcon,
  MicIcon,
  ImageIcon,
  VideoIcon,
} from "lucide-react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const stats = [
    { label: "LLMs", value: "20+", icon: BrainIcon, color: "bg-blue-500" },
    { label: "TTS Models", value: "8+", icon: MicIcon, color: "bg-purple-500" },
    {
      label: "Image Models",
      value: "2+",
      icon: ImageIcon,
      color: "bg-pink-500",
    },
    {
      label: "Video Models",
      value: "2+",
      icon: VideoIcon,
      color: "bg-indigo-500",
    },
    {
      label: "Organizations",
      value: "20+",
      icon: TrendingUpIcon,
      color: "bg-green-500",
    },
    {
      label: "Years Tracked",
      value: "5",
      icon: CalendarIcon,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Indian AI Tracker
              </h1>
              <p className="text-gray-600 mt-2 text-sm sm:text-base lg:max-w-2xl">
                Tracking India's AI revolution with{" "}
                <span className="font-semibold text-blue-600">20+ LLMs</span>,{" "}
                <span className="font-semibold text-purple-600">8+ TTS</span>,{" "}
                <span className="font-semibold text-pink-600">2+ Image</span>,
                and{" "}
                <span className="font-semibold text-indigo-600">2+ Video</span>{" "}
                models
                <span className="hidden sm:inline">
                  {" "}
                  across 20+ organizations (2020-2025)
                </span>
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm lg:w-64">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search organizations, models..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                    <p className="text-gray-600 text-sm break-words whitespace-normal">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Tabs defaultValue="timeline" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-white shadow-sm">
            <TabsTrigger
              value="timeline"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              Timeline View
            </TabsTrigger>
            <TabsTrigger
              value="companies"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              Organizations
            </TabsTrigger>
            <TabsTrigger
              value="dashboard"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              Progress Dashboard
            </TabsTrigger>
          </TabsList>

          <TabsContent value="timeline" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Indian AI Timeline (2020-2025)
                </CardTitle>
                <CardDescription>
                  Interactive timeline showcasing the evolution of 20+ Large
                  Language Models, 8+ Text-to-Speech models, 2+ Image models,
                  and 2+ Video models across 20+ organizations in India
                </CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveTimeline searchTerm={searchTerm} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="companies" className="space-y-6">
            <CompanyProfiles searchTerm={searchTerm} />
          </TabsContent>

          <TabsContent value="dashboard" className="space-y-6">
            <ProgressDashboard />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
