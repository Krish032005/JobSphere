import React from 'react'
import {
  LayoutDashboard,
  User,
  Briefcase,
  Bookmark,
  Settings,
  LogOut,
  Search,
  Bell,
  ChevronDown,
  BadgeCheck,
  MapPin,
  Calendar,
  Camera,
  Pencil,
  Zap,
  FileText,
  Trash2,
  UploadCloud,
  RefreshCw,
  Download,
  GraduationCap,
  Plus,
  Phone,
  Mail,
  Link2,
  Rocket,
  ArrowRight,
  Eye,
  CheckCircle2,
} from 'lucide-react'

// ---------------- Placeholder data (replace with your backend data) ----------------
const profile = {
  name: 'Krish Mehta',
  verified: true,
  openToWork: true,
  role: 'MERN Stack Developer',
  location: 'Mumbai, India',
  experienceText: 'Fresher',
  avatarUrl: '', // put an image URL here; initials show when empty
  completion: 80,
  about:
    'Passionate full stack developer with a love for building modern web applications. Always eager to learn new technologies and take on challenging projects.',
  skills: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express.js', 'Git', 'DSA'],
  experience: [
    // { company: 'Company Name', role: 'Frontend Developer Intern', type: 'Internship', period: '2025 – Present' },
  ],
  education: [
    { degree: 'BSc Information Technology', school: 'Mumbai University', period: '2023 – 2026' },
  ],
  resume: { name: 'krish_resume.pdf', size: '245 KB' },
  contact: { phone: '+91 98765 43210', email: 'you@example.com' },
  stats: [
    { icon: Briefcase, label: 'Applied', value: 12 },
    { icon: Bookmark, label: 'Saved', value: 8 },
    { icon: Eye, label: 'Profile views', value: 34 },
  ],
}

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: User, label: 'Profile', active: true },
  { icon: Briefcase, label: 'Applied Jobs' },
  { icon: Bookmark, label: 'Saved Jobs' },
  { icon: Settings, label: 'Settings' },
  { icon: LogOut, label: 'Logout' },
]

// ---------------- Small inline brand icons ----------------
const GitHubIcon = () => (
  <svg viewBox='0 0 24 24' className='h-5 w-5' fill='currentColor'>
    <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox='0 0 24 24' className='h-5 w-5' fill='currentColor'>
    <path d='M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z' />
  </svg>
)

// ---------------- Reusable bits ----------------
const SectionHeader = ({ icon: Icon, title, onEdit }) => (
  <div className='mb-4 flex items-center justify-between'>
    <div className='flex items-center gap-3'>
      <Icon className='h-5 w-5 text-blue-600' />
      <h3 className='text-lg font-bold text-slate-900'>{title}</h3>
    </div>
    {onEdit && (
      <button
        type='button'
        className='flex items-center gap-1.5 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-100 cursor-pointer'
      >
        <Pencil className='h-4 w-4' /> Edit
      </button>
    )}
  </div>
)

const Card = ({ children, className = '' }) => (
  <div className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}>
    {children}
  </div>
)

const getInitials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

const Profile = () => {
  return (
    <div className='flex min-h-screen w-full bg-slate-50 text-slate-800'>

      {/* ================= SIDEBAR ================= */}
      <aside className='hidden w-64 shrink-0 flex-col justify-between border-r border-slate-200 bg-white lg:flex'>
        <div>
          {/* Logo */}
          <div className='flex items-center gap-2 px-6 py-6'>
            <span className='h-8 w-8 rounded-lg bg-blue-600' />
            <h1 className='text-2xl text-slate-900' style={{ fontFamily: 'Anton' }}>
              JobSphere
            </h1>
          </div>

          {/* Nav */}
          <nav className='mt-4 space-y-1 px-4'>
            {navItems.map(({ icon: Icon, label, active }) => (
              <button
                key={label}
                type='button'
                className={`flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left text-sm font-semibold transition cursor-pointer ${
                  active
                    ? 'border-l-4 border-blue-600 bg-blue-50 text-blue-700'
                    : 'border-l-4 border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className='h-5 w-5' />
                {label}
              </button>
            ))}
          </nav>
        </div>

        {/* Promo card */}
        <div className='m-4 rounded-2xl bg-gradient-to-br from-blue-50 to-slate-100 p-5 text-center'>
          <Rocket className='mx-auto h-10 w-10 text-blue-600' />
          <h4 className='mt-2 text-lg font-bold text-slate-900'>Dream Bigger</h4>
          <p className='mt-1 text-sm text-slate-600'>
            Your next opportunity is just a click away.
          </p>
          <button
            type='button'
            className='mt-4 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow transition hover:bg-blue-700 cursor-pointer'
          >
            Explore Jobs <ArrowRight className='h-4 w-4' />
          </button>
        </div>
      </aside>

      {/* ================= MAIN AREA ================= */}
      <div className='flex min-w-0 flex-1 flex-col'>

        {/* ---------- Top bar ---------- */}
        <header className='flex items-center justify-between gap-4 px-6 py-5 lg:px-8'>
          <div className='relative w-full max-w-xl'>
            <Search className='absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400' />
            <input
              type='text'
              placeholder='Search jobs, companies, skills...'
              className='w-full rounded-full border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
            />
          </div>

          <div className='flex items-center gap-5'>
            <button type='button' className='relative text-slate-600 hover:text-slate-900 cursor-pointer'>
              <Bell className='h-6 w-6' />
              <span className='absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-slate-50' />
            </button>

            <button type='button' className='flex items-center gap-2 cursor-pointer'>
              {profile.avatarUrl ? (
                <img src={profile.avatarUrl} alt={profile.name} className='h-10 w-10 rounded-full object-cover' />
              ) : (
                <span className='flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white'>
                  {getInitials(profile.name)}
                </span>
              )}
              <ChevronDown className='h-4 w-4 text-slate-500' />
            </button>
          </div>
        </header>

        <main className='flex-1 space-y-6 px-6 pb-10 lg:px-8'>

          {/* ---------- Profile banner ---------- */}
          <section className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700 p-6 text-white shadow-lg sm:p-8'>
            {/* decorative shapes */}
            <div className='pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-400/20' />
            <div className='pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-white/5' />

            <div className='relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center'>

              {/* Avatar + info */}
              <div className='flex flex-col items-start gap-6 sm:flex-row sm:items-center'>
                <div className='relative'>
                  {profile.avatarUrl ? (
                    <img
                      src={profile.avatarUrl}
                      alt={profile.name}
                      className='h-32 w-32 rounded-full border-4 border-white/90 object-cover'
                    />
                  ) : (
                    <div className='flex h-32 w-32 items-center justify-center rounded-full border-4 border-white/90 bg-blue-500 text-4xl font-bold'>
                      {getInitials(profile.name)}
                    </div>
                  )}
                  <button
                    type='button'
                    aria-label='Change photo'
                    className='absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white ring-2 ring-white transition hover:bg-slate-700 cursor-pointer'
                  >
                    <Camera className='h-4 w-4' />
                  </button>
                </div>

                <div>
                  <div className='flex flex-wrap items-center gap-3'>
                    <h2 className='text-3xl font-extrabold'>{profile.name}</h2>
                    {profile.verified && <BadgeCheck className='h-6 w-6 text-sky-300' />}
                    {profile.openToWork && (
                      <span className='inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/40'>
                        <span className='h-2 w-2 rounded-full bg-emerald-400' /> Open to work
                      </span>
                    )}
                  </div>

                  <div className='mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-blue-100'>
                    <span className='flex items-center gap-1.5'>
                      <Briefcase className='h-4 w-4' /> {profile.role}
                    </span>
                    <span className='flex items-center gap-1.5'>
                      <MapPin className='h-4 w-4' /> {profile.location}
                    </span>
                    <span className='flex items-center gap-1.5'>
                      <Calendar className='h-4 w-4' /> {profile.experienceText}
                    </span>
                  </div>

                  {/* Quick stats */}
                  <div className='mt-4 flex flex-wrap gap-3'>
                    {profile.stats.map(({ icon: Icon, label, value }) => (
                      <div
                        key={label}
                        className='flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 backdrop-blur'
                      >
                        <Icon className='h-4 w-4 text-blue-200' />
                        <span className='text-sm font-bold'>{value}</span>
                        <span className='text-xs text-blue-200'>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Profile completion */}
              <div className='w-full rounded-2xl bg-white p-5 text-slate-800 shadow-xl lg:w-96'>
                <div className='flex items-center justify-between'>
                  <p className='font-bold text-slate-900'>Profile Completion</p>
                  <p className='font-bold text-blue-700'>{profile.completion}%</p>
                </div>
                <div className='mt-3 h-2.5 w-full rounded-full bg-slate-200'>
                  <div
                    className='h-2.5 rounded-full bg-blue-600'
                    style={{ width: `${profile.completion}%` }}
                  />
                </div>
                <div className='mt-3 flex items-center justify-between gap-3'>
                  <p className='text-xs text-slate-600'>
                    Complete your profile to get better opportunities!
                  </p>
                  <button
                    type='button'
                    aria-label='Complete profile'
                    className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700 cursor-pointer'
                  >
                    <ArrowRight className='h-4 w-4' />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ---------- Two column content ---------- */}
          <div className='grid grid-cols-1 gap-6 xl:grid-cols-3'>

            {/* ===== LEFT COLUMN ===== */}
            <div className='space-y-6 xl:col-span-2'>

              {/* About */}
              <Card>
                <SectionHeader icon={User} title='About' onEdit />
                <p className='max-w-2xl leading-relaxed text-slate-600'>{profile.about}</p>
              </Card>

              {/* Experience */}
              <Card>
                <SectionHeader icon={Briefcase} title='Experience' />

                {profile.experience.length === 0 ? (
                  <p className='rounded-xl bg-slate-50 px-4 py-5 text-center text-sm text-slate-500'>
                    No experience added yet. Add internships, projects or jobs to stand out to recruiters.
                  </p>
                ) : (
                  <div className='divide-y divide-slate-100'>
                    {profile.experience.map((exp) => (
                      <div key={exp.company + exp.period} className='flex items-center gap-4 py-4'>
                        <div className='flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-xl font-bold text-blue-700'>
                          {exp.company[0]}
                        </div>
                        <div className='flex-1'>
                          <p className='font-bold text-slate-900'>{exp.company}</p>
                          <p className='text-sm text-slate-500'>
                            {exp.role} &bull; {exp.type}
                          </p>
                        </div>
                        <p className='flex items-center gap-1.5 text-sm text-slate-500'>
                          <Calendar className='h-4 w-4' /> {exp.period}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  type='button'
                  className='mt-3 flex w-full items-center justify-center gap-1.5 border-t border-slate-100 pt-4 text-sm font-semibold text-blue-600 transition hover:text-blue-800 cursor-pointer'
                >
                  <Plus className='h-4 w-4' /> Add Experience
                </button>
              </Card>

              {/* Education */}
              <Card>
                <SectionHeader icon={GraduationCap} title='Education' />

                <div className='divide-y divide-slate-100'>
                  {profile.education.map((edu) => (
                    <div key={edu.degree} className='flex items-center gap-4 py-3'>
                      <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600'>
                        <GraduationCap className='h-6 w-6' />
                      </div>
                      <div className='flex-1'>
                        <p className='font-bold text-slate-900'>{edu.degree}</p>
                        <p className='text-sm text-slate-500'>{edu.school}</p>
                      </div>
                      <p className='flex items-center gap-1.5 text-sm text-slate-500'>
                        <Calendar className='h-4 w-4' /> {edu.period}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  type='button'
                  className='mt-3 flex w-full items-center justify-center gap-1.5 border-t border-slate-100 pt-4 text-sm font-semibold text-blue-600 transition hover:text-blue-800 cursor-pointer'
                >
                  <Plus className='h-4 w-4' /> Add Education
                </button>
              </Card>
            </div>

            {/* ===== RIGHT COLUMN ===== */}
            <div className='space-y-6'>

              {/* Skills */}
              <Card>
                <SectionHeader icon={Zap} title='Skills' onEdit />
                <div className='flex flex-wrap gap-2'>
                  {profile.skills.map((skill) => (
                    <span
                      key={skill}
                      className='rounded-full bg-slate-100 px-4 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Resume */}
              <Card>
                <div className='mb-4 flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <FileText className='h-5 w-5 text-blue-600' />
                    <h3 className='text-lg font-bold text-slate-900'>Resume</h3>
                  </div>
                  <button
                    type='button'
                    aria-label='Delete resume'
                    className='flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500 transition hover:bg-red-100 cursor-pointer'
                  >
                    <Trash2 className='h-4 w-4' />
                  </button>
                </div>

                {/* Drop zone */}
                <div className='flex flex-col items-center rounded-xl border-2 border-dashed border-blue-300 bg-blue-50/50 px-4 py-5 text-center'>
                  <UploadCloud className='h-8 w-8 text-blue-600' />
                  <p className='mt-1 text-sm font-semibold text-slate-800'>Drag &amp; drop your resume here</p>
                  <p className='text-xs text-slate-400'>or</p>
                  <button
                    type='button'
                    className='mt-1 flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 cursor-pointer'
                  >
                    <RefreshCw className='h-4 w-4' /> Replace File
                  </button>
                </div>

                {/* Uploaded file */}
                <div className='mt-4 flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-500'>
                      <FileText className='h-5 w-5' />
                    </div>
                    <div>
                      <p className='text-sm font-semibold text-slate-900'>{profile.resume.name}</p>
                      <p className='flex items-center gap-1 text-xs text-slate-500'>
                        <CheckCircle2 className='h-3 w-3 text-emerald-500' /> {profile.resume.size}
                      </p>
                    </div>
                  </div>
                  <button
                    type='button'
                    aria-label='Download resume'
                    className='flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition hover:bg-slate-200 cursor-pointer'
                  >
                    <Download className='h-4 w-4' />
                  </button>
                </div>
              </Card>

              {/* Contact */}
              <Card>
                <div className='mb-4 flex items-center gap-3'>
                  <Phone className='h-5 w-5 text-blue-600' />
                  <h3 className='text-lg font-bold text-slate-900'>Contact</h3>
                </div>

                <div className='flex items-end justify-between gap-4'>
                  <div className='space-y-3 text-sm text-slate-700'>
                    <p className='flex items-center gap-3'>
                      <Phone className='h-4 w-4 text-blue-600' /> {profile.contact.phone}
                    </p>
                    <p className='flex items-center gap-3'>
                      <Mail className='h-4 w-4 text-blue-600' /> {profile.contact.email}
                    </p>
                  </div>

                  <div className='flex gap-2'>
                    {[GitHubIcon, LinkedInIcon, () => <Link2 className='h-5 w-5' />].map((Icon, i) => (
                      <button
                        key={i}
                        type='button'
                        className='flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-800 transition hover:bg-blue-600 hover:text-white cursor-pointer'
                      >
                        <Icon />
                      </button>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Profile