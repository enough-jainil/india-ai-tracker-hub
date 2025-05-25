import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ExternalLinkIcon, BrainIcon, MicIcon, ImageIcon, VideoIcon } from "lucide-react";

interface TimelineEvent {
  id: string;
  date: string;
  year: number;
  month: string;
  title: string;
  organization: string;
  description: string;
  category: "LLM" | "TTS" | "Image" | "Video" | "Research" | "Startup" | "Partnership" | "Government";
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
    date: "Jun 2022",
    year: 2022,
    month: "Jun",
    title: "Bhashini Platform",
    organization: "Government of India",
    description: "Digital platform for AI-powered language services",
    category: "Government",
    details: [
      "Automatic speech recognition",
      "Translation services",
      "Bridge digital divides",
      "Support for all Indian languages"
    ]
  },
  {
    id: "4",
    date: "Dec 2023",
    year: 2023,
    month: "Dec",
    title: "OpenHathi",
    organization: "Sarvam AI",
    description: "First Hindi LLM based on Llama2-7B",
    category: "LLM",
    details: [
      "7B parameter model",
      "Enhanced Indic language support",
      "Real-world conversational fine-tuning",
      "Open source initiative"
    ],
    website: "https://sarvam.ai"
  },
  {
    id: "5",
    date: "Dec 2023",
    year: 2023,
    month: "Dec",
    title: "BharatGPT",
    organization: "CoRover.ai",
    description: "Government-backed multilingual LLM",
    category: "LLM",
    details: [
      "12+ Indian languages for text",
      "14 languages for voice",
      "Integrated with IRCTC and NPCI",
      "Government services focus"
    ],
    website: "https://bharatgpt.ai"
  },
  {
    id: "6",
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
    id: "7",
    date: "Jan 2024",
    year: 2024,
    month: "Jan",
    title: "Krutrim-1",
    organization: "Krutrim Lab",
    description: "Multilingual LLM understanding 22 Indian languages",
    category: "LLM",
    details: [
      "Understands 22 Indian languages",
      "Generates in 10 languages",
      "Commercial backing by Ola",
      "Unicorn startup status"
    ],
    website: "https://krutrim.ai"
  },
  {
    id: "8",
    date: "Feb 2024",
    year: 2024,
    month: "Feb",
    title: "Hanooman AI",
    organization: "IIT Bombay & Reliance Jio",
    description: "Multimodal AI model for Indian languages",
    category: "LLM",
    details: [
      "Supports text, speech, and vision",
      "11 Indian languages",
      "Developed by BharatGPT consortium",
      "Academic-industry collaboration"
    ]
  },
  {
    id: "9",
    date: "Mar 2024",
    year: 2024,
    month: "Mar",
    title: "Project Indus",
    organization: "Tech Mahindra",
    description: "Open-source LLM focused on Indic languages",
    category: "LLM",
    details: [
      "Available on Hugging Face",
      "Open source initiative",
      "Tailored for local needs",
      "Community-driven development"
    ]
  },
  {
    id: "10",
    date: "Apr 2024",
    year: 2024,
    month: "Apr",
    title: "Navarasa 2.0",
    organization: "Telugu LLM Labs",
    description: "Gemma 7B/2B instruction-tuned model",
    category: "LLM",
    details: [
      "Supports 16 languages (15 Indian + English)",
      "Includes Konkani, Marathi, Urdu, Assamese",
      "Expanded from previous versions",
      "Instruction-tuned capabilities"
    ]
  },
  {
    id: "11",
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
    id: "12",
    date: "Jul 2024",
    year: 2024,
    month: "Jul",
    title: "Paramanu",
    organization: "Gyan AI",
    description: "Lightweight LLMs optimized for Indian languages",
    category: "LLM",
    details: [
      "13mn–367mn parameters",
      "Assamese, Bangla, Hindi, Tamil support",
      "Efficiency and transparency focused",
      "Outperforms larger models in evaluations"
    ]
  },
  {
    id: "13",
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
    id: "14",
    date: "Sep 2024",
    year: 2024,
    month: "Sep",
    title: "YellowG",
    organization: "Yellow.ai",
    description: "Proprietary LLM for enterprise automation",
    category: "LLM",
    details: [
      "Customer service bots",
      "Voice assistants",
      "Multiple Indian languages",
      "Enterprise automation focus"
    ]
  },
  {
    id: "15",
    date: "Oct 2024",
    year: 2024,
    month: "Oct",
    title: "Sarvam-1",
    organization: "Sarvam AI",
    description: "India's first homegrown multilingual LLM",
    category: "LLM",
    details: [
      "Trained from scratch",
      "API-first approach",
      "Multiple Indian languages",
      "Commercial deployment ready"
    ]
  },
  {
    id: "16",
    date: "Nov 2024",
    year: 2024,
    month: "Nov",
    title: "Zoho Domain LLMs",
    organization: "Zoho Corporation",
    description: "Domain-specific LLMs for business",
    category: "LLM",
    details: [
      "7–20 billion parameters",
      "Business domain focused",
      "Tailored for Indian enterprises",
      "Multiple specialized models"
    ]
  },
  {
    id: "17",
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
    id: "18",
    date: "Mar 2025",
    year: 2025,
    month: "Mar",
    title: "Sovereign LLMs",
    organization: "Sarvam AI (IndiaAI Mission)",
    description: "Three sovereign Indian LLM variants",
    category: "LLM",
    details: [
      "Sarvam-Large (advanced reasoning)",
      "Sarvam-Small (real-time interaction)",
      "Sarvam-Edge (on-device tasks)",
      "IndiaAI Mission backing"
    ]
  },
  {
    id: "19",
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
    id: "20",
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
  },
  {
    id: "21",
    date: "Jan 2021",
    year: 2021,
    month: "Jan",
    title: "C-DAC GIST Hindi TTS",
    organization: "C-DAC",
    description: "Comprehensive Hindi TTS system with multiple architectures",
    category: "TTS",
    details: [
      "Limited Domain TTS",
      "Generic Hybrid TTS (diphones + recorded words)",
      "Tiny TTS for embedded devices",
      "Adaptable architecture for other Indian languages"
    ],
    website: "https://cdac.in"
  },
  {
    id: "22",
    date: "Mar 2022",
    year: 2022,
    month: "Mar",
    title: "AI4Bharat Indic-TTS",
    organization: "AI4Bharat",
    description: "Open-source TTS models for 13 Indian languages",
    category: "TTS",
    details: [
      "FastPitch and HiFi-GAN architectures",
      "High-quality, natural-sounding speech",
      "Available on Bhashini platform",
      "Supports Assamese, Bengali, Hindi, Tamil, Telugu, etc."
    ],
    website: "https://github.com/AI4Bharat/Indic-TTS"
  },
  {
    id: "23",
    date: "Jun 2022",
    year: 2022,
    month: "Jun",
    title: "IIT Madras Indic TTS Consortium",
    organization: "IIT Madras",
    description: "Collaborative TTS project for 22 Indian languages",
    category: "TTS",
    details: [
      "23 institutions collaboration",
      "High-quality synthesis focus",
      "Small-footprint models",
      "Accessibility and education applications"
    ],
    website: "https://www.iitm.ac.in/donlab/indictts"
  },
  {
    id: "24",
    date: "Sep 2023",
    year: 2023,
    month: "Sep",
    title: "SYSPIN TTS",
    organization: "IISc Bangalore",
    description: "Large corpora and TTS models for 9 Indian languages",
    category: "TTS",
    details: [
      "Open-source initiative",
      "Large corpus development",
      "Resource gap reduction",
      "Speech technology advancement"
    ],
    website: "https://syspin.iisc.ac.in"
  },
  {
    id: "25",
    date: "Jan 2024",
    year: 2024,
    month: "Jan",
    title: "Indian TTS Platform",
    organization: "Indian TTS",
    description: "Commercial TTS services for 12 Indian languages",
    category: "TTS",
    details: [
      "Online and offline voice synthesis",
      "IVR integration",
      "Screen reader support",
      "Accessibility focus for visually impaired"
    ],
    website: "https://indiantts.com"
  },
  {
    id: "26",
    date: "Mar 2024",
    year: 2024,
    month: "Mar",
    title: "AIKosh TTS",
    organization: "AIKosh",
    description: "Multi-language TTS with accessibility focus",
    category: "TTS",
    details: [
      "Multiple Indian languages support",
      "Accessibility-focused design",
      "Speech synthesis applications",
      "Government AI initiative"
    ],
    website: "https://aikosh.indiaai.gov.in"
  },
  {
    id: "27",
    date: "Aug 2024",
    year: 2024,
    month: "Aug",
    title: "Bulbul-v1",
    organization: "Sarvam AI",
    description: "Advanced TTS model for 11 Indian languages",
    category: "TTS",
    details: [
      "Natural, expressive voices",
      "Real-time synthesis capability",
      "Code-mixed language support",
      "Hindi, Marathi, Tamil, Telugu, Bengali support"
    ],
    website: "https://www.sarvam.ai/apis/text-to-speech"
  },
  {
    id: "28",
    date: "Dec 2024",
    year: 2024,
    month: "Dec",
    title: "Bulbul-v2",
    organization: "Sarvam AI",
    description: "Enhanced TTS with fine-grained voice control",
    category: "TTS",
    details: [
      "Improved voice quality",
      "Fine-grained voice control",
      "Scalable business applications",
      "Enhanced expressiveness"
    ],
    website: "https://www.sarvam.ai/apis/text-to-speech"
  },
  // Image Models
  {
    id: "29",
    date: "Jan 2022",
    year: 2022,
    month: "Jan",
    title: "BharatDiffusion",
    organization: "BharatDiffusion",
    description: "Diffusion-based image generator for Indian culture",
    category: "Image",
    details: [
      "Fine-tuned on Indian landscapes and culture",
      "Classical motifs to modern interpretations",
      "Advanced AI using Stable Diffusion",
      "Trained on vast dataset of Indian images"
    ],
    website: "https://www.bharatdiffusion.ai"
  },
  {
    id: "30",
    date: "Nov 2024",
    year: 2024,
    month: "Nov",
    title: "Kalaido.ai",
    organization: "Fractal",
    description: "Text-to-image model supporting 17 Indian languages",
    category: "Image",
    details: [
      "Supports English and 17 Indian languages",
      "Trained on 70 million images",
      "Focuses on efficiency and realism",
      "Cost-effective for commercial use"
    ],
    website: "https://fractal.ai"
  },
  // Video Models
  {
    id: "31",
    date: "Aug 2023",
    year: 2023,
    month: "Aug",
    title: "Chitralekha",
    organization: "AI4Bharat",
    description: "Open-source video transcreation platform",
    category: "Video",
    details: [
      "Subtitle generation",
      "Audio/video dubbing",
      "Video translation across Indic languages",
      "Content localization and accessibility"
    ],
    website: "https://ai4bharat.org"
  },
  {
    id: "32",
    date: "Dec 2023",
    year: 2023,
    month: "Dec",
    title: "BharatGPT Video",
    organization: "CoRover.ai",
    description: "Video generation capabilities in BharatGPT",
    category: "Video",
    details: [
      "Multi-modal content creation",
      "14+ Indian languages support",
      "Conversational AI with video",
      "Virtual assistant capabilities"
    ],
    website: "https://corover.ai/bharatgpt/"
  }
];

interface InteractiveTimelineProps {
  searchTerm: string;
}

export const InteractiveTimeline = ({ searchTerm }: InteractiveTimelineProps) => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredData = timelineData.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesYear = selectedYear ? event.year === selectedYear : true;
    const matchesCategory = selectedCategory ? event.category === selectedCategory : true;
    
    return matchesSearch && matchesYear && matchesCategory;
  });

  const years = Array.from(new Set(timelineData.map(event => event.year))).sort();
  const categories = ["LLM", "TTS", "Image", "Video", "Government", "Research"];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "LLM": return "bg-blue-100 text-blue-800";
      case "TTS": return "bg-purple-100 text-purple-800";
      case "Image": return "bg-pink-100 text-pink-800";
      case "Video": return "bg-indigo-100 text-indigo-800";
      case "Research": return "bg-green-100 text-green-800";
      case "Startup": return "bg-orange-100 text-orange-800";
      case "Partnership": return "bg-yellow-100 text-yellow-800";
      case "Government": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "TTS": return MicIcon;
      case "Image": return ImageIcon;
      case "Video": return VideoIcon;
      default: return BrainIcon;
    }
  };

  const getCategoryBorderColor = (category: string) => {
    switch (category) {
      case "TTS": return "border-purple-500";
      case "Image": return "border-pink-500";
      case "Video": return "border-indigo-500";
      default: return "border-blue-500";
    }
  };

  const getCategoryTextColor = (category: string) => {
    switch (category) {
      case "TTS": return "text-purple-500";
      case "Image": return "text-pink-500";
      case "Video": return "text-indigo-500";
      default: return "text-blue-500";
    }
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="space-y-4">
        {/* Year Filter */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedYear === null ? "default" : "outline"}
            onClick={() => setSelectedYear(null)}
            className="rounded-full text-xs sm:text-sm"
            size="sm"
          >
            All Years
          </Button>
          {years.map(year => (
            <Button
              key={year}
              variant={selectedYear === year ? "default" : "outline"}
              onClick={() => setSelectedYear(year)}
              className="rounded-full text-xs sm:text-sm"
              size="sm"
            >
              {year}
            </Button>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className="rounded-full text-xs sm:text-sm"
            size="sm"
          >
            All Types
          </Button>
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full text-xs sm:text-sm"
              size="sm"
            >
              {category === "LLM" ? "LLMs" : 
               category === "TTS" ? "Text-to-Speech" : 
               category === "Image" ? "Image Generation" :
               category === "Video" ? "Video Generation" : category}
            </Button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
        
        <div className="space-y-6 sm:space-y-8">
          {filteredData.map((event, index) => {
            const IconComponent = getCategoryIcon(event.category);
            const borderColor = getCategoryBorderColor(event.category);
            const textColor = getCategoryTextColor(event.category);
            
            return (
              <div key={event.id} className="relative flex items-start space-x-3 sm:space-x-6">
                <div className={`flex-shrink-0 w-8 h-8 sm:w-16 sm:h-16 bg-white border-2 sm:border-4 ${borderColor} rounded-full flex items-center justify-center shadow-lg`}>
                  <IconComponent className={`w-3 h-3 sm:w-6 sm:h-6 ${textColor}`} />
                </div>
                
                <Card 
                  className={`flex-1 border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                    selectedEvent?.id === event.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedEvent(selectedEvent?.id === event.id ? null : event)}
                >
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1 sm:space-y-2 flex-1 min-w-0">
                        <div className="flex items-center space-x-2 flex-wrap gap-1">
                          <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-500 font-medium">{event.date}</span>
                          <Badge className={`${getCategoryColor(event.category)} text-xs`}>
                            {event.category === "LLM" ? "LLM" : 
                             event.category === "TTS" ? "TTS" : 
                             event.category === "Image" ? "Image" :
                             event.category === "Video" ? "Video" : event.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg sm:text-xl text-gray-900 break-words">{event.title}</CardTitle>
                        <CardDescription className="text-blue-600 font-medium text-sm sm:text-base break-words">
                          {event.organization}
                        </CardDescription>
                      </div>
                      {event.website && (
                        <Button variant="ghost" size="sm" asChild className="flex-shrink-0 ml-2">
                          <a href={event.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLinkIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-700 mb-4 text-sm sm:text-base break-words">{event.description}</p>
                    
                    {selectedEvent?.id === event.id && (
                      <div className="space-y-3 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Key Features:</h4>
                        <ul className="space-y-2">
                          {event.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm sm:text-base break-words">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}
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
