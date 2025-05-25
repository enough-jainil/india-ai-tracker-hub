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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 w-full mobile-optimized">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6">
          <div className="space-y-3 sm:space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between">
            <div className="text-center lg:text-left">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Indian AI Tracker
              </h1>
              <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base lg:max-w-2xl leading-tight sm:leading-normal">
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
              <div className="relative w-full max-w-xs sm:max-w-sm lg:w-64">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search organizations, models..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Stats Section */}
      <section className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-3 sm:p-4 md:p-6">
                <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3 md:space-y-4">
                  <div className={`p-2 sm:p-3 rounded-lg ${stat.color}`}>
                    <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm break-words whitespace-normal leading-tight">
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
      <main className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pb-8 sm:pb-12">
        <Tabs defaultValue="timeline" className="space-y-6 sm:space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-white shadow-sm">
            <TabsTrigger
              value="timeline"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-xs sm:text-sm px-2 sm:px-4"
            >
              <span className="hidden sm:inline">Timeline View</span>
              <span className="sm:hidden">Timeline</span>
            </TabsTrigger>
            <TabsTrigger
              value="companies"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-xs sm:text-sm px-2 sm:px-4"
            >
              <span className="hidden sm:inline">Organizations</span>
              <span className="sm:hidden">Orgs</span>
            </TabsTrigger>
            <TabsTrigger
              value="dashboard"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-xs sm:text-sm px-2 sm:px-4"
            >
              <span className="hidden sm:inline">Progress Dashboard</span>
              <span className="sm:hidden">Dashboard</span>
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
