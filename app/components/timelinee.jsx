import { useState } from 'react';
import { Scale, Gamepad2, Briefcase, Gavel, Building2, Shield, AlertCircle, Globe, Home, Blocks, FileText, TrendingUp } from 'lucide-react';

export default function Timelinee() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      icon: Scale,
      title: "Intellectual Property Laws",
      description: "Protect and commercialize your ideas with our end-to-end IP solutions. From registration to enforcement, we secure your innovation globally.",
      color: "from-violet-500 to-purple-600"
    },
    {
      id: 2,
      icon: Gamepad2,
      title: "Gaming Laws",
      description: "We guide fantasy, esports, and real-money gaming platforms through licensing and compliance. Our legal support ensures fair play and regulatory integrity.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      icon: Briefcase,
      title: "Corporate & Commercial Laws",
      description: "From incorporation to exits, we support your business journey with strategic legal advice. Our focus—clarity, compliance, and commercial agility.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: 4,
      icon: Gavel,
      title: "Litigation & Dispute Resolution",
      description: "We represent clients before all major courts and tribunals with strategic precision. Our litigation team ensures clarity, speed, and effective resolution.",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      icon: Building2,
      title: "Banking & Financial Laws",
      description: "Advising banks, NBFCs, and fintechs on regulation, enforcement, and restructuring. We turn complex financial compliance into seamless execution.",
      color: "from-indigo-500 to-blue-600"
    },
    {
      id: 6,
      icon: Shield,
      title: "Information Technology & Data Privacy",
      description: "Stay compliant with India's evolving IT and data protection landscape. We secure your digital operations through robust policies and risk frameworks.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 7,
      icon: AlertCircle,
      title: "White Collar Crimes",
      description: "We defend corporates and promoters in high-stakes financial investigations. Our team ensures strategic handling of fraud, PMLA, and regulatory actions.",
      color: "from-rose-500 to-pink-600"
    },
    {
      id: 8,
      icon: Globe,
      title: "International Arbitration & ADR",
      description: "Resolve cross-border disputes with confidence. We manage arbitrations globally, from strategy and venue selection to enforcement and settlement.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 9,
      icon: Home,
      title: "Real Estate Laws",
      description: "Your trusted partner in property due diligence, documentation, and RERA advisory. We safeguard investments for individuals and developers alike.",
      color: "from-amber-500 to-orange-600"
    },
    {
      id: 10,
      icon: Blocks,
      title: "Blockchain & Digital Assets",
      description: "We empower Web3 ventures and crypto innovators with legal clarity. Our advisory bridges technology, regulation, and token-based innovation.",
      color: "from-fuchsia-500 to-purple-600"
    },
    {
      id: 11,
      icon: FileText,
      title: "Policy & Government Advisory",
      description: "Collaborating with industry and regulators, we shape policy impact and compliance. From white papers to ESG frameworks, we guide institutional influence.",
      color: "from-slate-500 to-gray-600"
    },
    {
      id: 12,
      icon: TrendingUp,
      title: "Venture Capital & Private Equity Advisory",
      description: "We structure deals that drive growth and investor confidence. From term sheets to exits, our legal support fuels sustainable capital journeys.",
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-zinc-800 mb-4">Our Practice Areas</h1>
          <p className="text-zinc-700 text-lg">Comprehensive legal solutions tailored to your needs</p>
        </div>

        {/* Interactive Timeline Layout */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-cyan-500 to-emerald-500 hidden lg:block"></div>

          {/* Services List */}
          <div className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService === index;
              
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveService(index)}
                  className="relative group cursor-pointer"
                >
                  {/* Desktop Layout */}
                  <div className="hidden lg:flex items-start gap-8">
                    {/* Icon Node */}
                    <div className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg transition-all duration-300 ${isActive ? 'scale-125 shadow-2xl' : 'scale-100'}`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className={`flex-1 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${isActive ? 'border-white/20 bg-slate-800/80 scale-[1.02]' : 'border-slate-700/50'}`}>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`text-sm font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                              {String(service.id).padStart(2, '0')}
                            </span>
                            <h3 className="text-xl font-bold text-white">{service.title}</h3>
                          </div>
                          <p className={`text-slate-400 leading-relaxed transition-all duration-300 ${isActive ? 'text-slate-300' : ''}`}>
                            {service.description}
                          </p>
                        </div>
                        <div className={`transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden">
                    <div className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${isActive ? 'border-white/20 bg-slate-800/80' : 'border-slate-700/50'}`}>
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <span className={`text-xs font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                            {String(service.id).padStart(2, '0')}
                          </span>
                          <h3 className="text-lg font-bold text-white mt-1">{service.title}</h3>
                        </div>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}