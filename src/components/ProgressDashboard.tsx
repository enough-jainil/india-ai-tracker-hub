import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import {
  TrendingUpIcon,
  BrainIcon,
  BuildingIcon,
  GlobeIcon,
  MicIcon,
  ImageIcon,
  VideoIcon,
} from "lucide-react";

export const ProgressDashboard = () => {
  const yearlyProgress = [
    { year: "2020", llms: 1, tts: 0, image: 0, video: 0, organizations: 1 },
    { year: "2021", llms: 1, tts: 1, image: 0, video: 0, organizations: 2 },
    { year: "2022", llms: 3, tts: 3, image: 0, video: 0, organizations: 4 },
    { year: "2023", llms: 5, tts: 4, image: 1, video: 1, organizations: 8 },
    { year: "2024", llms: 15, tts: 6, image: 2, video: 2, organizations: 16 },
    { year: "2025", llms: 20, tts: 8, image: 2, video: 2, organizations: 20 },
  ];

  const modelTypeDistribution = [
    { name: "LLMs", value: 20, color: "#3B82F6" },
    { name: "TTS Models", value: 8, color: "#8B5CF6" },
    { name: "Image Models", value: 2, color: "#EC4899" },
    { name: "Video Models", value: 2, color: "#6366F1" },
  ];

  const organizationData = [
    {
      name: "AI4Bharat",
      llms: 4,
      tts: 1,
      image: 0,
      video: 1,
      type: "Academic",
    },
    { name: "Sarvam AI", llms: 5, tts: 2, image: 0, video: 0, type: "Startup" },
    {
      name: "Krutrim Lab",
      llms: 2,
      tts: 0,
      image: 0,
      video: 0,
      type: "Startup",
    },
    {
      name: "CoRover.ai",
      llms: 1,
      tts: 0,
      image: 0,
      video: 1,
      type: "Startup",
    },
    {
      name: "Tech Mahindra",
      llms: 1,
      tts: 0,
      image: 0,
      video: 0,
      type: "Corporate",
    },
    {
      name: "IIT Bombay",
      llms: 1,
      tts: 0,
      image: 0,
      video: 0,
      type: "Academic",
    },
    { name: "C-DAC", llms: 0, tts: 3, image: 0, video: 0, type: "Government" },
    {
      name: "IIT Madras",
      llms: 0,
      tts: 1,
      image: 0,
      video: 0,
      type: "Academic",
    },
    {
      name: "BharatDiffusion",
      llms: 0,
      tts: 0,
      image: 1,
      video: 0,
      type: "Startup",
    },
    { name: "Fractal", llms: 0, tts: 0, image: 1, video: 0, type: "Corporate" },
  ];

  const typeDistribution = [
    { name: "Startups", value: 15, color: "#10B981" },
    { name: "Academic", value: 7, color: "#3B82F6" },
    { name: "Corporate", value: 3, color: "#F59E0B" },
    { name: "Research", value: 2, color: "#8B5CF6" },
    { name: "Government", value: 3, color: "#EF4444" },
  ];

  const languageSupport = [
    { language: "Hindi", models: 22 },
    { language: "English", models: 32 },
    { language: "Tamil", models: 18 },
    { language: "Telugu", models: 15 },
    { language: "Bengali", models: 15 },
    { language: "Marathi", models: 13 },
    { language: "Kannada", models: 13 },
    { language: "Gujarati", models: 12 },
  ];

  const milestones = [
    { title: "First Indian LLM", date: "Dec 2020", status: "completed" },
    { title: "First TTS Models", date: "Jan 2021", status: "completed" },
    { title: "Government Initiative", date: "Jun 2022", status: "completed" },
    { title: "Commercial Models", date: "Dec 2023", status: "completed" },
    { title: "First Image AI Model", date: "Jan 2023", status: "completed" },
    { title: "First Video AI Model", date: "Mar 2023", status: "completed" },
    { title: "Unicorn Status", date: "Jan 2024", status: "completed" },
    { title: "Multimodal AI", date: "Feb 2024", status: "completed" },
    { title: "Advanced TTS (Bulbul)", date: "Aug 2024", status: "completed" },
    { title: "BharatDiffusion Launch", date: "Sep 2024", status: "completed" },
    { title: "Lightweight Models", date: "Jul 2024", status: "completed" },
    { title: "Enterprise Solutions", date: "Oct 2024", status: "completed" },
    {
      title: "Kalaido.ai Multi-language",
      date: "Nov 2024",
      status: "completed",
    },
    { title: "Sovereign AI Initiative", date: "Mar 2025", status: "completed" },
    { title: "Enhanced TTS v2", date: "Dec 2024", status: "completed" },
    { title: "Advanced Multimodal", date: "May 2025", status: "in-progress" },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Indian AI Progress Dashboard
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive analytics and insights into India's LLM, TTS, Image, and
          Video AI development journey
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-lg bg-blue-500">
                <BrainIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">20+</p>
                <p className="text-gray-600 text-sm">LLMs</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-lg bg-purple-500">
                <MicIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">8+</p>
                <p className="text-gray-600 text-sm">TTS Models</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-lg bg-pink-500">
                <ImageIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">2+</p>
                <p className="text-gray-600 text-sm">Image Models</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-lg bg-indigo-500">
                <VideoIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">2+</p>
                <p className="text-gray-600 text-sm">Video Models</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-lg bg-green-500">
                <BuildingIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">20+</p>
                <p className="text-gray-600 text-sm">Organizations</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-lg bg-indigo-500">
                <GlobeIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">22+</p>
                <p className="text-gray-600 text-sm">Languages</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-lg bg-orange-500">
                <TrendingUpIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">$300M+</p>
                <p className="text-gray-600 text-sm">Total Funding</p>
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
            <CardDescription>
              Growth in LLMs, TTS, Image, Video models and organizations over
              time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={yearlyProgress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="llms"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  name="LLMs"
                />
                <Line
                  type="monotone"
                  dataKey="tts"
                  stroke="#8B5CF6"
                  strokeWidth={3}
                  name="TTS Models"
                />
                <Line
                  type="monotone"
                  dataKey="image"
                  stroke="#EC4899"
                  strokeWidth={3}
                  name="Image Models"
                />
                <Line
                  type="monotone"
                  dataKey="video"
                  stroke="#6366F1"
                  strokeWidth={3}
                  name="Video Models"
                />
                <Line
                  type="monotone"
                  dataKey="organizations"
                  stroke="#10B981"
                  strokeWidth={3}
                  name="Organizations"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Model Type Distribution */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>AI Model Distribution</CardTitle>
            <CardDescription>
              LLMs vs TTS vs Image vs Video models
            </CardDescription>
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
            <CardDescription>
              All AI models developed by each organization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={organizationData.slice(0, 10)}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  angle={-45}
                  textAnchor="end"
                  height={100}
                />
                <YAxis />
                <Tooltip />
                <Bar dataKey="llms" fill="#3B82F6" name="LLMs" />
                <Bar dataKey="tts" fill="#8B5CF6" name="TTS Models" />
                <Bar dataKey="image" fill="#EC4899" name="Image Models" />
                <Bar dataKey="video" fill="#6366F1" name="Video Models" />
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
          <CardDescription>
            Combined support from LLMs, TTS, Image, and Video models
          </CardDescription>
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
          <CardDescription>
            Key achievements in Indian AI development (LLMs, TTS, Image & Video
            models)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50"
              >
                <div
                  className={`w-4 h-4 rounded-full ${
                    milestone.status === "completed"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                ></div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">
                    {milestone.title}
                  </h4>
                  <p className="text-sm text-gray-600">{milestone.date}</p>
                </div>
                <Badge
                  className={
                    milestone.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }
                >
                  {milestone.status === "completed"
                    ? "Completed"
                    : "In Progress"}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
