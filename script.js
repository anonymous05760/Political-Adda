// RPSC Political Science Hub - Client-Side LMS Application Logic

const STORAGE_COURSES_KEY = "rpsc_pol_hub_courses_v1";
const STORAGE_EARNINGS_KEY = "rpsc_pol_hub_earnings_v1";

// Seed Batches: RPSC 1st Grade, Assistant Professor, RAS Mains, and Free Starter
const defaultCourses = [
    {
        id: 1,
        title: "Sankalp RPSC 1st Grade School Lecturer Polity Batch",
        category: "1st-grade",
        badge: "BESTSELLER",
        badgeBg: "bg-amber-400 text-indigo-950",
        faculty: "Dr. Arvind Singh Rathore (NET-JRF)",
        validity: "12 Months Validity",
        syllabus: "Political Theory, Western & Indian Thinkers, Indian Constitution, IR & Rajasthan Polity",
        price: 1499,
        originalPrice: 3999,
        enrolled: false,
        bannerStyle: "from-indigo-950 to-indigo-800",
        lectures: [
            {
                id: 101,
                title: "Plato & Aristotle: Theory of Justice and Ideal State",
                duration: "52:10",
                youtubeId: "fLJBzhcSWTk",
                completed: false,
                notes: "<strong>1. Plato (428–348 BC):</strong><br>• Key Works: <em>The Republic, The Statesman, The Laws</em>.<br>• Justice as functional harmony: each class (Rulers, Auxiliaries, Producers) performs its own station's duty.<br><br><strong>2. Aristotle (384–322 BC):</strong><br>• Key Work: <em>Politics</em>; empirical comparative study of constitutions.<br>• Root cause of revolution: inequality and sense of unfairness.",
                dpp: [
                    { q: "Who described Plato as an enemy of the Open Society?", options: ["Aristotle", "Karl Popper", "George Sabine", "Hannah Arendt"], ans: 1, exp: "Karl Popper wrote 'The Open Society and Its Enemies' (1945)." },
                    { q: "According to Aristotle, the primary general cause of revolution is:", options: ["Foreign war", "Inequality", "Religious debate", "Trade deficit"], ans: 1, exp: "Aristotle identifies inequality as the foundational cause of political revolution in 'Politics'." },
                    { q: "Which work of Plato presents the rule of law in a practical second-best state?", options: ["The Republic", "The Laws", "Gorgias", "Phaedo"], ans: 1, exp: "In 'The Laws', Plato emphasizes constitutional laws as essential in practical politics." },
                    { q: "Aristotle termed constitutional rule by the many in public interest as:", options: ["Aristocracy", "Polity", "Oligarchy", "Tyranny"], ans: 1, exp: "Polity is the normal constitutional form of rule by the many." },
                    { q: "Who stated that 'Man is by nature a political animal'?", options: ["Socrates", "Plato", "Aristotle", "Machiavelli"], ans: 2, exp: "Aristotle made this classic statement in 'Politics'." }
                ]
            },
            {
                id: 102,
                title: "Fundamental Rights (Articles 12–35) & Judicial Review",
                duration: "48:45",
                youtubeId: "84478N8531Y",
                completed: false,
                notes: "<strong>Part III of the Constitution of India:</strong><br>• <strong>Article 13:</strong> Laws inconsistent with Fundamental Rights are void.<br>• <strong>Article 14:</strong> Equality before Law and Equal Protection of Laws.<br>• <strong>Article 21:</strong> Protection of Life and Personal Liberty.<br>• <strong>Article 32:</strong> Constitutional Remedies via five writs (Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto).",
                dpp: [
                    { q: "Which Article empowers the Supreme Court to issue writs for enforcing Fundamental Rights?", options: ["Article 32", "Article 131", "Article 226", "Article 143"], ans: 0, exp: "Article 32 grants writ jurisdiction to the Supreme Court; High Courts derive writ power from Article 226." },
                    { q: "The 'Basic Structure Doctrine' was established in which landmark case?", options: ["Golaknath Case", "Kesavananda Bharati Case", "Minerva Mills Case", "A.K. Gopalan Case"], ans: 1, exp: "The 13-judge bench in Kesavananda Bharati v. State of Kerala (1973) established the Basic Structure Doctrine." },
                    { q: "Which writ means 'By what authority'?", options: ["Mandamus", "Certiorari", "Quo-Warranto", "Prohibition"], ans: 2, exp: "Quo-Warranto challenges the legality of a person's claim to a public office." },
                    { q: "Right to Property was shifted from Part III to Article 300A by:", options: ["42nd Amendment", "44th Amendment", "52nd Amendment", "73rd Amendment"], ans: 1, exp: "The 44th Constitutional Amendment Act, 1978 made Right to Property a legal right." },
                    { q: "Which set of Fundamental Rights is restricted to citizens of India only?", options: ["Articles 14, 20, 21", "Articles 15, 16, 19, 29, 30", "Articles 23, 24, 25", "Articles 21A, 22, 27"], ans: 1, exp: "Articles 15, 16, 19, 29, and 30 apply exclusively to Indian citizens." }
                ]
            }
        ],
        doubts: [
            { user: "Vikram Rathore (Jaipur)", text: "Are both Classical Realism and Neo-Realism covered in RPSC 1st Grade Paper-II?", reply: "Yes Vikram, both Hans Morgenthau's Classical Realism and Kenneth Waltz's Neo-Realism are important for RPSC." }
        ]
    },
    {
        id: 2,
        title: "Acharya RPSC Assistant Professor Target Batch",
        category: "asst-prof",
        badge: "ASSISTANT PROF",
        badgeBg: "bg-indigo-600 text-white",
        faculty: "Prof. Meenakshi Sharma (PhD)",
        validity: "18 Months Validity",
        syllabus: "Political Theory, Comparative Politics, Indian Government & Rajasthan Governance",
        price: 2499,
        originalPrice: 5499,
        enrolled: false,
        bannerStyle: "from-slate-900 to-indigo-950",
        lectures: [
            {
                id: 201,
                title: "Post-Behavioralism & David Easton's Credo of Relevance",
                duration: "54:20",
                youtubeId: "fLJBzhcSWTk",
                completed: false,
                notes: "<strong>Behavioralism to Post-Behavioralism:</strong><br>• David Easton's eight intellectual foundation stones of Behavioralism.<br>• 1969 APSA Presidential Address introducing Post-Behavioralism: Substance over technique and social relevance.",
                dpp: [
                    { q: "In which year did David Easton outline Post-Behavioralism?", options: ["1953", "1962", "1969", "1975"], ans: 2, exp: "David Easton introduced Post-Behavioralism in his 1969 APSA Presidential Address." }
                ]
            }
        ],
        doubts: []
    },
    {
        id: 3,
        title: "RAS Mains GS & Political Science Crash Batch",
        category: "ras-mains",
        badge: "RAS MAINS",
        badgeBg: "bg-emerald-600 text-white",
        faculty: "Dr. Arvind Singh Rathore",
        validity: "12 Months Validity",
        syllabus: "Indian Political System, International Relations, Current Affairs & Rajasthan Polity",
        price: 999,
        originalPrice: 2499,
        enrolled: false,
        bannerStyle: "from-indigo-900 to-slate-900",
        lectures: [
            {
                id: 301,
                title: "Indian Federalism: Union-State Relations & Commissions",
                duration: "45:15",
                youtubeId: "84478N8531Y",
                completed: false,
                notes: "<strong>Union-State Relations (Part XI & XII):</strong><br>• Legislative, Administrative, and Financial relations.<br>• Sarkaria Commission (1983) and Punchhi Commission (2007) key recommendations.",
                dpp: [
                    { q: "Which Article provides for an Inter-State Council?", options: ["Article 262", "Article 263", "Article 280", "Article 312"], ans: 1, exp: "Article 263 empowers the President to establish an Inter-State Council." }
                ]
            }
        ],
        doubts: []
    },
    {
        id: 4,
        title: "Free Political Theory & Constitution Starter Batch",
        category: "free",
        badge: "FREE STARTER",
        badgeBg: "bg-emerald-500 text-white",
        faculty: "RPSC Political Science Hub Faculty",
        validity: "Lifetime Free Access",
        syllabus: "Starter lectures on Plato & Aristotle, Fundamental Rights, and Rajasthan Polity",
        price: 0,
        originalPrice: 1499,
        enrolled: true,
        bannerStyle: "from-emerald-800 to-indigo-950",
        lectures: [
            {
                id: 401,
                title: "Plato & Aristotle: Core Concepts for RPSC",
                duration: "52:10",
                youtubeId: "fLJBzhcSWTk",
                completed: false,
                notes: "<strong>Starter Notes — Plato & Aristotle:</strong><br>• Plato: Theory of Justice, Philosopher King, <em>The Republic</em>.<br>• Aristotle: Father of Political Science, <em>Politics</em>, Theory of Revolution.",
                dpp: [
                    { q: "Who is recognized as the Father of Political Science?", options: ["Plato", "Aristotle", "Hobbes", "Locke"], ans: 1, exp: "Aristotle is widely recognized as the Father of Political Science." },
                    { q: "Which book was written by Plato?", options: ["Politics", "The Prince", "The Republic", "Leviathan"], ans: 2, exp: "Plato authored 'The Republic'." },
                    { q: "According to Aristotle, the root cause of revolution is:", options: ["Inequality", "Geography", "Language", "Taxation"], ans: 0, exp: "Aristotle linked revolution primarily to inequality." },
                    { q: "Which thinker wrote 'The Open Society and Its Enemies'?", options: ["Karl Popper", "John Rawls", "Robert Dahl", "Isaiah Berlin"], ans: 0, exp: "Karl Popper wrote 'The Open Society and Its Enemies'." },
                    { q: "Aristotle's 'Polity' represents rule by:", options: ["One", "Few", "Many in common interest", "Monarch"], ans: 2, exp: "Polity is constitutional rule by the many in the public interest." }
                ]
            },
            {
                id: 402,
                title: "Fundamental Rights & Constitutional Remedies",
                duration: "48:45",
                youtubeId: "84478N8531Y",
                completed: false,
                notes: "<strong>Starter Notes — Fundamental Rights:</strong><br>• Part III (Articles 12–35).<br>• Article 32 empowers the Supreme Court to issue five types of writs.",
                dpp: [
                    { q: "Which Article did Dr. B.R. Ambedkar call the 'heart and soul' of the Constitution?", options: ["Article 14", "Article 19", "Article 21", "Article 32"], ans: 3, exp: "Dr. B.R. Ambedkar referred to Article 32 as the heart and soul of the Constitution." }
                ]
            }
        ],
        doubts: [
            { user: "Ananya Sharma (Udaipur)", text: "Can I download the starter notes directly from the classroom?", reply: "Yes Ananya, click 'Download Notes (.TXT)' inside the Study Notes tab." }
        ]
    }
];

// Mock Test Question Bank
const mockTestBank = {
    thinkers: {
        title: "Western & Indian Thinkers Mock Test",
        questions: [
            { q: "Who authored 'Leviathan' (1651)?", options: ["Thomas Hobbes", "John Locke", "J.J. Rousseau", "Edmund Burke"], ans: 0, exp: "Thomas Hobbes published 'Leviathan' in 1651." },
            { q: "Who propounded the concept of 'General Will'?", options: ["Hobbes", "Locke", "Rousseau", "Mill"], ans: 2, exp: "Jean-Jacques Rousseau introduced the General Will in 'The Social Contract' (1762)." },
            { q: "John Locke's natural rights include Life, Liberty, and:", options: ["Equality", "Property", "Fraternity", "Justice"], ans: 1, exp: "Locke emphasized Life, Liberty, and Property." },
            { q: "Who wrote 'On Liberty' (1859)?", options: ["Jeremy Bentham", "J.S. Mill", "T.H. Green", "Karl Marx"], ans: 1, exp: "J.S. Mill published 'On Liberty' in 1859." },
            { q: "John Rawls' 'A Theory of Justice' (1971) uses the:", options: ["Veil of Ignorance", "General Will", "Social Contract", "Dialectical Triad"], ans: 0, exp: "Rawls uses the 'Veil of Ignorance' behind the Original Position." },
            { q: "Who wrote 'The Prince'?", options: ["Machiavelli", "Bodin", "Grotius", "Spinoza"], ans: 0, exp: "Niccolò Machiavelli wrote 'The Prince'." },
            { q: "Kautilya's 'Arthashastra' elaborates the:", options: ["Saptanga Theory", "Social Contract Theory", "Pluralist Theory", "Elite Theory"], ans: 0, exp: "Kautilya formulated the seven-limbed Saptanga theory of the state." },
            { q: "Antonio Gramsci is associated with the concept of:", options: ["Cultural Hegemony", "Laissez-Faire", "Pareto Optimality", "Constitutionalism"], ans: 0, exp: "Gramsci developed the concept of Cultural Hegemony." },
            { q: "Who authored 'Annihilation of Caste'?", options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "M.N. Roy", "J.P. Narayan"], ans: 1, exp: "Dr. B.R. Ambedkar wrote 'Annihilation of Caste' (1936)." },
            { q: "Jeremy Bentham is a leading exponent of:", options: ["Utilitarianism", "Syndicalism", "Guild Socialism", "Anarchism"], ans: 0, exp: "Jeremy Bentham is a central figure of classical Utilitarianism." }
        ]
    },
    constitution: {
        title: "Constitution & Governance Mock Test",
        questions: [
            { q: "Which Schedule of the Indian Constitution deals with Anti-Defection?", options: ["8th Schedule", "9th Schedule", "10th Schedule", "11th Schedule"], ans: 2, exp: "The 10th Schedule was added by the 52nd Amendment Act, 1985." },
            { q: "The Concurrent List in the Indian Constitution was borrowed from:", options: ["USA", "Canada", "Australia", "Ireland"], ans: 2, exp: "The Concurrent List was borrowed from the Australian Constitution." },
            { q: "Which Article abolishes Untouchability?", options: ["Article 15", "Article 16", "Article 17", "Article 18"], ans: 2, exp: "Article 17 abolishes untouchability." },
            { q: "Who presides over a Joint Sitting of Parliament?", options: ["President", "Vice-President", "Speaker of Lok Sabha", "Rajya Sabha Deputy Chairman"], ans: 2, exp: "The Speaker of the Lok Sabha presides over a joint sitting under Article 118." },
            { q: "Directive Principles of State Policy are in which Part?", options: ["Part III", "Part IV", "Part IVA", "Part V"], ans: 1, exp: "DPSP are in Part IV (Articles 36–51)." },
            { q: "Which Amendment reduced the voting age from 21 to 18 years?", options: ["42nd Amendment", "44th Amendment", "61st Amendment", "73rd Amendment"], ans: 2, exp: "The 61st Constitutional Amendment Act, 1988 lowered the voting age to 18." },
            { q: "A Money Bill can be introduced only in:", options: ["Lok Sabha", "Rajya Sabha", "Joint Sitting", "Either House"], ans: 0, exp: "A Money Bill is introduced only in the Lok Sabha." },
            { q: "Under which Article is the Finance Commission constituted?", options: ["Article 263", "Article 280", "Article 315", "Article 324"], ans: 1, exp: "Article 280 provides for the Finance Commission." },
            { q: "Which Amendment gave constitutional status to Panchayati Raj?", options: ["71st Amendment", "72nd Amendment", "73rd Amendment", "74th Amendment"], ans: 2, exp: "The 73rd Amendment Act, 1992 granted constitutional status to Panchayati Raj." },
            { q: "Who is the ex-officio Chairman of the Rajya Sabha?", options: ["President", "Vice-President", "Prime Minister", "Speaker"], ans: 1, exp: "The Vice-President is ex-officio Chairman of the Rajya Sabha under Article 64." }
        ]
    },
    rajasthan: {
        title: "Rajasthan Politics & RPSC Mock Test",
        questions: [
            { q: "Where is the headquarters of RPSC located?", options: ["Jaipur", "Ajmer", "Jodhpur", "Udaipur"], ans: 1, exp: "RPSC headquarters is located in Ajmer." },
            { q: "What is the total strength of the Rajasthan Legislative Assembly?", options: ["180", "200", "220", "240"], ans: 1, exp: "Rajasthan Vidhan Sabha has 200 members." },
            { q: "Who was the first Governor of Rajasthan?", options: ["Gurmukh Nihal Singh", "Sampurnanand", "Hukam Singh", "Sawai Man Singh"], ans: 0, exp: "Sardar Gurmukh Nihal Singh was the first Governor of Rajasthan." },
            { q: "Panchayati Raj was first inaugurated in India on October 2, 1959 at:", options: ["Ajmer", "Nagaur", "Jaipur", "Kota"], ans: 1, exp: "Panchayati Raj was inaugurated at Nagaur in Rajasthan on October 2, 1959." },
            { q: "Under which Article is the State Advocate General appointed?", options: ["Article 76", "Article 165", "Article 148", "Article 217"], ans: 1, exp: "Article 165 deals with the Advocate General for the State." },
            { q: "Who appoints the Chairman and members of RPSC?", options: ["President", "Governor of Rajasthan", "Chief Minister", "Chief Justice"], ans: 1, exp: "Under Article 316, the Governor appoints the Chairman and members of the State PSC." },
            { q: "Who was the longest-serving Chief Minister of Rajasthan?", options: ["Mohanlal Sukhadia", "Hari Dev Joshi", "Bhairon Singh Shekhawat", "Ashok Gehlot"], ans: 0, exp: "Mohanlal Sukhadia served as Chief Minister of Rajasthan for 17 years." },
            { q: "Under which Article can a State Governor promulgate an Ordinance?", options: ["Article 123", "Article 213", "Article 161", "Article 356"], ans: 1, exp: "Article 213 provides Ordinance-making power to the Governor." },
            { q: "What is the minimum age to be appointed Governor of a State?", options: ["25 Years", "30 Years", "35 Years", "40 Years"], ans: 2, exp: "The minimum age to be appointed Governor is 35 years under Article 157." },
            { q: "Who was the first woman Chief Minister of Rajasthan?", options: ["Vasundhara Raje", "Pratibha Patil", "Kamla Beniwal", "Girija Vyas"], ans: 0, exp: "Vasundhara Raje became the first woman Chief Minister of Rajasthan in 2003." }
        ]
    }
};

// Application State
let courses = [];
let creatorEarnings = 0;
let currentCategoryFilter = "all";
let activeCheckoutCourse = null;
let checkoutPrice = 0;
let couponApplied = false;

let activeBatch = null;
let activeLecIndex = 0;
let dppScore = 0;

let currentTestKey = null;
let currentTestQuestions = [];
let currentTestIdx = 0;
let userTestAnswers = [];
let testTimerInterval = null;
let testSecondsRemaining = 600;

window.addEventListener("DOMContentLoaded", () => {
    loadState();
    renderCourseGrid();
    updateEnrolledCounters();
    updateEarningsDisplay();
});

function loadState() {
    try {
        const storedCourses = localStorage.getItem(STORAGE_COURSES_KEY);
        const storedEarnings = localStorage.getItem(STORAGE_EARNINGS_KEY);
        courses = storedCourses ? JSON.parse(storedCourses) : JSON.parse(JSON.stringify(defaultCourses));
        creatorEarnings = storedEarnings ? parseInt(storedEarnings, 10) : 0;
    } catch (err) {
        courses = JSON.parse(JSON.stringify(defaultCourses));
        creatorEarnings = 0;
    }
}

function saveState() {
    try {
        localStorage.setItem(STORAGE_COURSES_KEY, JSON.stringify(courses));
        localStorage.setItem(STORAGE_EARNINGS_KEY, String(creatorEarnings));
    } catch (err) {
        console.warn("Unable to persist state to localStorage:", err);
    }
}

function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    const borderClass = type === "success" ? "border-emerald-500" : (type === "warning" ? "border-amber-400" : "border-indigo-400");
    const iconClass = type === "success" ? "fa-circle-check text-emerald-400" : "fa-circle-info text-amber-400";

    toast.className = `bg-indigo-950 text-white px-4 py-3 rounded-xl shadow-2xl border-l-4 ${borderClass} flex items-center gap-3 text-xs sm:text-sm font-medium pointer-events-auto fade-in`;
    toast.innerHTML = `<i class="fa-solid ${iconClass} text-base"></i><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.25s ease";
        setTimeout(() => toast.remove(), 250);
    }, 3200);
}

function switchView(viewName) {
    ["courses", "my-batches", "classroom", "test-series", "free-notes"].forEach((view) => {
        document.getElementById(`view-${view}`).classList.add("hidden");
    });
    document.getElementById(`view-${viewName}`).classList.remove("hidden");

    document.querySelectorAll(".nav-tab").forEach((tab) => {
        tab.classList.remove("bg-white", "text-indigo-950", "shadow-sm");
        tab.classList.add("text-slate-600");
    });
    const activeNav = document.getElementById(`nav-${viewName}`);
    if (activeNav) {
        activeNav.classList.add("bg-white", "text-indigo-950", "shadow-sm");
        activeNav.classList.remove("text-slate-600");
    }

    document.querySelectorAll(".mob-tab").forEach((tab) => {
        tab.classList.remove("bg-indigo-50", "text-indigo-950", "font-bold");
        tab.classList.add("text-slate-600", "font-semibold");
    });
    const activeMob = document.getElementById(`mob-nav-${viewName}`);
    if (activeMob) {
        activeMob.classList.add("bg-indigo-50", "text-indigo-950", "font-bold");
        activeMob.classList.remove("text-slate-600", "font-semibold");
    }

    if (viewName === "my-batches") {
        renderMyBatchesGrid();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCourseGrid() {
    const grid = document.getElementById("courses-grid");
    const searchQuery = document.getElementById("course-search-input").value.toLowerCase().trim();

    const filtered = courses.filter((course) => {
        const matchesCategory = currentCategoryFilter === "all" || course.category === currentCategoryFilter;
        const matchesSearch =
            course.title.toLowerCase().includes(searchQuery) ||
            course.syllabus.toLowerCase().includes(searchQuery) ||
            course.faculty.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="col-span-full bg-white rounded-2xl border border-slate-200 p-10 text-center">
            <p class="text-slate-600 font-semibold">No RPSC batches matched your search.</p>
        </div>`;
        return;
    }

    grid.innerHTML = filtered.map((course) => {
        const discountPct = course.originalPrice > course.price
            ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)
            : 0;

        return `
        <article class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
                <div class="h-36 bg-gradient-to-br ${course.bannerStyle} p-4 text-white flex flex-col justify-between">
                    <div class="flex justify-between items-start gap-2">
                        <span class="${course.badgeBg} text-[10px] font-extrabold px-2.5 py-1 rounded-md tracking-wider uppercase">
                            ${course.badge}
                        </span>
                        <span class="bg-white/10 text-[11px] font-medium px-2 py-0.5 rounded-md">
                            ${course.validity}
                        </span>
                    </div>
                    <div class="flex items-end justify-between">
                        <span class="text-[11px] font-semibold text-amber-300">
                            <i class="fa-solid fa-video mr-1"></i> ${course.lectures.length} Lectures + DPP
                        </span>
                        <i class="fa-solid fa-landmark text-3xl text-white/15 group-hover:scale-110 transition-transform"></i>
                    </div>
                </div>

                <div class="p-5">
                    <h3 class="font-extrabold text-slate-900 text-base leading-snug line-clamp-2 min-h-[44px]">
                        ${course.title}
                    </h3>
                    <p class="text-xs font-semibold text-indigo-700 mt-2">
                        <i class="fa-solid fa-user-tie mr-1"></i> ${course.faculty}
                    </p>
                    <p class="text-xs text-slate-500 mt-2.5 line-clamp-3 leading-relaxed">
                        <strong>Syllabus:</strong> ${course.syllabus}
                    </p>
                </div>
            </div>

            <div class="px-5 pb-5 pt-3 border-t border-slate-100">
                <div class="flex items-center justify-between mb-3">
                    <div>
                        ${course.price === 0
                            ? `<span class="text-xl font-black text-emerald-600">FREE</span>`
                            : `<span class="text-xl font-black text-indigo-950">&#8377;${course.price.toLocaleString("en-IN")}</span>
                               <span class="text-xs text-slate-400 line-through ml-1">&#8377;${course.originalPrice.toLocaleString("en-IN")}</span>`
                        }
                    </div>
                    ${course.price > 0 && discountPct > 0
                        ? `<span class="text-[11px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">${discountPct}% OFF</span>`
                        : ""
                    }
                </div>

                ${course.enrolled
                    ? `<button onclick="openClassroom(${course.id})" class="w-full bg-indigo-950 hover:bg-indigo-900 text-white font-bold py-2.5 rounded-xl text-sm transition-all flex items-center justify-center gap-2">
                        <i class="fa-solid fa-circle-play text-amber-400"></i> Enter Classroom
                       </button>`
                    : `<button onclick="openCheckoutModal(${course.id})" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-2.5 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20">
                        <i class="fa-solid fa-bolt"></i> Buy Batch
                       </button>`
                }
            </div>
        </article>`;
    }).join("");
}

function setCourseFilter(category, btnEl) {
    currentCategoryFilter = category;
    document.querySelectorAll(".filter-pill").forEach((pill) => {
        pill.classList.remove("bg-indigo-950", "text-white", "font-bold");
        pill.classList.add("bg-white", "text-slate-600", "border", "border-slate-200", "font-semibold");
    });
    btnEl.classList.add("bg-indigo-950", "text-white", "font-bold");
    btnEl.classList.remove("bg-white", "text-slate-600", "border", "border-slate-200", "font-semibold");
    renderCourseGrid();
}

// Checkout & Coupon Simulation
function openCheckoutModal(courseId) {
    const course = courses.find((c) => c.id === courseId);
    if (!course) return;

    if (course.price === 0) {
        course.enrolled = true;
        saveState();
        updateEnrolledCounters();
        renderCourseGrid();
        openClassroom(course.id);
        return;
    }

    activeCheckoutCourse = course;
    checkoutPrice = course.price;
    couponApplied = false;

    document.getElementById("checkout-course-title").textContent = course.title;
    document.getElementById("checkout-orig-price").innerHTML = `&#8377;${course.originalPrice.toLocaleString("en-IN")}`;
    document.getElementById("checkout-final-price").innerHTML = `&#8377;${checkoutPrice.toLocaleString("en-IN")}`;
    document.getElementById("checkout-btn-price").textContent = checkoutPrice.toLocaleString("en-IN");
    document.getElementById("coupon-code-input").value = "";
    document.getElementById("coupon-status-msg").classList.add("hidden");

    document.getElementById("checkout-modal").classList.remove("hidden");
}

function closeCheckoutModal() {
    document.getElementById("checkout-modal").classList.add("hidden");
}

function applyCouponCode() {
    if (!activeCheckoutCourse) return;
    const code = document.getElementById("coupon-code-input").value.trim().toUpperCase();
    const statusMsg = document.getElementById("coupon-status-msg");

    if (couponApplied) {
        showToast("Coupon discount already applied to this batch.", "info");
        return;
    }

    if (code === "RPSC10" || code === "RPSC20") {
        const discount = code === "RPSC20" ? 0.2 : 0.1;
        checkoutPrice = Math.round(activeCheckoutCourse.price * (1 - discount));
        couponApplied = true;

        document.getElementById("checkout-final-price").innerHTML = `&#8377;${checkoutPrice.toLocaleString("en-IN")}`;
        document.getElementById("checkout-btn-price").textContent = checkoutPrice.toLocaleString("en-IN");
        statusMsg.textContent = `Applied ${code}! Saved ₹${(activeCheckoutCourse.price - checkoutPrice).toLocaleString("en-IN")}`;
        statusMsg.classList.remove("hidden");
        showToast(`Coupon ${code} applied!`, "success");
    } else {
        showToast("Invalid code. Try RPSC10 for 10% off.", "warning");
    }
}

function switchPaymentTab(method) {
    ["upi", "card", "netbanking"].forEach((m) => {
        document.getElementById(`paypanel-${m}`).classList.add("hidden");
        const tab = document.getElementById(`paytab-${m}`);
        tab.classList.remove("border-2", "border-indigo-950", "bg-indigo-50", "text-indigo-950");
        tab.classList.add("border", "border-slate-200", "text-slate-600");
    });

    document.getElementById(`paypanel-${method}`).classList.remove("hidden");
    const activeTab = document.getElementById(`paytab-${method}`);
    activeTab.classList.add("border-2", "border-indigo-950", "bg-indigo-50", "text-indigo-950");
    activeTab.classList.remove("border", "border-slate-200", "text-slate-600");
}

function completePaymentUnlock() {
    if (!activeCheckoutCourse) return;

    activeCheckoutCourse.enrolled = true;
    creatorEarnings += checkoutPrice;

    saveState();
    updateEarningsDisplay();
    updateEnrolledCounters();
    renderCourseGrid();
    closeCheckoutModal();

    showToast(`Payment of ₹${checkoutPrice.toLocaleString("en-IN")} received! Batch unlocked.`, "success");
    openClassroom(activeCheckoutCourse.id);
}

function updateEarningsDisplay() {
    document.getElementById("creator-earnings-display").textContent = creatorEarnings.toLocaleString("en-IN");
}

function updateEnrolledCounters() {
    const totalEnrolled = courses.filter((c) => c.enrolled).length;
    document.getElementById("enrolled-count-badge").textContent = totalEnrolled;
    document.getElementById("mob-enrolled-count").textContent = totalEnrolled;
}

function renderMyBatchesGrid() {
    const grid = document.getElementById("my-batches-grid");
    const enrolled = courses.filter((c) => c.enrolled);

    grid.innerHTML = enrolled.map((course) => `
        <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
                <div class="flex items-center justify-between mb-3">
                    <span class="bg-emerald-100 text-emerald-800 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full">
                        <i class="fa-solid fa-circle-check mr-1"></i> UNLOCKED
                    </span>
                    <span class="text-xs font-semibold text-slate-400">${course.lectures.length} Lectures</span>
                </div>
                <h3 class="font-extrabold text-lg text-indigo-950">${course.title}</h3>
                <p class="text-xs font-medium text-indigo-700 mt-1">${course.faculty}</p>
                <p class="text-xs text-slate-500 mt-2 line-clamp-2">${course.syllabus}</p>
            </div>
            <button onclick="openClassroom(${course.id})" class="mt-5 w-full bg-indigo-950 hover:bg-indigo-900 text-white font-bold py-3 rounded-xl text-sm transition-all flex items-center justify-center gap-2">
                <i class="fa-solid fa-circle-play text-amber-400"></i> Open Classroom
            </button>
        </div>
    `).join("");
}

// Classroom Player, Notes, DPP & Doubts
function openClassroom(courseId) {
    const course = courses.find((c) => c.id === courseId);
    if (!course) return;

    activeBatch = course;
    activeLecIndex = 0;

    document.getElementById("classroom-title").textContent = course.title;
    document.getElementById("classroom-category-tag").textContent = course.category.toUpperCase();

    loadLecture(0);
    renderPlaylist();
    renderDoubts();
    updateBatchProgress();
    switchView("classroom");
}

function loadLecture(index) {
    activeLecIndex = index;
    const lecture = activeBatch.lectures[index];
    if (!lecture) return;

    document.getElementById("active-lecture-badge").textContent = `Lecture 0${index + 1} • ${lecture.duration}`;
    document.getElementById("active-lecture-title").textContent = lecture.title;
    document.getElementById("active-lecture-faculty").textContent = `Faculty: ${activeBatch.faculty}`;

    const ytId = lecture.youtubeId || "fLJBzhcSWTk";
    document.getElementById("youtube-player-frame").src = `https://www.youtube.com/embed/${ytId}?rel=0`;

    document.getElementById("lecture-notes-body").innerHTML = lecture.notes;
    renderDPP(lecture.dpp || []);
    renderPlaylist();
}

function renderPlaylist() {
    const list = document.getElementById("classroom-playlist");
    document.getElementById("playlist-meta").textContent = `${activeBatch.lectures.length} Video Lectures`;

    list.innerHTML = activeBatch.lectures.map((lec, idx) => `
        <div onclick="loadLecture(${idx})" class="p-3.5 cursor-pointer transition-all flex items-start gap-3 ${idx === activeLecIndex ? "bg-indigo-50 border-l-4 border-indigo-950" : "hover:bg-slate-50"}">
            <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5 ${lec.completed ? "bg-emerald-100 text-emerald-700" : (idx === activeLecIndex ? "bg-indigo-950 text-white" : "bg-slate-100 text-slate-600")}">
                ${lec.completed ? '<i class="fa-solid fa-check"></i>' : idx + 1}
            </div>
            <div class="flex-1">
                <h4 class="text-xs sm:text-sm font-bold text-slate-900 leading-snug">${lec.title}</h4>
                <span class="text-[11px] text-slate-400 mt-1 inline-block"><i class="fa-regular fa-clock mr-1"></i> ${lec.duration}</span>
            </div>
        </div>
    `).join("");
}

function markCurrentLectureDone() {
    const lecture = activeBatch.lectures[activeLecIndex];
    if (!lecture) return;
    lecture.completed = true;
    saveState();
    renderPlaylist();
    updateBatchProgress();
    showToast("Lecture marked as completed.", "success");
}

function updateBatchProgress() {
    const total = activeBatch.lectures.length;
    const done = activeBatch.lectures.filter((l) => l.completed).length;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;

    document.getElementById("classroom-progress-bar").style.width = `${pct}%`;
    document.getElementById("classroom-progress-text").textContent = `${pct}% Completed`;
}

function switchClassroomTab(tab) {
    ["notes", "dpp", "doubts"].forEach((t) => {
        document.getElementById(`cpanel-${t}`).classList.add("hidden");
        const btn = document.getElementById(`ctab-${t}`);
        btn.classList.remove("text-indigo-950", "border-b-2", "border-indigo-950", "bg-white", "font-bold");
        btn.classList.add("text-slate-600", "font-semibold");
    });

    document.getElementById(`cpanel-${tab}`).classList.remove("hidden");
    const activeBtn = document.getElementById(`ctab-${tab}`);
    activeBtn.classList.add("text-indigo-950", "border-b-2", "border-indigo-950", "bg-white", "font-bold");
    activeBtn.classList.remove("text-slate-600", "font-semibold");
}

function downloadLectureNotes() {
    const lecture = activeBatch.lectures[activeLecIndex];
    const cleanText = lecture.notes.replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]*>?/gm, "");
    const payload = `RPSC POLITICAL SCIENCE HUB — STUDY NOTES\nBatch: ${activeBatch.title}\nLecture: ${lecture.title}\nFaculty: ${activeBatch.faculty}\n==============================================\n\n${cleanText}`;

    const blob = new Blob([payload], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `RPSC_Lecture_${activeLecIndex + 1}_Notes.txt`;
    link.click();
    showToast("Study notes downloaded.", "success");
}

function renderDPP(questions) {
    const container = document.getElementById("dpp-questions-container");
    dppScore = 0;
    document.getElementById("dpp-score-pill").textContent = `Score: 0 / ${questions.length}`;

    if (!questions.length) {
        container.innerHTML = `<p class="text-sm text-slate-500">No DPP questions available for this lecture yet.</p>`;
        return;
    }

    container.innerHTML = questions.map((item, qIdx) => `
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3" id="dpp-card-${qIdx}">
            <p class="font-bold text-sm text-slate-900">Q${qIdx + 1}. ${item.q}</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${item.options.map((opt, oIdx) => `
                    <button onclick="selectDPPOption(${qIdx}, ${oIdx}, ${item.ans}, this)" class="text-left px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 hover:border-indigo-500 text-xs sm:text-sm font-medium transition-all">
                        <span class="font-extrabold text-indigo-700 mr-1.5">${String.fromCharCode(65 + oIdx)}.</span> ${opt}
                    </button>
                `).join("")}
            </div>
            <div id="dpp-exp-${qIdx}" class="hidden text-xs bg-indigo-50 text-indigo-950 p-3 rounded-lg border border-indigo-100">
                <strong>Explanation:</strong> ${item.exp}
            </div>
        </div>
    `).join("");
}

function selectDPPOption(qIdx, chosenIdx, correctIdx, btnEl) {
    const card = document.getElementById(`dpp-card-${qIdx}`);
    const btns = card.querySelectorAll("button");
    btns.forEach((b) => (b.disabled = true));

    if (chosenIdx === correctIdx) {
        btnEl.classList.remove("bg-white", "border-slate-200");
        btnEl.classList.add("bg-emerald-100", "border-emerald-500", "text-emerald-900", "font-bold");
        dppScore++;
    } else {
        btnEl.classList.remove("bg-white", "border-slate-200");
        btnEl.classList.add("bg-rose-100", "border-rose-500", "text-rose-900");
        btns[correctIdx].classList.add("bg-emerald-50", "border-emerald-400", "text-emerald-900", "font-bold");
    }

    const total = activeBatch.lectures[activeLecIndex].dpp.length;
    document.getElementById("dpp-score-pill").textContent = `Score: ${dppScore} / ${total}`;
    document.getElementById(`dpp-exp-${qIdx}`).classList.remove("hidden");
}

function renderDoubts() {
    const feed = document.getElementById("doubts-feed");
    const doubts = activeBatch.doubts || [];

    if (!doubts.length) {
        feed.innerHTML = `<p class="text-xs text-slate-400 text-center py-4">No doubts posted yet. Ask a question above.</p>`;
        return;
    }

    feed.innerHTML = doubts.map((item) => `
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-indigo-950 text-white text-xs font-bold flex items-center justify-center">${item.user[0]}</span>
                <span class="text-xs font-bold text-slate-800">${item.user}</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700">${item.text}</p>
            <div class="pl-3 border-l-2 border-amber-400 bg-white p-2.5 rounded text-xs text-slate-600">
                <strong class="text-indigo-950">Mentor Reply:</strong> ${item.reply}
            </div>
        </div>
    `).join("");
}

function submitStudentDoubt(event) {
    event.preventDefault();
    const input = document.getElementById("new-doubt-input");
    const text = input.value.trim();
    if (!text) return;

    activeBatch.doubts.unshift({
        user: "RPSC Aspirant",
        text,
        reply: "Doubt logged for faculty review. Reference notes and DPP solutions have been linked above."
    });
    saveState();
    input.value = "";
    renderDoubts();
    showToast("Doubt posted to classroom forum.", "success");
}

// Timed RPSC Mock Test Series
function startMockTest(key) {
    const testObj = mockTestBank[key];
    if (!testObj) return;

    currentTestKey = key;
    currentTestQuestions = testObj.questions;
    currentTestIdx = 0;
    userTestAnswers = new Array(currentTestQuestions.length).fill(null);
    testSecondsRemaining = 600;

    document.getElementById("active-test-name").textContent = testObj.title;
    document.getElementById("test-selector-screen").classList.add("hidden");
    document.getElementById("test-scorecard-screen").classList.add("hidden");
    document.getElementById("test-runner-screen").classList.remove("hidden");

    renderTestQuestion();
    startTestCountdown();
}

function startTestCountdown() {
    clearInterval(testTimerInterval);
    renderTimerText();
    testTimerInterval = setInterval(() => {
        testSecondsRemaining--;
        renderTimerText();
        if (testSecondsRemaining <= 0) {
            clearInterval(testTimerInterval);
            submitMockTest();
        }
    }, 1000);
}

function renderTimerText() {
    const m = Math.floor(testSecondsRemaining / 60).toString().padStart(2, "0");
    const s = (testSecondsRemaining % 60).toString().padStart(2, "0");
    document.getElementById("test-timer-display").textContent = `${m}:${s}`;
}

function renderTestQuestion() {
    const qObj = currentTestQuestions[currentTestIdx];
    document.getElementById("test-q-number").textContent = `Question ${currentTestIdx + 1} of ${currentTestQuestions.length}`;
    document.getElementById("test-q-text").textContent = qObj.q;

    const container = document.getElementById("test-q-options");
    container.innerHTML = qObj.options.map((opt, idx) => {
        const selected = userTestAnswers[currentTestIdx] === idx;
        return `
        <button onclick="selectTestAnswer(${idx})" class="w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-xs sm:text-sm font-semibold flex items-center gap-3 ${selected ? "border-indigo-950 bg-indigo-50 text-indigo-950" : "border-slate-200 bg-white hover:border-indigo-300 text-slate-700"}">
            <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold ${selected ? "bg-indigo-950 text-white" : "bg-slate-100 text-slate-600"}">
                ${String.fromCharCode(65 + idx)}
            </span>
            <span>${opt}</span>
        </button>`;
    }).join("");

    renderTestPalette();
}

function selectTestAnswer(optIdx) {
    userTestAnswers[currentTestIdx] = optIdx;
    renderTestQuestion();
}

function clearCurrentTestResponse() {
    userTestAnswers[currentTestIdx] = null;
    renderTestQuestion();
}

function prevTestQuestion() {
    if (currentTestIdx > 0) {
        currentTestIdx--;
        renderTestQuestion();
    }
}

function nextTestQuestion() {
    if (currentTestIdx < currentTestQuestions.length - 1) {
        currentTestIdx++;
        renderTestQuestion();
    } else {
        showToast("Last question reached. Click Submit Test to calculate your score.", "info");
    }
}

function renderTestPalette() {
    const palette = document.getElementById("test-palette-grid");
    palette.innerHTML = currentTestQuestions.map((_, idx) => {
        let cls = "bg-white border border-slate-300 text-slate-700";
        if (idx === currentTestIdx) {
            cls = "bg-indigo-950 text-white font-extrabold";
        } else if (userTestAnswers[idx] !== null) {
            cls = "bg-emerald-500 text-white font-bold";
        }
        return `<button onclick="jumpToTestQuestion(${idx})" class="h-9 rounded-lg text-xs transition-all ${cls}">${idx + 1}</button>`;
    }).join("");
}

function jumpToTestQuestion(idx) {
    currentTestIdx = idx;
    renderTestQuestion();
}

function submitMockTest() {
    clearInterval(testTimerInterval);
    let correct = 0;
    let wrong = 0;

    currentTestQuestions.forEach((q, idx) => {
        if (userTestAnswers[idx] !== null) {
            if (userTestAnswers[idx] === q.ans) correct++;
            else wrong++;
        }
    });

    const netScore = Math.max(0, correct * 2 - wrong * 0.66).toFixed(2);
    const attempted = correct + wrong;
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

    document.getElementById("scorecard-subtitle").textContent = mockTestBank[currentTestKey].title;
    document.getElementById("sc-net-score").textContent = `${netScore} / ${currentTestQuestions.length * 2}`;
    document.getElementById("sc-correct").textContent = correct;
    document.getElementById("sc-wrong").textContent = wrong;
    document.getElementById("sc-accuracy").textContent = `${accuracy}%`;

    document.getElementById("scorecard-review-list").innerHTML = currentTestQuestions.map((q, idx) => {
        const ans = userTestAnswers[idx];
        const isCorrect = ans === q.ans;
        const badge = ans === null
            ? `<span class="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Unattempted</span>`
            : (isCorrect
                ? `<span class="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Correct (+2)</span>`
                : `<span class="text-xs font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">Incorrect (-0.66)</span>`);

        return `
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div class="flex justify-between items-start gap-2">
                <p class="font-bold text-sm text-slate-900">Q${idx + 1}. ${q.q}</p>
                ${badge}
            </div>
            <p class="text-xs text-emerald-700 font-semibold">Correct Option: ${q.options[q.ans]}</p>
            <p class="text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-100"><strong>Explanation:</strong> ${q.exp}</p>
        </div>`;
    }).join("");

    document.getElementById("test-runner-screen").classList.add("hidden");
    document.getElementById("test-scorecard-screen").classList.remove("hidden");
    showToast("Mock test submitted.", "success");
}

function resetTestSection() {
    clearInterval(testTimerInterval);
    document.getElementById("test-scorecard-screen").classList.add("hidden");
    document.getElementById("test-runner-screen").classList.add("hidden");
    document.getElementById("test-selector-screen").classList.remove("hidden");
}

// Standalone Free Notes Download
function downloadStandaloneNote(fileBaseName, bodyText) {
    const content = `RPSC POLITICAL SCIENCE HUB — FREE REVISION NOTES\n=================================================\n\n${bodyText}`;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${fileBaseName}.txt`;
    link.click();
    showToast(`${fileBaseName}.txt downloaded.`, "success");
}

// Admin Studio Controls
function openAdminModal() {
    const select = document.getElementById("admin-l-course");
    select.innerHTML = courses.map((c) => `<option value="${c.id}">${c.title}</option>`).join("");
    document.getElementById("admin-modal").classList.remove("hidden");
}

function closeAdminModal() {
    document.getElementById("admin-modal").classList.add("hidden");
}

function switchAdminForm(mode) {
    const isCourse = mode === "course";
    document.getElementById("form-add-course").classList.toggle("hidden", !isCourse);
    document.getElementById("form-add-lecture").classList.toggle("hidden", isCourse);

    document.getElementById("admin-tab-course").className = isCourse
        ? "flex-1 py-2 rounded-lg text-xs font-bold bg-white text-indigo-950 shadow-2xs"
        : "flex-1 py-2 rounded-lg text-xs font-bold text-slate-600";
    document.getElementById("admin-tab-lecture").className = !isCourse
        ? "flex-1 py-2 rounded-lg text-xs font-bold bg-white text-indigo-950 shadow-2xs"
        : "flex-1 py-2 rounded-lg text-xs font-bold text-slate-600";
}

function adminCreateCourse(event) {
    event.preventDefault();
    const title = document.getElementById("admin-c-title").value.trim();
    const category = document.getElementById("admin-c-cat").value;
    const price = parseInt(document.getElementById("admin-c-price").value, 10) || 0;
    const syllabus = document.getElementById("admin-c-desc").value.trim();

    const batch = {
        id: Date.now(),
        title,
        category,
        badge: price === 0 ? "FREE STARTER" : "NEW BATCH",
        badgeBg: price === 0 ? "bg-emerald-500 text-white" : "bg-amber-400 text-indigo-950",
        faculty: "Dr. Arvind Singh Rathore",
        validity: "12 Months Validity",
        syllabus,
        price,
        originalPrice: price > 0 ? Math.round(price * 2.2) : 1499,
        enrolled: price === 0,
        bannerStyle: "from-indigo-950 to-slate-900",
        lectures: [
            {
                id: Date.now() + 1,
                title: "Syllabus Roadmap & RPSC Preparation Strategy",
                duration: "40:00",
                youtubeId: "fLJBzhcSWTk",
                completed: false,
                notes: `<strong>Batch Orientation Notes:</strong><br>• Structured roadmap for <em>${title}</em>.<br>• Focus on core Political Science concepts, constitutional articles, and practice MCQs.`,
                dpp: [
                    { q: "When was the Constitution of India adopted?", options: ["August 15, 1947", "November 26, 1949", "January 26, 1950", "April 1, 1950"], ans: 1, exp: "The Constitution of India was adopted on November 26, 1949." }
                ]
            }
        ],
        doubts: []
    };

    courses.unshift(batch);
    saveState();
    renderCourseGrid();
    updateEnrolledCounters();
    closeAdminModal();
    event.target.reset();
    showToast(`Published "${title}".`, "success");
}

function adminAddLecture(event) {
    event.preventDefault();
    const courseId = parseInt(document.getElementById("admin-l-course").value, 10);
    const title = document.getElementById("admin-l-title").value.trim();
    const ytId = document.getElementById("admin-l-yt").value.trim() || "fLJBzhcSWTk";
    const notes = document.getElementById("admin-l-notes").value.trim();

    const course = courses.find((c) => c.id === courseId);
    if (!course) return;

    course.lectures.push({
        id: Date.now(),
        title,
        duration: "45:00",
        youtubeId: ytId,
        completed: false,
        notes: `<strong>Lecture Study Notes:</strong><br>${notes.replace(/\n/g, "<br>")}`,
        dpp: [
            { q: "Which thinker propounded the 'General Will'?", options: ["Hobbes", "Locke", "Rousseau", "Bentham"], ans: 2, exp: "Rousseau propounded the General Will in 'The Social Contract'." }
        ]
    });

    saveState();
    renderCourseGrid();
    closeAdminModal();
    event.target.reset();
    showToast(`Added lecture "${title}" to ${course.title}.`, "success");
}