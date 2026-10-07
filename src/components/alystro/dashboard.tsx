import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  BookOpen,
  CalendarDays,
  FolderOpen,
  Award,
  BarChart3,
  Settings,
  Bell,
  ChevronDown,
  Users,
  School,
  GraduationCap,
  Code2,
  CircleCheck,
  Video,
  Play,
  Sparkles,
  Flame,
  CheckCircle2,
  ArrowUpRight,
  Terminal,
  Activity,
  Volume2,
  Send,
  MessageSquare,
} from "lucide-react";
import aiCourse from "@/assets/ai-course.jpg";

export function Logo() {
  return (
    <a className="brand" href="/" aria-label="ALYSTRO home">
      <span className="brand-mark">A</span>
      <span>ALYSTRO</span>
    </a>
  );
}

export function Dashboard({
  school: defaultSchool = false,
  full = false,
  allowToggle = true,
}: {
  school?: boolean;
  full?: boolean;
  allowToggle?: boolean;
}) {
  const [isSchool, setIsSchool] = useState(defaultSchool);
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [liveStreamOpen, setLiveStreamOpen] = useState(false);
  const [liveChatMessages, setLiveChatMessages] = useState<
    Array<{ user: string; text: string; time: string }>
  >([
    { user: "Aarav S.", text: "Can we use PyTorch for this classifier?", time: "just now" },
    { user: "Maya K.", text: "The weights diagram makes total sense now!", time: "1m ago" },
    { user: "Dr. Neha (Instructor)", text: "Exactly Maya! Notice the activation curve.", time: "2m ago" },
  ]);
  const [newChat, setNewChat] = useState("");
  const [selectedDay, setSelectedDay] = useState(2); // Wednesday

  // Update mode if prop changes
  useEffect(() => {
    setIsSchool(defaultSchool);
  }, [defaultSchool]);

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChat.trim()) return;
    setLiveChatMessages((prev) => [
      ...prev,
      { user: "You (Student)", text: newChat.trim(), time: "just now" },
    ]);
    setNewChat("");
  };

  type NavLink = { id: string; label: string; icon: typeof LayoutDashboard; badge?: string };

  const studentLinks: NavLink[] = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "live", label: "Live Classes", icon: Video, badge: "LIVE" },
    { id: "courses", label: "My Courses", icon: BookOpen },
    { id: "projects", label: "Projects & Lab", icon: Code2 },
    { id: "certificates", label: "Certificates", icon: Award },
  ];

  const schoolLinks: NavLink[] = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "schools", label: "Batches & Classes", icon: School },
    { id: "students", label: "Students Roster", icon: Users },
    { id: "teachers", label: "Teacher Leads", icon: GraduationCap },
    { id: "courses", label: "Curriculum Tracks", icon: BookOpen },
    ...(full
      ? [
          { id: "attendance", label: "Attendance", icon: CalendarDays },
          { id: "reports", label: "Analytics & ROI", icon: BarChart3 },
          { id: "settings", label: "School Settings", icon: Settings },
        ]
      : []),
  ];

  const links = isSchool ? schoolLinks : studentLinks;

  const weeklyHours = [1.5, 2.0, 3.2, 1.8, 2.5, 0.5, 1.0];
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div
      className="dashboard live-dashboard"
      aria-label={
        isSchool ? "Interactive school management dashboard" : "Interactive student learning dashboard"
      }
    >
      {/* Top Interactive Mode Switcher Header if toggle enabled */}
      {allowToggle && (
        <div className="dash-interactive-bar">
          <div className="flex items-center gap-2">
            <span className="live-pulse-dot" />
            <span className="text-[10px] font-bold tracking-wider text-white uppercase drop-shadow-sm">
              Interactive Workspace Simulator
            </span>
          </div>
          <div className="dash-mode-toggles">
            <button
              type="button"
              className={`dash-pill-btn ${!isSchool ? "active" : ""}`}
              onClick={() => {
                setIsSchool(false);
                setActiveTab("dashboard");
              }}
            >
              🎓 Student Mode
            </button>
            <button
              type="button"
              className={`dash-pill-btn ${isSchool ? "active" : ""}`}
              onClick={() => {
                setIsSchool(true);
                setActiveTab("dashboard");
              }}
            >
              🏫 School Admin Mode
            </button>
          </div>
        </div>
      )}

      <div className="dash-layout">
        <aside className="dash-sidebar">
          <Logo />
          <div className="dash-label">
            {isSchool ? "SCHOOL WORKSPACE" : "STUDENT LEARNING SPACE"}
          </div>
          {links.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                type="button"
                className={`dash-nav ${isActive ? "active" : ""}`}
                key={item.id}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon />
                <span>{item.label}</span>
                {item.badge && <span className="dash-nav-badge">{item.badge}</span>}
              </button>
            );
          })}
          {!isSchool && (
            <>
              <div className="dash-label">SETTINGS & HELP</div>
              <button
                type="button"
                className={`dash-nav ${activeTab === "settings" ? "active" : ""}`}
                onClick={() => setActiveTab("settings")}
              >
                <Settings />
                <span>Preferences</span>
              </button>
            </>
          )}

          {/* Quick Real-Time Status in Sidebar */}
          <div className="dash-sidebar-footer">
            <div className="flex items-center gap-2 mb-1">
              <span className="live-status-ping" />
              <span className="text-[9px] font-semibold text-success">ALYSTRO Cloud Active</span>
            </div>
            <p className="text-[8px] text-muted-foreground">Session sync: 142 students online</p>
          </div>
        </aside>

        <div className="dash-main">
          <div className="dash-top">
            <div className="flex items-center gap-2">
              <strong>{isSchool ? "School Administration Hub" : "Student Learning Studio"}</strong>
              <span className="dash-badge-subtle">
                {isSchool ? "Greenwood International" : "Class 9B · Roll #14"}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="dash-live-badge-glow">
                <span className="pulse-circle" /> LIVE SYNC
              </span>
              <button
                type="button"
                className="dash-icon-btn"
                aria-label="Notifications"
                title="Notifications"
              >
                <Bell size={13} />
                <span className="dash-notif-dot" />
              </button>
              <div className="dash-avatar-pill">
                <span className="avatar">{isSchool ? "GW" : "AS"}</span>
                <span className="text-[10px] font-medium hidden sm:inline">
                  {isSchool ? "Admin Desk" : "Aarav Sharma"}
                </span>
                <ChevronDown size={11} />
              </div>
            </div>
          </div>

          <div className="dash-body">
            {/* TAB CONTENT: DASHBOARD OVERVIEW */}
            {activeTab === "dashboard" && (
              <>
                <div className="dash-welcome">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3>
                        {isSchool
                          ? "Greenwood International High School 🏫"
                          : "Welcome back, Aarav! 🚀"}
                      </h3>
                      {!isSchool && (
                        <span className="dash-streak-pill" title="14-day study streak">
                          <Flame size={12} className="text-orange-500 inline mr-1 fill-orange-500" />
                          14-Day Streak
                        </span>
                      )}
                    </div>
                    <p>
                      {isSchool
                        ? "Curriculum progress is up 18% this month across 6 ongoing grade batches."
                        : "Next live class begins in 24 minutes. Complete your AI prompt quiz to keep your streak!"}
                    </p>
                  </div>
                  <span className="text-muted-foreground text-[9px] font-mono bg-muted/60 px-2 py-1 rounded">
                    Oct 2026 · Realtime Feed
                  </span>
                </div>

                <div className="dash-stats">
                  {(isSchool
                    ? [
                        ["25", "Partner Schools", School, "↑ 4 new onboarding"],
                        ["500+", "Active Students", Users, "98.4% attendance rate"],
                        ["20", "Active Programs", BookOpen, "AI, Coding, Design"],
                        ["148", "Certificates Issued", Award, "Verifiable credentials"],
                      ]
                    : [
                        ["04", "Enrolled Tracks", BookOpen, "In Progress"],
                        ["78%", "Syllabus Progress", BarChart3, "+12% this week"],
                        ["96%", "Live Attendance", CalendarDays, "Top 5% in batch"],
                        ["02", "Verified Certificates", Award, "AI & Python Level 1"],
                      ]
                  ).map(([value, label, Icon, subtext]) => {
                    const StatIcon = Icon as typeof BookOpen;
                    return (
                      <div className="dash-stat" key={String(label)}>
                        <div className="dash-stat-label">
                          <span>{String(label)}</span>
                          <StatIcon className="stat-icon" />
                        </div>
                        <strong>{String(value)}</strong>
                        <small className="text-success">{String(subtext)}</small>
                      </div>
                    );
                  })}
                </div>

                <div className="dash-grid">
                  <div className="dash-panel">
                    <div className="dash-panel-title">
                      <strong>{isSchool ? "Curriculum Progress Overview" : "Continue Learning"}</strong>
                      <button
                        type="button"
                        className="panel-action text-primary hover:underline text-[10px] font-semibold"
                        onClick={() => setActiveTab(isSchool ? "schools" : "courses")}
                      >
                        {isSchool ? "Manage Batches →" : "View All Modules →"}
                      </button>
                    </div>

                    <div className="mini-course hover-lift">
                      <img
                        src={aiCourse}
                        width={1024}
                        height={768}
                        alt="AI course artwork"
                        loading="lazy"
                      />
                      <div className="mini-course-copy">
                        <div className="flex justify-between items-center">
                          <strong>Artificial Intelligence & Neural Nets</strong>
                          <span className="text-[8px] font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                            Module 3 of 4
                          </span>
                        </div>
                        <p>AI & Digital Skills · 9 of 12 lessons completed</p>
                        <div className="progress-track">
                          <div className="progress-fill" style={{ width: "75%" }} />
                        </div>
                      </div>
                    </div>

                    <div className="mini-course hover-lift">
                      <div className="course-code">
                        <Code2 />
                      </div>
                      <div className="mini-course-copy">
                        <div className="flex justify-between items-center">
                          <strong>Python Full-Stack & Automation</strong>
                          <span className="text-[8px] font-semibold text-amber-600 bg-amber-500/10 px-1.5 py-0.5 rounded">
                            Module 2 of 4
                          </span>
                        </div>
                        <p>Coding & Programming · 6 of 10 practical labs</p>
                        <div className="progress-track">
                          <div className="progress-fill medium" style={{ width: "60%" }} />
                        </div>
                      </div>
                    </div>

                    {/* Live Class Highlight Banner */}
                    <div className="live-class-card">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="live-radar" />
                          <span className="live-tag">● LIVE SESSION NOW</span>
                        </div>
                        <span className="live-time-ticker font-mono text-[9px] text-muted-foreground">
                          34:10 elapsed
                        </span>
                      </div>
                      <div className="mt-2">
                        <strong className="text-[10px] block text-foreground">
                          {isSchool
                            ? "Batch 9B: Computer Vision & Classifier Lab"
                            : "Interactive Lab: Building Neural Networks with Dr. Neha"}
                        </strong>
                        <p className="text-[8px] text-muted-foreground mt-0.5">
                          148 students currently attending · 24 questions solved
                        </p>
                      </div>
                      <div className="mt-2.5 flex items-center justify-between">
                        <div className="soundwave-bars">
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                        </div>
                        <button
                          type="button"
                          className="dash-action-btn"
                          onClick={() => {
                            setActiveTab("live");
                            setLiveStreamOpen(true);
                          }}
                        >
                          <Play size={10} className="fill-current" />
                          <span>{isSchool ? "Observe Class" : "Enter Live Studio"}</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="dash-panel">
                    <div className="dash-panel-title">
                      <strong>{isSchool ? "Weekly Attendance Ratio" : "Weekly Learning Activity"}</strong>
                      <span className="panel-subtext text-muted-foreground text-[9px]">
                        Active: {daysOfWeek[selectedDay]}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 mt-1">
                      <strong className="text-[18px] font-bold text-foreground">
                        {isSchool ? "96.4%" : `${weeklyHours[selectedDay]} hrs`}
                      </strong>
                      <span className="text-success text-[8px] font-semibold">
                        ↑ 14% higher than last week
                      </span>
                    </div>

                    {/* Interactive Interactive Bar Chart */}
                    <div className="interactive-chart mt-4">
                      {weeklyHours.map((hours, i) => {
                        const heightPct = Math.round((hours / 3.5) * 100);
                        const isSelected = selectedDay === i;
                        return (
                          <button
                            type="button"
                            key={daysOfWeek[i]}
                            className={`chart-bar-wrap ${isSelected ? "selected" : ""}`}
                            onClick={() => setSelectedDay(i)}
                            title={`${daysOfWeek[i]}: ${hours} hrs study`}
                          >
                            <div className="chart-bar-bg">
                              <div
                                className={`chart-bar-fill ${isSelected ? "active" : ""}`}
                                style={{ height: `${heightPct}%` }}
                              />
                            </div>
                            <span className="chart-bar-label">{daysOfWeek[i]}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Live Activity Ticker */}
                    <div className="live-ticker-wrap mt-4">
                      <div className="dash-panel-title">
                        <strong className="flex items-center gap-1.5 text-foreground">
                          <Activity size={11} className="text-primary" />
                          <span>Live Activity Feed</span>
                        </strong>
                        <span className="panel-subtext text-[8.5px] text-muted-foreground uppercase font-mono">
                          Auto-updating
                        </span>
                      </div>
                      <div className="live-feed-items">
                        <div className="feed-item">
                          <span className="feed-dot green" />
                          <p>
                            <strong>Priya K. (Class 8)</strong> submitted Python Turtle Project.
                          </p>
                          <small>1m ago</small>
                        </div>
                        <div className="feed-item">
                          <span className="feed-dot blue" />
                          <p>
                            <strong>Aarav Sharma</strong> solved 10/10 in Prompt Engineering Quiz.
                          </p>
                          <small>4m ago</small>
                        </div>
                        <div className="feed-item">
                          <span className="feed-dot purple" />
                          <p>
                            <strong>Greenwood School</strong> certified 18 students in AI Foundations.
                          </p>
                          <small>12m ago</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* TAB CONTENT: LIVE CLASS STUDIO */}
            {activeTab === "live" && (
              <div className="live-studio-view">
                <div className="live-studio-header">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="live-radar" />
                      <span className="live-tag">● BROADCASTING NOW</span>
                      <span className="dash-badge-subtle font-mono">Room: #ALYSTRO-AI-09B</span>
                    </div>
                    <h3 className="mt-1">Computer Vision & Object Detection with Python</h3>
                    <p className="text-[9px] text-muted-foreground">
                      Instructor: Dr. Neha Sen · ALYSTRO AI Fellow · 148 Students Tuned In
                    </p>
                  </div>
                  <button
                    type="button"
                    className="dash-action-btn"
                    onClick={() => setLiveStreamOpen(!liveStreamOpen)}
                  >
                    {liveStreamOpen ? "Minimize Stream" : "Maximize Stream"}
                  </button>
                </div>

                <div className="live-studio-grid">
                  <div className="live-stream-screen">
                    <div className="stream-video-sim">
                      <div className="stream-badge">LIVE TEACHER DESK</div>
                      <div className="stream-code-preview">
                        <code>
                          <span className="text-purple-400">import</span> cv2<br />
                          <span className="text-purple-400">import</span> numpy{" "}
                          <span className="text-purple-400">as</span> np<br />
                          <br />
                          <span className="text-emerald-400"># 1. Capture camera frame</span>
                          <br />
                          cap = cv2.VideoCapture(0)<br />
                          ret, frame = cap.read()<br />
                          <br />
                          <span className="text-emerald-400">
                            # 2. ALYSTRO Neural Detector v2
                          </span>
                          <br />
                          model = alystro.load_vision_model(<span className="text-amber-300">"yolo_nano"</span>)
                          <br />
                          predictions = model.detect(frame)<br />
                          <span className="text-blue-400">print</span>(f
                          <span className="text-amber-300">
                            "Found {'{len(predictions)}'} objects with 98.2% confidence"
                          </span>
                          )
                        </code>
                      </div>
                      <div className="stream-teacher-pip">
                        <span className="teacher-avatar">👩‍🏫</span>
                        <div className="text-[8px] text-white">
                          <strong>Dr. Neha Sen</strong>
                          <p className="text-white/70">Speaking now...</p>
                        </div>
                        <div className="soundwave-bars light ml-auto">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                    <div className="stream-controls">
                      <span className="flex items-center gap-2 text-[9px] text-muted-foreground">
                        <Volume2 size={12} className="text-primary" /> Audio HD 48kHz
                      </span>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          className="dash-pill-btn active text-[8px]"
                          onClick={() =>
                            setLiveChatMessages((prev) => [
                              ...prev,
                              {
                                user: "Interactive Poll",
                                text: "78% students answered Option B (Convolutional Layers)!",
                                time: "just now",
                              },
                            ])
                          }
                        >
                          Answer Live Poll (B)
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="live-chat-panel">
                    <div className="chat-header">
                      <strong>Live Discussion & Q&A</strong>
                      <span className="text-[8px] text-success">● 148 online</span>
                    </div>
                    <div className="chat-messages">
                      {liveChatMessages.map((msg, i) => (
                        <div key={i} className="chat-msg">
                          <div className="flex justify-between items-baseline">
                            <span className="chat-user">{msg.user}</span>
                            <span className="chat-time">{msg.time}</span>
                          </div>
                          <p className="chat-text">{msg.text}</p>
                        </div>
                      ))}
                    </div>
                    <form className="chat-input-bar" onSubmit={handleSendChat}>
                      <input
                        type="text"
                        placeholder="Ask instructor or answer question..."
                        value={newChat}
                        onChange={(e) => setNewChat(e.target.value)}
                        className="chat-field"
                      />
                      <button type="submit" className="chat-send-btn" aria-label="Send message">
                        <Send size={11} />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: PROJECTS & LAB */}
            {activeTab === "projects" && (
              <div className="dash-tab-section">
                <div className="dash-panel-title">
                  <strong>Student Project Portfolio & Code Repositories</strong>
                  <span className="text-primary text-[9px] font-medium">+ New Project</span>
                </div>
                <div className="projects-dash-grid">
                  {[
                    {
                      title: "Smart Eco-Waste AI Classifier",
                      track: "Artificial Intelligence",
                      status: "Completed",
                      grade: "Grade: A+ (100/100)",
                      tags: ["Python", "OpenCV", "TensorFlow"],
                    },
                    {
                      title: "Automated Student Attendance Bot",
                      track: "Python Programming",
                      status: "In Review",
                      grade: "Teacher Reviewing",
                      tags: ["Python", "Automation", "Sheets API"],
                    },
                    {
                      title: "Interactive School Science Museum Portal",
                      track: "Web & Digital Skills",
                      status: "Completed",
                      grade: "Grade: A (94/100)",
                      tags: ["HTML5", "CSS3", "JavaScript"],
                    },
                  ].map((proj) => (
                    <div key={proj.title} className="dash-project-card">
                      <div className="flex justify-between items-start">
                        <span className="text-[8px] font-semibold text-primary uppercase tracking-wide">
                          {proj.track}
                        </span>
                        <span className="status-badge-green">{proj.status}</span>
                      </div>
                      <h4 className="mt-1 text-[11px] font-bold text-foreground">{proj.title}</h4>
                      <p className="text-[9px] text-success font-medium mt-1">{proj.grade}</p>
                      <div className="flex gap-1.5 mt-2 flex-wrap">
                        {proj.tags.map((t) => (
                          <span key={t} className="tag-pill">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT: CERTIFICATES */}
            {activeTab === "certificates" && (
              <div className="dash-tab-section">
                <div className="dash-panel-title">
                  <strong>Verified Digital Credentials & Milestones</strong>
                  <a href="/verify" className="text-primary text-[9px] hover:underline font-medium">
                    Verify via ALYSTRO Registry →
                  </a>
                </div>
                <div className="cert-dash-cards">
                  <div className="cert-card-item">
                    <Award className="text-primary w-8 h-8" />
                    <div>
                      <strong className="text-[11px] block">AI & Digital Skills — Foundation</strong>
                      <p className="text-[9px] text-muted-foreground">
                        Issued to: Aarav Sharma · Greenwood International · Oct 2026
                      </p>
                      <span className="cert-hash">ID: ALY-2026-0001 · Cryptographically Sealed</span>
                    </div>
                    <a href="/verify" className="dash-pill-btn active text-[9px] ml-auto">
                      View Credential
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: SCHOOL SPECIFIC TABS */}
            {isSchool && activeTab === "schools" && (
              <div className="dash-tab-section">
                <div className="dash-panel-title">
                  <strong>Active Cohorts & Program Allocation</strong>
                  <span className="dash-badge-subtle">6 Grade Batches</span>
                </div>
                <div className="school-batches-table">
                  <div className="table-row-head">
                    <span>Batch Name</span>
                    <span>Curriculum Track</span>
                    <span>Students</span>
                    <span>Attendance</span>
                    <span>Status</span>
                  </div>
                  {[
                    ["Class 6A Foundation", "Digital Literacy & Scratch", "32", "97%", "On Track"],
                    ["Class 8B Skill Builder", "Python & Algorithms", "28", "94%", "On Track"],
                    ["Class 9A Future Ready", "AI & Machine Learning", "30", "99%", "Live Class"],
                    ["Class 10C Robotics", "IoT & Microcontrollers", "26", "92%", "Lab Day"],
                  ].map(([bname, track, students, att, stat]) => (
                    <div key={bname} className="table-row">
                      <strong>{bname}</strong>
                      <span className="text-muted-foreground">{track}</span>
                      <span>{students} enrolled</span>
                      <span className="text-success font-medium">{att}</span>
                      <span className="status-badge-green">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroDashboard() {
  const [celebrated, setCelebrated] = useState(false);

  return (
    <div className="hero-dashboard-wrap reveal">
      {/* Live top banner with interactive switcher cue */}
      <div className="hero-dash-top-ticker">
        <div className="flex items-center gap-2">
          <span className="live-status-ping" />
          <span className="text-[11px] font-semibold text-foreground">
            LIVE SCHOOL COHORT IN SESSION
          </span>
          <span className="hero-ticker-tag">148 students active</span>
        </div>
        <div className="text-[11px] text-muted-foreground hidden sm:block">
          Click tabs and switch modes inside the dashboard below to explore!
        </div>
      </div>

      <Dashboard allowToggle={true} />

      {/* Floating Milestone Badge 1 */}
      <button
        type="button"
        className={`float-card float-achievement hover-lift ${celebrated ? "celebrating" : ""}`}
        onClick={() => setCelebrated(!celebrated)}
        title="Click to celebrate milestone!"
      >
        <Award className="text-primary" />
        <div>
          <div className="flex items-center gap-1.5">
            <strong>{celebrated ? "🎉 Certificate Celebrated!" : "New Milestone Unlocked!"}</strong>
            <Sparkles size={11} className="text-amber-500 fill-amber-500 animate-pulse" />
          </div>
          <p>
            {celebrated
              ? "Verified record added to student portfolio"
              : "AI Foundations · Click to view badge"}
          </p>
        </div>
      </button>

      {/* Floating Milestone Badge 2 */}
      <div className="float-card float-progress hover-lift">
        <CircleCheck className="text-success" />
        <div>
          <strong>Learning That Moves You Forward</strong>
          <p>78% curriculum complete. 100% future-ready.</p>
        </div>
      </div>
    </div>
  );
}
