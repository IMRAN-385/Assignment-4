let jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    role: "React Native Developer",
    location: "Remote • Full-time • $130,000 - $175,000",
    description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "all",
    appliedStatus: "NOT APPLIED"
  },
  {
    id: 2,
    company: "WebFlow Agency",
    role: "Web Designer & Developer",
    location: "Los Angeles, CA • Part-time • $80,000 - $120,000",
    description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status: "all",
    appliedStatus: "NOT APPLIED"
  },
  {
    id: 3,
    company: "DataViz Solutions",
    role: "Data Visualization Specialist",
    location: "Boston, MA • Full-time • $125,000 - $165,000",
    description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    status: "all",
    appliedStatus: "NOT APPLIED"
  },
  {
    id: 4,
    company: "CloudFirst Inc",
    role: "Backend Developer",
    location: "Seattle, WA • Full-time • $140,000 - $190,000",
    description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    status: "all",
    appliedStatus: "NOT APPLIED"
  },
  {
    id: 5,
    company: "Innovation Labs",
    role: "UI/UX Engineer",
    location: "Austin, TX • Full-time • $110,000 - $150,000",
    description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    status: "all",
    appliedStatus: "NOT APPLIED"
  },
  {
    id: 6,
    company: "MegaCorp Solutions",
    role: "JavaScript Developer",
    location: "New York, NY • Full-time • $130,000 - $170,00",
    description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    status: "all",
    appliedStatus: "NOT APPLIED"
  },
  {
    id: 7,
    company: "StartupXYZ",
    role: "Full Stack Engineer",
    location: "Remote • Full-time • $120,000 - $160,000",
    description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    status: "all",
    appliedStatus: "NOT APPLIED"
  },
  {
    id: 8,
    company: "TechCorp Industries",
    role: "Senior Frontend Developer",
    location: "San Francisco, CA • Full-time • $130,000 - $175,000",
    description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
    status: "all",
    appliedStatus: "NOT APPLIED"
  }
];
let currentFilter = "all";



const totalNumberEl = document.getElementById("totalnumber");
const interviewNumberEl = document.getElementById("interviewd");
const rejectedNumberEl = document.getElementById("rejected");
const jobTitleCountEl = document.querySelector(".nmber");
const allCardsSection = document.getElementById("allcards");
const allBtn = document.getElementById("allbtn");
const interviewBtn = document.getElementById("interviewbtn");
const rejectBtn = document.getElementById("rejectbtn");

function init() {
  renderJobs();
  updateCounts();
}

function updateCounts() {
  const backlogJobs = jobs.filter(j => j.status === "all");
  const interviewJobs = jobs.filter(j => j.status === "interview");
  const rejectedJobs = jobs.filter(j => j.status === "rejected");
  const totalEl = document.getElementById("totalnumber");
  const interviewEl = document.getElementById("interviewd");
  const rejectedEl = document.getElementById("rejected");
  const statusCountEl = document.querySelector(".nmber");

  if (totalEl) totalEl.innerText = backlogJobs.length;
  if (interviewEl) interviewEl.innerText = interviewJobs.length;
  if (rejectedEl) rejectedEl.innerText = rejectedJobs.length;

  if (statusCountEl) {
    let count = 0;
    if (currentFilter === "all") count = backlogJobs.length;
    else if (currentFilter === "interview") count = interviewJobs.length;
    else if (currentFilter === "rejected") count = rejectedJobs.length;
    statusCountEl.innerText = `${count} jobs`;
  }
}

function renderJobs() {
  allCardsSection.innerHTML = "";

  const filteredJobs = jobs.filter(job => {
    if (currentFilter === "all") return job.status === "all";
    return job.status === currentFilter;
  });

  if (filteredJobs.length === 0) {
    allCardsSection.innerHTML = `<div class="text-center py-20 text-gray-400">No jobs found in this category.</div>`;
    return;
  }

  filteredJobs.forEach(job => {
    const section = document.createElement("section");
    section.className = "mb-10";
    let statusClass = "btn-soft btn-primary";
    if (job.appliedStatus === "INTERVIEWING") statusClass = "btn-success text-white";
    if (job.appliedStatus === "REJECTED") statusClass = "btn-error text-white";
    section.innerHTML = `
      <div class="card-body max-w-6xl mx-auto border-[1px] border-[#b4aeaea5] rounded-lg shadow-lg">
        <div class="dev flex justify-between">
          <div>
            <h2 class="card-title text-sm pb-1">${job.company}</h2>
            <p class="job text-gray-400 text-xs">${job.role}</p>
          </div>
          <div>
            <button onclick="deleteJob(${job.id})" class="btn sm:btn-sm md:btn-md hover:btn-error">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
        <p class="jobs text-gray-400 text-xs py-2">${job.location}</p> 
        <div>
          <button class="btn sm:btn-sm md:btn-md ${statusClass} content text-xs font-bold uppercase">${job.appliedStatus}</button>
        </div>
        <div class="text text-[#323B49] text-sm py-2">
          ${job.description}
        </div>
        <div class="card-actions justify-start pt-2">
          <button onclick="updateStatus(${job.id}, 'interview')" class="btn intBtn sm:btn-sm md:btn-md text-green-500 border-green-300 hover:bg-green-50">INTERVIEW</button>
          <button onclick="updateStatus(${job.id}, 'rejected')" class="btn intBtn sm:btn-sm md:btn-md text-red-500 border-red-300 hover:bg-red-50">REJECTED</button>
        </div>
      </div>
    `;
    allCardsSection.appendChild(section);
  });
}

function toggleStyle(id) {
  if (id === "allbtn") currentFilter = "all";
  else if (id === "interviewbtn") currentFilter = "interview";
  else if (id === "rejectbtn") currentFilter = "rejected";

  [allBtn, interviewBtn, rejectBtn].forEach(btn => {
    btn.classList.remove("bg-black", "text-white");
    btn.classList.add("bg-gray-300", "text-gray-500");
  });

  const selected = document.getElementById(id);
  selected.classList.remove("bg-gray-300", "text-gray-500");
  selected.classList.add("bg-black", "text-white");

  renderJobs();
  updateCounts();
}

function updateStatus(id, newStatus) {
  const jobIndex = jobs.findIndex(j => j.id === id);
  if (jobIndex === -1) return;

  const job = jobs[jobIndex];

  if (job.status === newStatus) {
    showToast(
      "Already Updated",
      `${job.company} is already in the ${newStatus.toUpperCase()} list.`,
      "info"
    );
    return;
  }

  job.status = newStatus;
  job.appliedStatus = newStatus === "interview" ? "INTERVIEWING" : "REJECTED";


 

  renderJobs();
  updateCounts();
}


init();