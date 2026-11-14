import React, { useState } from 'react';
import { 
  Briefcase, 
  Building2, 
  Zap, 
  MapPin, 
  Clock, 
  ArrowRight, 
  FileText, 
  X, 
  CheckCircle2, 
  Send,
  TrendingUp,
} from 'lucide-react';

const jobsData = [
  {
    id: 1,
    title: "PLC Programmer - Rajkot",
    category: "production",
    department: "Production",
    location: "Rajkot, India",
    experience: "3-5 Years",
    type: "Full-time",
    overview: "Hands-on expertise with industrial PLC programming (Siemens, Delta, Schneider), ladder logic architecture, HMI screen designing, and automation integration on high-speed thermoforming and vacuum packaging machinery.",
    requirements: [
      "B.E. / Diploma in Electrical / Electronics / Instrumentation",
      "Proven experience with industrial machine automation",
      "Familiarity with servo drives, VFDs and industrial sensors",
    ],
  },
  {
    id: 2,
    title: "Jr. Electronics Engineer - Rajkot",
    category: "engineering",
    department: "Engineering",
    location: "Rajkot, India",
    experience: "1-3 Years",
    type: "Full-time",
    overview: "Responsible for electrical control panel wiring, electronic component testing, sensor calibration, and on-site troubleshooting for automated sealing and vacuum packaging systems.",
    requirements: [
      "Diploma / Degree in Electronics / Electrical Engineering",
      "Knowledge of electrical wiring schematics and control panels",
      "Keen analytical and troubleshooting mindset",
    ],
  },
  {
    id: 3,
    title: "Jr. Mechanical Engineer - Rajkot",
    category: "engineering",
    department: "Engineering",
    location: "Rajkot, India",
    experience: "1-3 Years",
    type: "Full-time",
    overview: "Assisting in CAD design, tooling fabrication, precision component assembly, pneumatic setup, and mechanical testing of high-capacity packaging lines.",
    requirements: [
      "B.Tech / Diploma in Mechanical Engineering",
      "Proficiency in 2D/3D CAD software (SolidWorks / AutoCAD)",
      "Strong understanding of pneumatics, hydraulics, and tooling",
    ],
  },
  {
    id: 4,
    title: "Sales Assistant - Rajkot & On Field",
    category: "sales",
    department: "Sales",
    location: "Rajkot, India",
    experience: "5-7 Years",
    type: "Full-time",
    overview: "Driving B2B sales of packaging equipment across food, dairy, and pharma sectors. Conducting client site visits, understanding technical packaging requirements, and closing machine orders.",
    requirements: [
      "Any Graduate / MBA with proven industrial B2B sales experience",
      "Excellent communication and negotiation skills",
      "Willingness for regional travel and client visits",
    ],
  },
];

export default function CurrentOpenings() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedJob, setSelectedJob] = useState(null);
  const [applyingJob, setApplyingJob] = useState(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);
  const [applicantForm, setApplicantForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: '',
  });

  const filteredJobs = activeFilter === 'all'
    ? jobsData
    : jobsData.filter((job) => job.category === activeFilter);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setAppliedSuccess(true);
    setTimeout(() => {
      setAppliedSuccess(false);
      setApplyingJob(null);
      setApplicantForm({
        name: '',
        email: '',
        phone: '',
        experience: '',
        message: '',
      });
    }, 2500);
  };

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] rounded-xl flex items-center justify-center shadow-md">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Current Openings
            </h2>
          </div>
          {/* <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Explore rewarding career paths and shape next-generation packaging engineering with ICON.
          </p> */}
        </div>

        {/* ================= FILTER TABS ================= */}
        <div className="flex overflow-x-auto py-2 px-1 justify-start md:justify-center gap-3 mb-10 no-scrollbar scrollbar-hide">
          <button
            onClick={() => setActiveFilter('all')}
            className={`inline-flex flex-shrink-0 items-center gap-2.5 px-6 py-3 rounded-full text-[16px] font-semibold transition-all duration-300 shadow-sm cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] text-white shadow-md scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>All Positions ({jobsData.length})</span>
          </button>

          <button
            onClick={() => setActiveFilter('engineering')}
            className={`inline-flex flex-shrink-0 items-center gap-2.5 px-6 py-3 rounded-full text-[16px] font-semibold transition-all duration-300 shadow-sm cursor-pointer ${
              activeFilter === 'engineering'
                ? 'bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] text-white shadow-md scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Engineering (2)</span>
          </button>

          <button
            onClick={() => setActiveFilter('production')}
            className={`inline-flex flex-shrink-0 items-center gap-2.5 px-6 py-3 rounded-full text-[16px] font-semibold transition-all duration-300 shadow-sm cursor-pointer ${
              activeFilter === 'production'
                ? 'bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] text-white shadow-md scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>Production (1)</span>
          </button>

          {/* <button
            onClick={() => setActiveFilter('sales')}
            className={`inline-flex flex-shrink-0 items-center gap-2.5 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm cursor-pointer ${
              activeFilter === 'sales'
                ? 'bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] text-white shadow-md scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Sales (1)</span>
          </button> */}
        </div>

        {/* ================= JOB CARDS LIST ================= */}
        <div className="grid gap-5">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-200/90 rounded-xl p-5 sm:p-4 hover:shadow-xl transition-all duration-300 hover:border-red-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Left Job Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3.5 mb-2.5">
                    <div className="w-11 h-11  bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)]  text-white rounded-xl flex items-center justify-center border border-red-100 group-hover:scale-110  transition-all duration-300 shadow-sm">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div className="flex items-start  flex-col">
                      <h3 className="text-lg sm:text-xl font-[600] text-gray-900  transition-colors">
                        {job.title}
                      </h3>
                      <span className=" text-red-600   py-0.5 rounded-full text-xs font-semibold">
                        {job.type}
                      </span>
                    </div>
                  </div>

                  {/* Badges / Meta row */}
                  <div className="flex text-xs sm:text-[13px] flex-wrap items-center gap-4 text-gray-600 mt-1">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Building2 className="w-4 h-4 text-red-500" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Right Action Buttons */}
                <div className="flex items-center gap-3 pt-2 md:pt-0">
                  <button
                    onClick={() => setApplyingJob(job)}
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-red-700 transition-colors shadow-sm hover:shadow cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
                    className="inline-flex items-center gap-1.5 border border-gray-300 text-gray-700 text-sm px-4 py-2.5 rounded-md font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-gray-500" />
                    <span>{selectedJob?.id === job.id ? "Hide Details" : "Details"}</span>
                  </button>
                </div>
              </div>

              {/* Collapsible Details Drawer */}
              {selectedJob?.id === job.id && (
                <div className="mt-5 pt-4 border-t border-gray-100 text-sm text-gray-700 animate-in fade-in duration-200">
                  <p className="mb-3 leading-relaxed text-gray-600">{job.overview}</p>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Highlights &amp; Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* ================= APPLY MODAL ================= */}
      {applyingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100">
            <button
              onClick={() => {
                setApplyingJob(null);
                setAppliedSuccess(false);
              }}
              className="absolute top-5 right-5 p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {appliedSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-red-50 text-red-600 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                <p className="text-sm text-gray-600">
                  Thank you for applying for <strong>{applyingJob.title}</strong>. Our HR team will review your profile and contact you soon.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-5">
                  <span className="text-xs uppercase font-bold tracking-wider text-red-600">Apply for Position</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">{applyingJob.title}</h3>
                  <p className="text-xs text-gray-500">{applyingJob.department} • {applyingJob.location}</p>
                </div>

                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={applicantForm.name}
                      onChange={(e) => setApplicantForm({ ...applicantForm, name: e.target.value })}
                      className="w-full h-10 px-3.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={applicantForm.email}
                        onChange={(e) => setApplicantForm({ ...applicantForm, email: e.target.value })}
                        className="w-full h-10 px-3.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit Mobile"
                        value={applicantForm.phone}
                        onChange={(e) => setApplicantForm({ ...applicantForm, phone: e.target.value })}
                        className="w-full h-10 px-3.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Total Experience (Years)</label>
                    <input
                      type="text"
                      placeholder="e.g. 3 Years"
                      value={applicantForm.experience}
                      onChange={(e) => setApplicantForm({ ...applicantForm, experience: e.target.value })}
                      className="w-full h-10 px-3.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Cover Note / Key Skills</label>
                    <textarea
                      rows={3}
                      placeholder="Brief note about your background and technical skills..."
                      value={applicantForm.message}
                      onChange={(e) => setApplicantForm({ ...applicantForm, message: e.target.value })}
                      className="w-full p-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg text-sm flex items-center justify-center gap-2 transition-colors shadow-md mt-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Application</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

