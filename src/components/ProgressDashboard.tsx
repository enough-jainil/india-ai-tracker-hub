
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { TrendingUpIcon, BrainIcon, BuildingIcon, GlobeIcon, MicIcon } from "lucide-react";

export const ProgressDashboard = () => {
  const yearlyProgress = [
    { year: "2020", llms: 1, tts: 0, organizations: 1 },
    { year: "2021", llms: 1, tts: 1, organizations: 2 },
    { year: "2022", llms: 3, tts: 3, organizations: 4 },
    { year: "2023", llms: 5, tts: 4, organizations: 6 },
    { year: "2024", llms: 15, tts: 6, organizations: 12 },
    { year: "2025", llms: 20, tts: 8, organizations: 16 }
  ];

  const modelTypeDistribution = [
    { name: "LLMs", value: 20, color: "#3B82F6" },
    { name: "TTS Models", value: 8, color: "#8B5CF6" }
  ];

  const organizationData = [
    { name: "AI4Bharat", llms: 4, tts: 1, type: "Academic" },
    { name: "Sarvam AI", llms: 5, tts: 2, type: "Startup" },
    { name: "Krutrim Lab", llms: 2, tts: 0, type: "Startup" },
    { name: "CoRover.ai", llms: 1, tts: 0, type: "Startup" },
    { name: "Tech Mahindra", llms: 1, tts: 0, type: "Corporate" },
    { name: "IIT Bombay", llms: 1, tts: 0, type: "Academic" },
    { name: "C-DAC", llms: 0, tts: 3, type: "Government" },
    { name: "IIT Madras", llms: 0, tts: 1, type: "Academic" }
  ];

  const typeDistribution = [
    { name: "Startups", value: 13, color: "#10B981" },
    { name: "Academic", value: 6, color: "#3B82F6" },
    { name: "Corporate", value: 2, color: "#F59E0B" },
    { name: "Research", value: 2, color: "#8B5CF6" },
    { name: "Government", value: 3, color: "#EF4444" }
  ];

  const languageSupport = [
    { language: "Hindi", models: 18 },
    { language: "English", models: 28 },
    { language: "Tamil", models: 15 },
    { language: "Telugu", models: 12 },
    { language: "Bengali", models: 12 },
    { language: "Marathi", models: 10 },
    { language: "Kannada", models: 10 },
    { language: "Gujarati", models: 9 }
  ];

  const milestones = [
    { title: "First Indian LLM", date: "Dec 2020", status: "completed" },
    { title: "First TTS Models", date: "Jan 2021", status: "completed" },
    { title: "Government Initiative", date: "Jun 2022", status: "completed" },
    { title: "Commercial Models", date: "Dec 2023", status: "completed" },
    { title: "Unicorn Status", date: "Jan 2024", status: "completed" },
    { title: "Multimodal AI", date: "Feb 2024", status: "completed" },
    { title: "Advanced TTS (Bulbul)", date: "Aug 2024", status: "completed" },
    { title: "Lightweight Models", date: "Jul 2024", status: "completed" },
    { title: "Enterprise Solutions", date: "Oct 2024", status: "completed" },
    { title: "Sovereign AI Initiative", date: "Mar 2025", status: "completed" },
    { title: "Enhanced TTS v2", date: "Dec 2024", status: "completed" },
    { title: "Advanced Multimodal", date: "May 2025", status: "in-progress" }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Indian AI Progress Dashboard</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive analytics and insights into India's LLM and TTS development journey
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-blue-500">
                <BrainIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">20+</p>
                <p className="text-gray-600">LLMs</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-purple-500">
                <MicIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">8+</p>
                <p className="text-gray-600">TTS Models</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-green-500">
                <BuildingIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">16</p>
                <p className="text-gray-600">Organizations</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-indigo-500">
                <GlobeIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">22+</p>
                <p className="text-gray-600">Languages</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-orange-500">
                <TrendingUpIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">$200M+</p>
                <p className="text-gray-600">Total Funding</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Yearly Progress */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Yearly AI Model Development</CardTitle>
            <CardDescription>Growth in LLMs, TTS models and organizations over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={yearlyProgress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="llms" stroke="#3B82F6" strokeWidth={3} name="LLMs" />
                <Line type="monotone" dataKey="tts" stroke="#8B5CF6" strokeWidth={3} name="TTS Models" />
                <Line type="monotone" dataKey="organizations" stroke="#10B981" strokeWidth={3} name="Organizations" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Model Type Distribution */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>AI Model Distribution</CardTitle>
            <CardDescription>LLMs vs TTS models</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={modelTypeDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {modelTypeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Models by Organization */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Models by Organization</CardTitle>
            <CardDescription>LLMs and TTS models developed by each organization</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={organizationData.slice(0, 8)}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="llms" fill="#3B82F6" name="LLMs" />
                <Bar dataKey="tts" fill="#8B5CF6" name="TTS Models" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Organization Types */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Organization Distribution</CardTitle>
            <CardDescription>Models by organization type</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={typeDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {typeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Language Support */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Language Support Across All Models</CardTitle>
          <CardDescription>Combined support from LLMs and TTS models</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={languageSupport}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="language" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="models" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Milestones */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Development Milestones</CardTitle>
          <CardDescription>Key achievements in Indian AI development (LLMs & TTS)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50">
                <div className={`w-4 h-4 rounded-full ${
                  milestone.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
                }`}></div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{milestone.title}</h4>
                  <p className="text-sm text-gray-600">{milestone.date}</p>
                </div>
                <Badge 
                  className={
                    milestone.status === 'completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }
                >
                  {milestone.status === 'completed' ? 'Completed' : 'In Progress'}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
