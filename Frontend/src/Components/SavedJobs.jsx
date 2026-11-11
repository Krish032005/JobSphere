import React, { useEffect, useMemo, useState } from 'react'
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
  MapPin,
  Calendar,
  Wallet,
  Building2,
  Rocket,
  ArrowRight,
  Trash2,
  Undo2,
} from 'lucide-react'

// ---------------- Sample data (replace with your backend data) ----------------
const initialSavedJobs = [
  {
    id: 3,
    title: 'Senior Frontend Engineer',
    company: 'CloudKart',
    location: 'Remote',
    type: 'Full-time',
    salary: '₹28L – ₹35L',
    salaryMin: 28,
    savedDaysAgo: 2,
  },
  {
    id: 5,
    title: 'Product Designer',
    company: 'Studio Kite',
    location: 'Bengaluru, IN',
    type: 'Full-time',
    salary: '₹20L – ₹26L',
    salaryMin: 20,
    savedDaysAgo: 4,
  },
  {
    id: 4,
    title: 'Backend Engineer (Node)',
    company: 'DataBridge',
    location: 'Bengaluru, IN',
    type: 'Contract',
    salary: '₹18L – ₹22L',
    salaryMin: 18,
    savedDaysAgo: 7,
  },
  {
    id: 1,
    title: 'Junior MERN Stack Developer',
    company: 'TechNova',
    location: 'Mumbai',
    type: 'Full-time',
    salary: '₹3L – ₹5L',
    salaryMin: 3,
    savedDaysAgo: 1,
  },
]

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: User, label: 'Profile' },
  { icon: Briefcase, label: 'Applied Jobs' },
  { icon: Bookmark, label: 'Saved Jobs', active: true },
  { icon: Settings, label: 'Settings' },
  { icon: LogOut, label: 'Logout' },
]

const avatarColors = [
  'bg-blue-600',
  'bg-indigo-600',
  'bg-emerald-600',
  'bg-sky-600',
  'bg-violet-600',
  'bg-teal-600',
  'bg-orange-500',
  'bg-slate-700',
]

function savedLabel(days) {
  if (days <= 0) return 'Saved today'
  if (days === 1) return 'Saved yesterday'
  if (days < 7) return `Saved ${days} days ago`
  const weeks = Math.floor(days / 7)
  return `Saved ${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`
}

// ---------------- Saved job row ----------------
const SavedJobRow = ({ job, onRemove }) => (
  <article className='flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md lg:flex-row lg:items-center'>

    {/* Logo + divider + info */}
    <div className='flex min-w-0 flex-1 items-center gap-5'>
      <div
        className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl text-3xl font-bold text-white ${
          avatarColors[(job.id - 1) % avatarColors.length]
        }`}
      >
        {job.company[0]}
      </div>

      <div className='hidden h-16 w-px bg-slate-200 sm:block' />

      <div className='min-w-0'>
        <h3 className='truncate text-xl font-bold text-slate-900'>{job.title}</h3>
        <p className='mt-1 flex flex-wrap items-center gap-x-2 text-sm text-slate-500'>
          <span className='flex items-center gap-1.5'>
            <Building2 className='h-4 w-4 text-blue-600' /> {job.company}
          </span>
          <span>&bull;</span>
          <span className='flex items-center gap-1.5'>
            <MapPin className='h-4 w-4' /> {job.location}
          </span>
        </p>
        <div className='mt-2.5 flex flex-wrap items-center gap-3'>
          <span className='rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700'>
            {job.type}
          </span>
          <span className='flex items-center gap-1.5 text-sm text-slate-500'>
            <Calendar className='h-4 w-4' /> {savedLabel(job.savedDaysAgo)}
          </span>
        </div>
      </div>
    </div>

    {/* Salary */}
    <p className='flex items-center gap-2 text-base font-bold text-slate-900 lg:w-48'>
      <Wallet className='h-5 w-5 text-blue-600' /> {job.salary}
    </p>

    {/* Actions */}
    <div className='flex items-center gap-3'>
      <button
        type='button'
        className='flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-blue-700 cursor-pointer'
      >
        Apply <ArrowRight className='h-4 w-4' />
      </button>
      <button
        type='button'
        onClick={() => onRemove(job.id)}
        className='flex items-center gap-2 rounded-full border border-red-200 bg-white px-5 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50 cursor-pointer'
      >
        <Trash2 className='h-4 w-4' /> Remove
      </button>
    </div>
  </article>
)

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState(initialSavedJobs)
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('recent')
  const [lastRemoved, setLastRemoved] = useState(null) // { job, index }

  // Auto-hide the undo toast after 5 seconds
  useEffect(() => {
    if (!lastRemoved) return
    const timer = setTimeout(() => setLastRemoved(null), 5000)
    return () => clearTimeout(timer)
  }, [lastRemoved])

  function removeJob(id) {
    const index = savedJobs.findIndex((j) => j.id === id)
    if (index === -1) return
    setLastRemoved({ job: savedJobs[index], index })
    setSavedJobs((prev) => prev.filter((j) => j.id !== id))
    // TODO: call your API, e.g. axios.delete(`/api/saved-jobs/${id}`)
  }

  function undoRemove() {
    if (!lastRemoved) return
    const { job, index } = lastRemoved
    setSavedJobs((prev) => {
      const copy = [...prev]
      copy.splice(Math.min(index, copy.length), 0, job)
      return copy
    })
    setLastRemoved(null)
  }

  const visibleJobs = useMemo(() => {
    const q = search.trim().toLowerCase()
    let result = savedJobs.filter(
      (job) =>
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q)
    )

    if (sortBy === 'recent') result = [...result].sort((a, b) => a.savedDaysAgo - b.savedDaysAgo)
    if (sortBy === 'salary') result = [...result].sort((a, b) => b.salaryMin - a.salaryMin)

    return result
  }, [savedJobs, search, sortBy])

  return (
    <div className='flex min-h-screen w-full bg-slate-50 text-slate-800'>

      {/* ================= SIDEBAR ================= */}
      <aside className='hidden w-64 shrink-0 flex-col justify-between border-r border-slate-200 bg-white lg:flex'>
        <div>
          <div className='flex items-center gap-2 px-6 py-6'>
            <span className='h-8 w-8 rounded-lg bg-blue-600' />
            <h1 className='text-2xl text-slate-900' style={{ fontFamily: 'Anton' }}>
              JobSphere
            </h1>
          </div>

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

        <div className='m-4 rounded-2xl bg-gradient-to-br from-blue-50 to-slate-100 p-5 text-center'>
          <Rocket className='mx-auto h-10 w-10 text-blue-600' />
          <h4 className='mt-2 text-lg font-bold text-slate-900'>Dream Bigger</h4>
          <p className='mt-1 text-sm text-slate-600'>Your next opportunity is just a click away.</p>
          <button
            type='button'
            className='mt-4 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow transition hover:bg-blue-700 cursor-pointer'
          >
            Explore Jobs <ArrowRight className='h-4 w-4' />
          </button>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <div className='flex min-w-0 flex-1 flex-col'>

        {/* ---------- Top bar ---------- */}
        <header className='flex items-center justify-end gap-5 px-6 py-5 lg:px-8'>
          <button type='button' className='relative text-slate-600 hover:text-slate-900 cursor-pointer'>
            <Bell className='h-6 w-6' />
            <span className='absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-slate-50' />
          </button>
          <button type='button' className='flex items-center gap-2 cursor-pointer'>
            <span className='flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white'>
              KM
            </span>
            <ChevronDown className='h-4 w-4 text-slate-500' />
          </button>
        </header>

        <main className='flex-1 space-y-6 px-6 pb-10 lg:px-8'>

          {/* ---------- Banner ---------- */}
          <section className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700 p-8 text-white shadow-lg sm:p-10'>
            <div className='pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-blue-400/20' />
            <div className='pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-white/5' />

            <div className='relative flex items-center justify-between gap-6'>
              <div className='flex items-center gap-5'>
                <Bookmark className='hidden h-14 w-14 text-sky-300 sm:block' strokeWidth={2.2} />
                <div>
                  <h2 className='text-4xl font-extrabold sm:text-5xl'>
                    Saved <i className='font-serif text-sky-300'>Jobs</i>
                  </h2>
                  <p className='mt-2 text-blue-100'>Keep track of jobs you&apos;re interested in.</p>
                </div>
              </div>

              {/* Decorative cards (no stock illustration) */}
              <div className='relative mr-6 hidden h-36 w-80 lg:block'>
                {/* mock saved-job card */}
                <div className='absolute right-16 top-0 w-56 -rotate-3 rounded-2xl bg-white p-4 shadow-xl'>
                  <div className='flex items-start justify-between'>
                    <div className='space-y-2'>
                      <div className='h-2.5 w-24 rounded-full bg-slate-300' />
                      <div className='h-2 w-32 rounded-full bg-slate-200' />
                      <div className='h-2 w-20 rounded-full bg-slate-200' />
                    </div>
                    <Bookmark className='h-6 w-6 fill-blue-600 text-blue-600' />
                  </div>
                  <div className='mt-4 flex gap-2'>
                    <span className='h-5 w-14 rounded-full bg-blue-100' />
                    <span className='h-5 w-10 rounded-full bg-slate-100' />
                  </div>
                </div>

                {/* briefcase tile */}
                <div className='absolute bottom-0 right-0 flex h-20 w-20 rotate-6 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 shadow-xl'>
                  <Briefcase className='h-9 w-9 text-white' />
                </div>
              </div>
            </div>
          </section>

          {/* ---------- Count + search + sort ---------- */}
          <div className='flex flex-wrap items-center justify-between gap-4'>
            <p className='flex items-center gap-3 text-lg text-slate-700'>
              <Bookmark className='h-6 w-6 text-blue-600' />
              <span>
                <span className='font-bold text-blue-700'>{savedJobs.length}</span>{' '}
                {savedJobs.length === 1 ? 'job' : 'jobs'} you&apos;ve bookmarked
              </span>
            </p>

            {savedJobs.length > 0 && (
              <div className='flex flex-wrap items-center gap-3'>
                <div className='relative'>
                  <Search className='absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400' />
                  <input
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search saved jobs'
                    className='w-56 rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                  />
                </div>

                <div className='relative'>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className='appearance-none rounded-full border border-slate-200 bg-white py-2.5 pl-5 pr-10 text-sm font-semibold text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 cursor-pointer'
                  >
                    <option value='recent'>Recently saved</option>
                    <option value='salary'>Highest salary</option>
                  </select>
                  <ChevronDown className='pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500' />
                </div>
              </div>
            )}
          </div>

          {/* ---------- Job list ---------- */}
          {savedJobs.length === 0 ? (
            <div className='flex flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center'>
              <Bookmark className='h-10 w-10 text-slate-400' />
              <h4 className='mt-3 text-lg font-bold text-slate-900'>No saved jobs yet</h4>
              <p className='mt-1 text-sm text-slate-500'>
                Tap the bookmark icon on any job to save it here for later.
              </p>
              <button
                type='button'
                className='mt-4 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 cursor-pointer'
              >
                Explore Jobs <ArrowRight className='h-4 w-4' />
              </button>
            </div>
          ) : visibleJobs.length === 0 ? (
            <div className='rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center text-sm text-slate-500'>
              No saved jobs match &quot;{search}&quot;.
            </div>
          ) : (
            <div className='space-y-4'>
              {visibleJobs.map((job) => (
                <SavedJobRow key={job.id} job={job} onRemove={removeJob} />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* ---------- Undo toast ---------- */}
      {lastRemoved && (
        <div className='fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4 rounded-full bg-slate-900 px-5 py-3 text-sm text-white shadow-2xl'>
          <span>Removed &quot;{lastRemoved.job.title}&quot;</span>
          <button
            type='button'
            onClick={undoRemove}
            className='flex items-center gap-1.5 font-semibold text-sky-300 hover:text-sky-200 cursor-pointer'
          >
            <Undo2 className='h-4 w-4' /> Undo
          </button>
        </div>
      )}
    </div>
  )
}

export default SavedJobs