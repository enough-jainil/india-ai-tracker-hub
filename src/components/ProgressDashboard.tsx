
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { TrendingUpIcon, BrainIcon, BuildingIcon, GlobeIcon } from "lucide-react";

export const ProgressDashboard = () => {
  const yearlyProgress = [
    { year: "2020", models: 1, organizations: 1 },
    { year: "2021", models: 1, organizations: 1 },
    { year: "2022", models: 2, organizations: 1 },
    { year: "2023", models: 3, organizations: 2 },
    { year: "2024", models: 9, organizations: 4 },
    { year: "2025", models: 12, organizations: 5 }
  ];

  const organizationData = [
    { name: "AI4Bharat", models: 4, type: "Academic" },
    { name: "Sarvam AI", models: 4, type: "Startup" },
    { name: "Krutrim Lab", models: 2, type: "Startup" },
    { name: "IIT Bombay", models: 1, type: "Academic" },
    { name: "BharatGen", models: 1, type: "Research" }
  ];

  const typeDistribution = [
    { name: "Startups", value: 7, color: "#10B981" },
    { name: "Academic", value: 5, color: "#3B82F6" },
    { name: "Research", value: 1, color: "#8B5CF6" }
  ];

  const languageSupport = [
    { language: "Hindi", models: 8 },
    { language: "English", models: 12 },
    { language: "Tamil", models: 6 },
    { language: "Telugu", models: 6 },
    { language: "Bengali", models: 5 },
    { language: "Marathi", models: 5 }
  ];

  const milestones = [
    { title: "First Indian LLM", date: "Dec 2020", status: "completed" },
    { title: "Multilingual Support", date: "Mar 2022", status: "completed" },
    { title: "Commercial Models", date: "Dec 2023", status: "completed" },
    { title: "Unicorn Status", date: "Jan 2024", status: "completed" },
    { title: "Multimodal AI", date: "Feb 2024", status: "completed" },
    { title: "Production Deployment", date: "Oct 2024", status: "completed" },
    { title: "Next-Gen Models", date: "May 2025", status: "in-progress" }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Indian AI Progress Dashboard</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive analytics and insights into India's AI development journey
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-blue-500">
                <BrainIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">12+</p>
                <p className="text-gray-600">Total Models</p>
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
                <p className="text-2xl font-bold text-gray-900">5</p>
                <p className="text-gray-600">Organizations</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-purple-500">
                <GlobeIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">20+</p>
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
                <p className="text-2xl font-bold text-gray-900">$91M+</p>
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
            <CardTitle>Yearly Model Development</CardTitle>
            <CardDescription>Growth in AI models and organizations over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={yearlyProgress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="models" stroke="#3B82F6" strokeWidth={3} name="Models" />
                <Line type="monotone" dataKey="organizations" stroke="#10B981" strokeWidth={3} name="Organizations" />
              </LineChart>
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

        {/* Models by Organization */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Models by Organization</CardTitle>
            <CardDescription>Number of models developed by each organization</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={organizationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="models" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Language Support */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Language Support</CardTitle>
            <CardDescription>Number of models supporting each language</CardDescription>
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
      </div>

      {/* Milestones */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Development Milestones</CardTitle>
          <CardDescription>Key achievements in Indian AI development</CardDescription>
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
