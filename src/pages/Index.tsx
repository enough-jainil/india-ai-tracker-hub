
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InteractiveTimeline } from "@/components/InteractiveTimeline";
import { CompanyProfiles } from "@/components/CompanyProfiles";
import { ProgressDashboard } from "@/components/ProgressDashboard";
import { SearchIcon, TrendingUpIcon, BrainIcon, CalendarIcon } from "lucide-react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const stats = [
    { label: "Total LLMs", value: "12+", icon: BrainIcon, color: "bg-blue-500" },
    { label: "Organizations", value: "8", icon: TrendingUpIcon, color: "bg-green-500" },
    { label: "Years Tracked", value: "5", icon: CalendarIcon, color: "bg-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Indian AI Tracker
              </h1>
              <p className="text-gray-600 mt-2">Comprehensive platform tracking India's AI revolution (2020-2025)</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search organizations, models..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-gray-600">{stat.label}</p>
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
            <TabsTrigger value="timeline" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              Timeline View
            </TabsTrigger>
            <TabsTrigger value="companies" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              Organizations
            </TabsTrigger>
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              Progress Dashboard
            </TabsTrigger>
          </TabsList>

          <TabsContent value="timeline" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Indian LLMs Timeline (2020-2025)</CardTitle>
                <CardDescription>
                  Interactive timeline showcasing the evolution of Large Language Models in India
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
