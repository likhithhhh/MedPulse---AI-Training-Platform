import { Brain, Activity, MonitorPlay, BarChart3 } from "lucide-react";

export default function ProjectInfoCard() {
  return (
    <div className="mt-8 bg-white rounded-2xl shadow-md border border-gray-200 p-7">

      {/* Title */}
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-blue-100 p-2 rounded-lg">
          <Brain className="text-blue-600" size={22} />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">
          About MedPulse AI Training Platform
        </h2>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        MedPulse is an AI-powered medical training and surgical simulation platform 
        built to help students practice procedures, improve clinical decisions, 
        and gain real-world experience in a safe virtual environment.  
        The platform combines intelligent AI guidance, immersive simulations, 
        and performance analytics to create next-generation healthcare training.
      </p>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-5">

        {/* Feature 1 */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 hover:shadow-md transition">
          <Activity className="text-blue-600 mb-2" size={22} />
          <h3 className="font-semibold text-gray-800">AI Medical Assistant</h3>
          <p className="text-sm text-gray-600">
            Get intelligent guidance for surgeries, cases, and medical queries.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 hover:shadow-md transition">
          <MonitorPlay className="text-purple-600 mb-2" size={22} />
          <h3 className="font-semibold text-gray-800">VR Surgery Practice</h3>
          <p className="text-sm text-gray-600">
            Practice procedures safely in immersive virtual simulations.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-green-50 border border-green-100 rounded-xl p-4 hover:shadow-md transition">
          <BarChart3 className="text-green-600 mb-2" size={22} />
          <h3 className="font-semibold text-gray-800">Performance Tracking</h3>
          <p className="text-sm text-gray-600">
            Monitor progress, strengths, and improvement areas in real-time.
          </p>
        </div>

      </div>
    </div>
  );
}
