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
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    qualification: '',
    city: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicantForm((prev) => ({ ...prev, [name]: value }));
  };

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
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        qualification: '',
        city: '',
        address: '',
      });
    }, 2500);
  };

  return (
    <section className="py-12 md:py-8 px-4">
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
            className={`inline-flex flex-shrink-0 items-center gap-2.5 px-6 py-3 rounded-full text-[16px] font-semibold transition-all duration-300  cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] text-white shadow-md scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            <span>All Positions ({jobsData.length})</span>
          </button>

          <button
            onClick={() => setActiveFilter('engineering')}
            className={`inline-flex flex-shrink-0 items-center gap-2.5 px-6 py-3 rounded-full text-[16px] font-semibold transition-all duration-300  cursor-pointer ${
              activeFilter === 'engineering'
                ? 'bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] text-white shadow-md scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
            }`}
          >
            <Building2 className="w-5 h-5" />
            <span>Engineering (2)</span>
          </button>

          <button
            onClick={() => setActiveFilter('production')}
            className={`inline-flex flex-shrink-0 items-center gap-2.5 px-6 py-3 rounded-full text-[16px] font-semibold transition-all duration-300  cursor-pointer ${
              activeFilter === 'production'
                ? 'bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] text-white shadow-md scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
            }`}
          >
            <Zap className="w-5 h-5" />
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
                  <div className="flex items-center gap-3.5 mb-1.5">
                    <div className="w-11 h-11  bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)]  text-white rounded-xl flex items-center justify-center border border-red-100 group-hover:scale-110  transition-all duration-300 shadow-sm">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div className="flex items-start  flex-col">
                      <h3 className="text-lg sm:text-xl font-[600] text-gray-900  transition-colors">
                        {job.title}
                      </h3>
                      <span className=" text-icon   py-1 px-1 rounded-full text-sm font-medium ">
                        {job.type}
                      </span>
                    </div>
                  </div>

                  {/* Badges / Meta row */}
                  <div className="flex text-xs sm:text-[13px] flex-wrap items-center gap-4 text-gray-600 ">
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
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40 bg-opacity-50 p-4">
          <div className="relative w-full max-w-2xl rounded-lg bg-white shadow-lg max-h-[95vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-800">
                APPLY FOR : {applyingJob?.title ? applyingJob.title.toUpperCase() : "SALES ASSISTANT - RAJKOT & ON FIELD"}
              </h2>
              <button
                type="button"
                onClick={() => {
                  setApplyingJob(null);
                  setAppliedSuccess(false);
                }}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {appliedSuccess ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-red-50 text-red-600 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                <p className="text-sm text-gray-600">
                  Thank you for applying for <strong>{applyingJob.title}</strong>. Our HR team will review your profile and contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit}>
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="sr-only">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="First Name"
                        value={applicantForm.firstName}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="sr-only">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Last Name"
                        value={applicantForm.lastName}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Email"
                        value={applicantForm.email}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="sr-only">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="Phone"
                        value={applicantForm.phone}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="qualification" className="sr-only">Qualification</label>
                      <input
                        type="text"
                        id="qualification"
                        name="qualification"
                        required
                        placeholder="Qualification"
                        value={applicantForm.qualification}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="sr-only">City</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        placeholder="City"
                        value={applicantForm.city}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="sr-only">Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        placeholder="Address"
                        value={applicantForm.address}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="cvUpload" className="block text-sm font-medium text-gray-700 mb-2">
                        Upload CV
                      </label>
                      <input
                        type="file"
                        id="cvUpload"
                        required
                        className="block w-full text-sm text-gray-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-md file:border-0
                          file:text-sm file:font-semibold
                          file:bg-gray-200 file:text-gray-700
                          hover:file:bg-gray-300 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-4 border-t border-gray-200 p-6">
                  <button
                    type="submit"
                    className="rounded-md bg-red-600/90 px-6 py-3 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 cursor-pointer "
                  >
                    APPLY
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setApplyingJob(null);
                      setAppliedSuccess(false);
                    }}
                    className="rounded-md border border-gray-300 bg-gray-200 px-6 py-3 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 cursor-pointer "
                  >
                    CLOSE
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

