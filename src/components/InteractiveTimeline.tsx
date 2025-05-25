
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ExternalLinkIcon, BrainIcon } from "lucide-react";

interface TimelineEvent {
  id: string;
  date: string;
  year: number;
  month: string;
  title: string;
  organization: string;
  description: string;
  category: "LLM" | "Research" | "Startup" | "Partnership";
  details: string[];
  website?: string;
}

const timelineData: TimelineEvent[] = [
  {
    id: "1",
    date: "Dec 2020",
    year: 2020,
    month: "Dec",
    title: "IndicBERT",
    organization: "AI4Bharat",
    description: "First major Indian multilingual language model",
    category: "LLM",
    details: [
      "Supports 12 Indian languages",
      "Built on BERT architecture",
      "Open source model",
      "Released by IIT Madras team"
    ],
    website: "https://ai4bharat.org"
  },
  {
    id: "2",
    date: "Mar 2022",
    year: 2022,
    month: "Mar",
    title: "IndicBART",
    organization: "AI4Bharat",
    description: "Advanced sequence-to-sequence model for Indian languages",
    category: "LLM",
    details: [
      "Improved upon IndicBERT",
      "Better text generation capabilities",
      "Enhanced multilingual support",
      "Used for translation tasks"
    ]
  },
  {
    id: "3",
    date: "Dec 2023",
    year: 2023,
    month: "Dec",
    title: "OpenHathi",
    organization: "Sarvam AI",
    description: "Large-scale Hindi language model",
    category: "LLM",
    details: [
      "7B parameter model",
      "Focused on Hindi language",
      "Open source initiative",
      "Strong reasoning capabilities"
    ],
    website: "https://sarvam.ai"
  },
  {
    id: "4",
    date: "Jan 2024",
    year: 2024,
    month: "Jan",
    title: "Airavata",
    organization: "AI4Bharat",
    description: "Instruction-tuned model for Indian languages",
    category: "LLM",
    details: [
      "Fine-tuned for instruction following",
      "Supports multiple Indian languages",
      "Enhanced conversational abilities",
      "Community-driven development"
    ]
  },
  {
    id: "5",
    date: "Jan 2024",
    year: 2024,
    month: "Jan",
    title: "Krutrim-1",
    organization: "Krutrim Lab",
    description: "Ola's ambitious AI language model",
    category: "LLM",
    details: [
      "Supports 20+ Indian languages",
      "Commercial backing by Ola",
      "Focus on Indian context",
      "Unicorn startup status"
    ],
    website: "https://krutrim.ai"
  },
  {
    id: "6",
    date: "Feb 2024",
    year: 2024,
    month: "Feb",
    title: "Hanooman",
    organization: "IIT Bombay",
    description: "Multimodal AI model for Indian languages",
    category: "LLM",
    details: [
      "Supports text, speech, and video",
      "11 Indian languages",
      "Developed by BharatGPT consortium",
      "Academic-industry collaboration"
    ]
  },
  {
    id: "7",
    date: "Jun 2024",
    year: 2024,
    month: "Jun",
    title: "RomanSetu",
    organization: "AI4Bharat",
    description: "Romanized Indian language processing",
    category: "LLM",
    details: [
      "Handles romanized Indian text",
      "Code-mixed language support",
      "Social media text processing",
      "Transliteration capabilities"
    ]
  },
  {
    id: "8",
    date: "Aug 2024",
    year: 2024,
    month: "Aug",
    title: "Sarvam-2B",
    organization: "Sarvam AI",
    description: "Efficient small-scale language model",
    category: "LLM",
    details: [
      "2B parameter efficient model",
      "Optimized for mobile devices",
      "Fast inference capabilities",
      "Edge deployment ready"
    ]
  },
  {
    id: "9",
    date: "Oct 2024",
    year: 2024,
    month: "Oct",
    title: "Sarvam-1",
    organization: "Sarvam AI",
    description: "Production-ready Indian language model",
    category: "LLM",
    details: [
      "Enterprise-grade model",
      "API-first approach",
      "Multiple Indian languages",
      "Commercial deployment ready"
    ]
  },
  {
    id: "10",
    date: "Feb 2025",
    year: 2025,
    month: "Feb",
    title: "Krutrim-2",
    organization: "Krutrim Lab",
    description: "Next-generation AI model from Ola",
    category: "LLM",
    details: [
      "Enhanced capabilities",
      "Improved language support",
      "Better reasoning abilities",
      "Expanded training data"
    ]
  },
  {
    id: "11",
    date: "May 2025",
    year: 2025,
    month: "May",
    title: "Sarvam-m",
    organization: "Sarvam AI",
    description: "Multimodal AI advancement",
    category: "LLM",
    details: [
      "Text, image, and audio support",
      "Cross-modal understanding",
      "Enhanced reasoning",
      "Production deployment"
    ]
  },
  {
    id: "12",
    date: "May 2025",
    year: 2025,
    month: "May",
    title: "Param-1",
    organization: "BharatGen",
    description: "Next-generation Indian AI model",
    category: "LLM",
    details: [
      "Advanced architecture",
      "Comprehensive Indian language support",
      "State-of-the-art performance",
      "Research breakthrough"
    ]
  }
];

interface InteractiveTimelineProps {
  searchTerm: string;
}

export const InteractiveTimeline = ({ searchTerm }: InteractiveTimelineProps) => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  const filteredData = timelineData.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const years = Array.from(new Set(filteredData.map(event => event.year))).sort();
  
  const displayData = selectedYear 
    ? filteredData.filter(event => event.year === selectedYear)
    : filteredData;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "LLM": return "bg-blue-100 text-blue-800";
      case "Research": return "bg-green-100 text-green-800";
      case "Startup": return "bg-purple-100 text-purple-800";
      case "Partnership": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Year Filter */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedYear === null ? "default" : "outline"}
          onClick={() => setSelectedYear(null)}
          className="rounded-full"
        >
          All Years
        </Button>
        {years.map(year => (
          <Button
            key={year}
            variant={selectedYear === year ? "default" : "outline"}
            onClick={() => setSelectedYear(year)}
            className="rounded-full"
          >
            {year}
          </Button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
        
        <div className="space-y-8">
          {displayData.map((event, index) => (
            <div key={event.id} className="relative flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <BrainIcon className="w-6 h-6 text-blue-500" />
              </div>
              
              <Card 
                className={`flex-1 border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                  selectedEvent?.id === event.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedEvent(selectedEvent?.id === event.id ? null : event)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CalendarIcon className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500 font-medium">{event.date}</span>
                        <Badge className={getCategoryColor(event.category)}>
                          {event.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-gray-900">{event.title}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium">
                        {event.organization}
                      </CardDescription>
                    </div>
                    {event.website && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={event.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLinkIcon className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  
                  {selectedEvent?.id === event.id && (
                    <div className="space-y-3 pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900">Key Features:</h4>
                      <ul className="space-y-2">
                        {event.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <BrainIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No results found for "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};
