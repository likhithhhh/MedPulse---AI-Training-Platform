import { useState, useEffect } from "react";
import {
  User,
  Activity,
  Heart,
  Brain,
  Eye,
  Wind,
  Stethoscope,
  ArrowLeft,
  Star,
  Clock,
  Target,
  ChevronRight,
  Play,
  BarChart3,
  CheckCircle
} from "lucide-react";
import useAuthUser from "../hooks/useAuthUser";

// SimulationSelector Component
export default function SimulationSelector({ onBackToDashboard, onSelectSimulation }) {
  const { user } = useAuthUser();
  const [selectedSimulation, setSelectedSimulation] = useState(null);

  const simulations = [
    {
      id: "cardiac",
      name: "Cardiac Surgery",
      icon: Heart,
      color: "from-red-500 to-pink-600",
      bgColor: "from-red-50 to-pink-50",
      borderColor: "border-red-200",
      textColor: "text-red-700",
      iconColor: "text-red-600",
      difficulty: "Advanced",
      duration: "45-60 min",
      rating: 4.8,
      description: "Master complex heart procedures including bypass surgery, valve repair, and cardiac catheterization.",
      procedures: ["Bypass Surgery", "Valve Replacement", "Angioplasty", "Cardiac Catheterization"]
    },
    {
      id: "neuro",
      name: "Neuro Surgery",
      icon: Brain,
      color: "from-purple-500 to-indigo-600",
      bgColor: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-700",
      iconColor: "text-purple-600",
      difficulty: "Expert",
      duration: "60-90 min",
      rating: 4.9,
      description: "Navigate complex brain and nervous system surgeries with precision and expertise.",
      procedures: ["Craniotomy", "Tumor Removal", "Aneurysm Repair", "Deep Brain Stimulation"]
    },
    {
      id: "orthopedic",
      name: "Orthopedic",
      icon: Target,
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      iconColor: "text-blue-600",
      difficulty: "Intermediate",
      duration: "30-45 min",
      rating: 4.6,
      description: "Learn bone, joint, and musculoskeletal system procedures and treatments.",
      procedures: ["Joint Replacement", "Fracture Repair", "Arthroscopy", "Spinal Surgery"]
    },
    {
      id: "respiratory",
      name: "Pulmonology",
      icon: Wind,
      color: "from-teal-500 to-emerald-600",
      bgColor: "from-teal-50 to-emerald-50",
      borderColor: "border-teal-200",
      textColor: "text-teal-700",
      iconColor: "text-teal-600",
      difficulty: "Intermediate",
      duration: "25-40 min",
      rating: 4.5,
      description: "Master respiratory system diagnostics and treatment procedures.",
      procedures: ["Bronchoscopy", "Lung Biopsy", "Thoracotomy", "Ventilator Management"]
    },
    {
      id: "ophthalmology",
      name: "Ophthalmology",
      icon: Eye,
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-700",
      iconColor: "text-amber-600",
      difficulty: "Advanced",
      duration: "20-35 min",
      rating: 4.7,
      description: "Perform precise eye surgeries and vision correction procedures.",
      procedures: ["Cataract Surgery", "Retinal Repair", "LASIK", "Glaucoma Treatment"]
    },
    {
      id: "dentistry",
      name: "Dentistry",
      icon: Stethoscope,
      color: "from-green-500 to-lime-600",
      bgColor: "from-green-50 to-lime-50",
      borderColor: "border-green-200",
      textColor: "text-green-700",
      iconColor: "text-green-600",
      difficulty: "Beginner",
      duration: "15-30 min",
      rating: 4.4,
      description: "Practice dental procedures and oral health treatments.",
      procedures: ["Root Canal", "Tooth Extraction", "Dental Implants", "Periodontal Surgery"]
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-orange-100 text-orange-800";
      case "Expert": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const handleSimulationClick = (simulation) => {
    setSelectedSimulation(simulation);
  };

  const handleStartSimulation = () => {
    if (selectedSimulation && onSelectSimulation) {
      onSelectSimulation(selectedSimulation);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm z-50">
        <div className="flex items-center justify-between px-8 py-4">
          {/* Left Side - Back Button & Branding */}
          <div className="flex items-center space-x-6">
            <button 
              onClick={onBackToDashboard}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Dashboard</span>
            </button>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Activity className="text-white" size={20} />
              </div>
              <div>
                <div className="text-gray-900 text-xl font-bold">Medical Simulation</div>
                <div className="text-gray-500 text-sm">Choose Your Training</div>
              </div>
            </div>
          </div>
          
          {/* Right Side - User Profile */}
          <div className="flex items-center space-x-8">
            <div className="hidden lg:flex items-center space-x-4">
              <div className="bg-blue-50 border border-blue-100 rounded-full px-4 py-2 flex items-center space-x-2">
                <BarChart3 className="text-blue-600" size={16} />
                <div className="text-sm">
                  <span className="text-gray-600">Sessions:</span>
                  <span className="font-bold text-blue-600 ml-1">12</span>
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-full px-4 py-2 flex items-center space-x-2">
                <Star className="text-emerald-600" size={16} />
                <div className="text-sm">
                  <span className="text-gray-600">Score:</span>
                  <span className="font-bold text-emerald-600 ml-1">4.2</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-2xl px-6 py-3 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                  <User className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-bold text-lg text-gray-900">
                    {user?.displayName || user?.email || "User"}
                  </div>
                  <div className="text-gray-500 text-sm">{user?.email || "No email available"}</div>
                  <div className="text-gray-400 text-xs">UID: {user?.uid || "Not available"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Simulation Type</h1>
            <p className="text-xl text-gray-600 mb-2">Select a medical specialty to begin your training</p>
            <p className="text-gray-500">Each simulation is designed to provide hands-on experience with real medical procedures</p>
          </div>

          {/* Simulation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {simulations.map((simulation) => {
              const IconComponent = simulation.icon;
              return (
                <div
                  key={simulation.id}
                  className={`group cursor-pointer bg-gradient-to-br ${simulation.bgColor} rounded-3xl p-8 border-2 ${simulation.borderColor} hover:shadow-2xl hover:scale-105 transition-all duration-300 ${
                    selectedSimulation?.id === simulation.id ? 'ring-4 ring-blue-400 ring-opacity-50 shadow-xl scale-105' : ''
                  }`}
                  onClick={() => handleSimulationClick(simulation)}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${simulation.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all`}>
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`${i < Math.floor(simulation.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            size={14} 
                          />
                        ))}
                        <span className={`ml-2 text-sm font-bold ${simulation.textColor}`}>{simulation.rating}</span>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(simulation.difficulty)}`}>
                        {simulation.difficulty}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className={`text-2xl font-bold mb-3 ${simulation.textColor}`}>{simulation.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{simulation.description}</p>
                    
                    {/* Duration */}
                    <div className="flex items-center space-x-2 mb-4">
                      <Clock className={`${simulation.iconColor}`} size={16} />
                      <span className="text-gray-600 text-sm font-medium">{simulation.duration}</span>
                    </div>

                    {/* Procedures */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide">Key Procedures:</h4>
                      <div className="flex flex-wrap gap-2">
                        {simulation.procedures.slice(0, 3).map((procedure, index) => (
                          <span key={index} className="bg-white/70 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                            {procedure}
                          </span>
                        ))}
                        {simulation.procedures.length > 3 && (
                          <span className="bg-white/70 text-gray-500 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                            +{simulation.procedures.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Selection Indicator */}
                  {selectedSimulation?.id === simulation.id && (
                    <div className="flex items-center space-x-2 mb-4">
                      <CheckCircle className="text-blue-600" size={18} />
                      <span className="text-blue-600 text-sm font-medium">Selected for training</span>
                    </div>
                  )}

                  {/* Hover Effect */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${simulation.textColor}`}>Click to select</span>
                      <ChevronRight className={`${simulation.iconColor}`} size={18} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selection Actions */}
          {selectedSimulation && (
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 min-w-96">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${selectedSimulation.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <selectedSimulation.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{selectedSimulation.name}</h3>
                    <p className="text-gray-500 text-sm">Ready to begin simulation</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button 
                    onClick={handleStartSimulation}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Play size={20} />
                    <span>Launch Simulation</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

// SimulationView Component
export function SimulationView({ simulation, onBackToSelector }) {
  const { user } = useAuthUser();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (!simulation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">No simulation selected</h2>
          <p className="text-gray-600 mb-6">Choose a module to start your training session.</p>
          <button
            onClick={onBackToSelector}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow"
          >
            Back to Selection
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className={`w-32 h-32 bg-gradient-to-br ${simulation.color} rounded-3xl flex items-center justify-center shadow-2xl mb-8 animate-pulse`}>
            <simulation.icon className="text-white" size={48} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Loading {simulation.name}</h2>
          <p className="text-gray-600 mb-8">Initializing Unity WebGL environment...</p>
          
          {/* Loading Progress */}
          <div className="w-96 bg-gray-200 rounded-full h-4 mb-4">
            <div 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-4 rounded-full transition-all duration-300" 
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <p className="text-gray-500 text-sm">{Math.round(loadingProgress)}% complete</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Simulation Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="flex items-center justify-between px-8 py-4">
          {/* Left Side */}
          <div className="flex items-center space-x-6">
            <button 
              onClick={onBackToSelector}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Exit Simulation</span>
            </button>
            <div className="h-6 w-px bg-gray-600"></div>
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 bg-gradient-to-br ${simulation.color} rounded-lg flex items-center justify-center`}>
                <simulation.icon className="text-white" size={16} />
              </div>
              <div>
                <div className="text-white text-lg font-bold">{simulation.name}</div>
                <div className="text-gray-400 text-sm">Interactive Training</div>
              </div>
            </div>
          </div>
          
          {/* Right Side */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-white text-sm font-medium">
                  {user?.displayName || user?.email || "Guest"}
                </div>
                <div className="text-gray-400 text-xs">Session Active</div>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="text-white" size={18} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Simulation Content */}
      <main className="pt-20 h-screen">
        <div className="h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <div className="text-center text-white">
            <div className={`w-48 h-48 bg-gradient-to-br ${simulation.color} rounded-3xl flex items-center justify-center shadow-2xl mb-8 mx-auto`}>
              <simulation.icon className="text-white" size={72} />
            </div>
            <h1 className="text-4xl font-bold mb-4">{simulation.name} Simulation</h1>
            <p className="text-xl text-gray-300 mb-8">Unity WebGL simulation would load here</p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold mb-4">Simulation Features:</h3>
              <div className="grid grid-cols-2 gap-4 text-left">
                {simulation.procedures.map((procedure, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="text-green-400" size={16} />
                    <span className="text-gray-300">{procedure}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
