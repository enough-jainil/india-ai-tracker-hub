
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, MapPinIcon, UsersIcon, CalendarIcon } from "lucide-react";

interface Company {
  id: string;
  name: string;
  type: "Academic" | "Startup" | "Research" | "Corporate";
  location: string;
  founded: string;
  description: string;
  models: string[];
  achievements: string[];
  website?: string;
  funding?: string;
  employees?: string;
}

const companies: Company[] = [
  {
    id: "ai4bharat",
    name: "AI4Bharat",
    type: "Academic",
    location: "Chennai, India",
    founded: "2019",
    description: "IIT Madras initiative focused on democratizing AI for Indian languages and creating open-source language models.",
    models: ["IndicBERT", "IndicBART", "Airavata", "RomanSetu"],
    achievements: [
      "First comprehensive Indian language model suite",
      "Open-source commitment",
      "12+ Indian languages supported",
      "Academic research excellence"
    ],
    website: "https://ai4bharat.org",
    employees: "50+"
  },
  {
    id: "sarvam",
    name: "Sarvam AI",
    type: "Startup",
    location: "Bengaluru, India",
    founded: "2023",
    description: "AI startup building full-stack language AI for India with focus on practical applications and enterprise solutions.",
    models: ["OpenHathi", "Sarvam-2B", "Sarvam-1", "Sarvam-m"],
    achievements: [
      "First Hindi-focused LLM",
      "Production-ready models",
      "Enterprise partnerships",
      "Multimodal capabilities"
    ],
    website: "https://sarvam.ai",
    funding: "$41M Series A",
    employees: "100+"
  },
  {
    id: "krutrim",
    name: "Krutrim Lab",
    type: "Startup",
    location: "Bengaluru, India",
    founded: "2023",
    description: "Ola's AI venture creating India's first AI unicorn with comprehensive language models and AI infrastructure.",
    models: ["Krutrim-1", "Krutrim-2"],
    achievements: [
      "First Indian AI unicorn",
      "20+ Indian languages",
      "Massive commercial backing",
      "Comprehensive AI ecosystem"
    ],
    website: "https://krutrim.ai",
    funding: "$50M (Unicorn status)",
    employees: "200+"
  },
  {
    id: "iit-bombay",
    name: "IIT Bombay",
    type: "Academic",
    location: "Mumbai, India",
    founded: "1958",
    description: "Leading technical institute developing cutting-edge multimodal AI models through BharatGPT consortium.",
    models: ["Hanooman"],
    achievements: [
      "Multimodal AI research",
      "11 Indian languages support",
      "Industry-academia collaboration",
      "Advanced research infrastructure"
    ],
    employees: "500+ (Research Staff)"
  },
  {
    id: "bharatgen",
    name: "BharatGen",
    type: "Research",
    location: "Multiple Cities, India",
    founded: "2024",
    description: "Consortium of Indian institutions and companies working on next-generation AI models for India.",
    models: ["Param-1"],
    achievements: [
      "Multi-institutional collaboration",
      "Advanced AI research",
      "Government backing",
      "Strategic AI development"
    ],
    employees: "1000+ (Consortium)"
  }
];

interface CompanyProfilesProps {
  searchTerm: string;
}

export const CompanyProfiles = ({ searchTerm }: CompanyProfilesProps) => {
  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.models.some(model => model.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Academic": return "bg-blue-100 text-blue-800";
      case "Startup": return "bg-green-100 text-green-800";
      case "Research": return "bg-purple-100 text-purple-800";
      case "Corporate": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Organizations Driving Indian AI</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet the pioneering institutions and companies building the future of AI in India
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCompanies.map((company) => (
          <Card key={company.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CardTitle className="text-xl text-gray-900">{company.name}</CardTitle>
                    <Badge className={getTypeColor(company.type)}>
                      {company.type}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPinIcon className="w-4 h-4" />
                      <span>{company.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CalendarIcon className="w-4 h-4" />
                      <span>Founded {company.founded}</span>
                    </div>
                  </div>
                </div>
                {company.website && (
                  <Button variant="ghost" size="sm" asChild>
                    <a href={company.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-gray-700">
                {company.description}
              </CardDescription>

              {/* Company Stats */}
              <div className="flex flex-wrap gap-4 text-sm">
                {company.funding && (
                  <div className="flex items-center space-x-1 text-green-600">
                    <span className="font-semibold">Funding:</span>
                    <span>{company.funding}</span>
                  </div>
                )}
                {company.employees && (
                  <div className="flex items-center space-x-1 text-blue-600">
                    <UsersIcon className="w-4 h-4" />
                    <span>{company.employees}</span>
                  </div>
                )}
              </div>

              {/* Models */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">AI Models:</h4>
                <div className="flex flex-wrap gap-2">
                  {company.models.map((model, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-800">
                      {model}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                <ul className="space-y-1">
                  {company.achievements.slice(0, 3).map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCompanies.length === 0 && (
        <div className="text-center py-12">
          <UsersIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No organizations found for "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};
