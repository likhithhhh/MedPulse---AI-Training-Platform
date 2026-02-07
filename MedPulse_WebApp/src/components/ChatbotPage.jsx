import { ArrowLeft, Bot, Sparkles, MessageCircle } from "lucide-react";
import useAuthUser from "../hooks/useAuthUser";

export default function ChatbotPage({ onBackToDashboard }) {
  const { user } = useAuthUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm z-50">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center space-x-6">
            <button
              onClick={onBackToDashboard}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Analytics</span>
            </button>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <Bot className="text-white" size={20} />
              </div>
              <div>
                <div className="text-gray-900 text-xl font-bold">Medical Simulation</div>
                <div className="text-gray-500 text-sm">AI Study Assistant</div>
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-sm text-gray-500">Signed in as</div>
            <div className="font-semibold text-gray-900">
              {user?.displayName || user?.email || "User"}
            </div>
          </div>
        </div>
      </header>

      <main className="pt-36 px-8 pb-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/80 border border-gray-200 rounded-3xl p-10 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                <Sparkles className="text-purple-600" size={22} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">AI Clinical Coaching</h1>
                <p className="text-gray-600">Ask questions, review concepts, and get case-based guidance.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5">
                <MessageCircle className="text-purple-600 mb-3" size={20} />
                <h3 className="font-semibold text-gray-900 mb-1">Case Q&A</h3>
                <p className="text-sm text-gray-600">Summaries, differential diagnosis, and next-step questions.</p>
              </div>
              <div className="bg-pink-50 border border-pink-100 rounded-2xl p-5">
                <MessageCircle className="text-pink-600 mb-3" size={20} />
                <h3 className="font-semibold text-gray-900 mb-1">Procedure Prep</h3>
                <p className="text-sm text-gray-600">Step-by-step prompts and checklists before simulations.</p>
              </div>
              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
                <MessageCircle className="text-indigo-600 mb-3" size={20} />
                <h3 className="font-semibold text-gray-900 mb-1">Skill Feedback</h3>
                <p className="text-sm text-gray-600">Reflective feedback on performance trends and gaps.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-slate-50 border border-gray-200 rounded-2xl p-6">
              <div className="text-sm text-gray-500 mb-4">Assistant Workspace</div>
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">
                <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-pink-50 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-600/10 flex items-center justify-center">
                      <Sparkles className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">MedMentor Chat</h3>
                      <p className="text-sm text-gray-500">Your AI surgical coach for case discussions.</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-purple-500"></span>
                      Ask procedure questions, differential diagnosis, and follow-ups.
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-pink-500"></span>
                      Upload reports or case notes for tailored guidance.
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500"></span>
                      Get step-by-step coaching before simulations.
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href="https://medpulse-aibot-frontend.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg transition"
                    >
                      Open MedMentor Chat
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="relative h-full overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-600 opacity-80"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_60%)]"></div>
                    <div className="relative h-full p-5 text-white">
                      <div className="text-xs uppercase tracking-widest text-white/80">Live AI</div>
                      <div className="mt-2 text-2xl font-semibold">Clinical Guidance</div>
                      <p className="mt-3 text-sm text-white/80">
                        Connect to MedMentor for surgical case support, checklists, and learning pathways.
                      </p>
                      <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                        <div className="rounded-lg bg-white/15 p-3">
                          <div className="font-semibold">Case Q&A</div>
                          <div className="text-white/70">Diagnostics</div>
                        </div>
                        <div className="rounded-lg bg-white/15 p-3">
                          <div className="font-semibold">Prep</div>
                          <div className="text-white/70">Checklists</div>
                        </div>
                        <div className="rounded-lg bg-white/15 p-3">
                          <div className="font-semibold">Feedback</div>
                          <div className="text-white/70">Trends</div>
                        </div>
                        <div className="rounded-lg bg-white/15 p-3">
                          <div className="font-semibold">Uploads</div>
                          <div className="text-white/70">Docs & Images</div>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                          <Bot size={18} />
                        </div>
                        <div className="text-sm">
                          <div className="font-semibold">MedMentor AI</div>
                          <div className="text-white/70">Ready to assist</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
