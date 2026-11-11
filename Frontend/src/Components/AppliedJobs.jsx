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
  CalendarCheck,
  Building2,
  Rocket,
  ArrowRight,
  Clock,
  CheckCircle2,
  XCircle,
  Send,
  Undo2,
  FileSearch,
} from 'lucide-react'

// ---------------- Sample data (replace with your backend data) ----------------
const initialApplications = [
  {
    id: 3,
    title: 'Senior Frontend Engineer',
    company: 'CloudKart',
    location: 'Remote',
    status: 'Under review',
    appliedDaysAgo: 2,
  },
  {
    id: 1,
    title: 'Junior MERN Stack Developer',
    company: 'TechNova',
    location: 'Mumbai',
    status: 'Interview scheduled',
    interview: 'Mon, 16 Nov · 11:00 AM',
    appliedDaysAgo: 5,
  },
  {
    id: 4,
    title: 'Backend Engineer (Node)',
    company: 'DataBridge',
    location: 'Bengaluru',
    status: 'Shortlisted',
    appliedDaysAgo: 7,
  },
  {
    id: 2,
    title: 'Frontend Developer Intern',
    company: 'PixelCraft',
    location: 'Remote',
    status: 'Applied',
    appliedDaysAgo: 8,
  },
]

const statusConfig = {
  Applied: { icon: Send, pill: 'bg-slate-100 text-slate-700 border-slate-200' },
  'Under review': { icon: Clock, pill: 'bg-blue-50 text-blue-700 border-blue-200' },
  'Interview scheduled': { icon: CalendarCheck, pill: 'bg-amber-50 text-amber-700 border-amber-200' },
  Shortlisted: { icon: CheckCircle2, pill: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  Rejected: { icon: XCircle, pill: 'bg-red-50 text-red-600 border-red-200' },
}

// Only these can still be withdrawn
const withdrawable = ['Applied', 'Under review']

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: User, label: 'Profile' },
  { icon: Briefcase, label: 'Applied Jobs', active: true },
  { icon: Bookmark, label: 'Saved Jobs' },
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

function appliedLabel(days) {
  if (days <= 0) return 'Applied today'
  if (days === 1) return 'Applied yesterday'
  if (days < 7) return `Applied ${days} days ago`
  const weeks = Math.floor(days / 7)
  return `Applied ${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`
}

// ---------------- Application row ----------------
const ApplicationRow = ({ app, onWithdraw }) => {
  const { icon: StatusIcon, pill } = statusConfig[app.status]

  return (
    <article className='flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md sm:flex-row sm:items-center'>

      {/* Logo + divider + info */}
      <div className='flex min-w-0 flex-1 items-center gap-5'>
        <div
          className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl text-3xl font-bold text-white ${
            avatarColors[(app.id - 1) % avatarColors.length]
          }`}
        >
          {app.company[0]}
        </div>

        <div className='hidden h-16 w-px bg-slate-200 sm:block' />

        <div className='min-w-0'>
          <h3 className='truncate text-xl font-bold text-slate-900'>{app.title}</h3>
          <p className='mt-1 flex flex-wrap items-center gap-x-2 text-sm text-slate-500'>
            <span className='flex items-center gap-1.5'>
              <Building2 className='h-4 w-4 text-blue-600' /> {app.company}
            </span>
            <span>&bull;</span>
            <span className='flex items-center gap-1.5'>
              <MapPin className='h-4 w-4' /> {app.location}
            </span>
          </p>
          <p className='mt-2 flex items-center gap-1.5 text-sm text-slate-500'>
            <Calendar className='h-4 w-4' /> {appliedLabel(app.appliedDaysAgo)}
          </p>
          {app.interview && (
            <p className='mt-1 flex items-center gap-1.5 text-sm font-semibold text-amber-700'>
              <CalendarCheck className='h-4 w-4' /> Interview: {app.interview}
            </p>
          )}
        </div>
      </div>

      {/* Status + actions */}
      <div className='flex items-center gap-3 sm:flex-col sm:items-end'>
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${pill}`}
        >
          <StatusIcon className='h-4 w-4' /> {app.status}
        </span>

        {withdrawable.includes(app.status) && (
          <button
            type='button'
            onClick={() => onWithdraw(app.id)}
            className='text-sm font-semibold text-slate-400 transition hover:text-red-600 cursor-pointer'
          >
            Withdraw
          </button>
        )}
      </div>
    </article>
  )
}

const AppliedJobs = () => {
  const [applications, setApplications] = useState(initialApplications)
  const [statusFilter, setStatusFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('newest')
  const [lastWithdrawn, setLastWithdrawn] = useState(null) // { app, index }

  // Auto-hide the undo toast after 5 seconds
  useEffect(() => {
    if (!lastWithdrawn) return
    const timer = setTimeout(() => setLastWithdrawn(null), 5000)
    return () => clearTimeout(timer)
  }, [lastWithdrawn])

  function withdraw(id) {
    const index = applications.findIndex((a) => a.id === id)
    if (index === -1) return
    setLastWithdrawn({ app: applications[index], index })
    setApplications((prev) => prev.filter((a) => a.id !== id))
    // TODO: call your API, e.g. axios.delete(`/api/applications/${id}`)
  }

  function undoWithdraw() {
    if (!lastWithdrawn) return
    const { app, index } = lastWithdrawn
    setApplications((prev) => {
      const copy = [...prev]
      copy.splice(Math.min(index, copy.length), 0, app)
      return copy
    })
    setLastWithdrawn(null)
  }

  // Tabs: "All" + only the statuses that exist, with counts
  const tabs = useMemo(() => {
    const counts = applications.reduce((acc, a) => {
      acc[a.status] = (acc[a.status] || 0) + 1
      return acc
    }, {})
    return [
      { label: 'All', count: applications.length },
      ...Object.keys(statusConfig)
        .filter((s) => counts[s])
        .map((s) => ({ label: s, count: counts[s] })),
    ]
  }, [applications])

  // If the active tab disappears (e.g. last item withdrawn), fall back to All
  useEffect(() => {
    if (statusFilter !== 'All' && !tabs.some((t) => t.label === statusFilter)) {
      setStatusFilter('All')
    }
  }, [tabs, statusFilter])

  const visibleApps = useMemo(() => {
    const q = search.trim().toLowerCase()
    let result = applications.filter((a) => {
      const matchesStatus = statusFilter === 'All' || a.status === statusFilter
      const matchesSearch =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.company.toLowerCase().includes(q) ||
        a.location.toLowerCase().includes(q)
      return matchesStatus && matchesSearch
    })

    result = [...result].sort((a, b) =>
      sortBy === 'newest' ? a.appliedDaysAgo - b.appliedDaysAgo : b.appliedDaysAgo - a.appliedDaysAgo
    )
    return result
  }, [applications, statusFilter, search, sortBy])

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
                <Briefcase className='hidden h-14 w-14 text-sky-300 sm:block' strokeWidth={2.2} />
                <div>
                  <h2 className='text-4xl font-extrabold sm:text-5xl'>
                    Applied <i className='font-serif text-sky-300'>Jobs</i>
                  </h2>
                  <p className='mt-2 text-blue-100'>
                    {applications.length} {applications.length === 1 ? 'application' : 'applications'} so far
                  </p>
                </div>
              </div>

              {/* Decorative cards (no stock illustration) */}
              <div className='relative mr-6 hidden h-36 w-80 lg:block'>
                <div className='absolute right-16 top-0 w-56 rotate-3 rounded-2xl bg-white p-4 shadow-xl'>
                  <div className='flex items-center gap-3'>
                    <span className='flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600'>
                      <User className='h-5 w-5' />
                    </span>
                    <div className='space-y-2'>
                      <div className='h-2.5 w-24 rounded-full bg-slate-300' />
                      <div className='h-2 w-16 rounded-full bg-slate-200' />
                    </div>
                  </div>
                  <div className='mt-4 space-y-2'>
                    <div className='h-2 w-full rounded-full bg-slate-200' />
                    <div className='h-2 w-2/3 rounded-full bg-slate-200' />
                  </div>
                </div>

                <div className='absolute right-0 top-2 flex h-16 w-16 -rotate-6 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 shadow-xl'>
                  <Send className='h-7 w-7 text-white' />
                </div>
              </div>
            </div>
          </section>

          {/* ---------- Tabs + search + sort ---------- */}
          {applications.length > 0 && (
            <div className='flex flex-wrap items-center justify-between gap-4'>
              <div className='flex flex-wrap gap-2'>
                {tabs.map(({ label, count }) => (
                  <button
                    key={label}
                    type='button'
                    onClick={() => setStatusFilter(label)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition cursor-pointer ${
                      statusFilter === label
                        ? 'border-blue-600 bg-blue-600 text-white'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700'
                    }`}
                  >
                    {label} <span className='ml-1 opacity-70'>{count}</span>
                  </button>
                ))}
              </div>

              <div className='flex flex-wrap items-center gap-3'>
                <div className='relative'>
                  <Search className='absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400' />
                  <input
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search applications'
                    className='w-56 rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                  />
                </div>

                <div className='relative'>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className='appearance-none rounded-full border border-slate-200 bg-white py-2.5 pl-5 pr-10 text-sm font-semibold text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 cursor-pointer'
                  >
                    <option value='newest'>Newest first</option>
                    <option value='oldest'>Oldest first</option>
                  </select>
                  <ChevronDown className='pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500' />
                </div>
              </div>
            </div>
          )}

          {/* ---------- Application list ---------- */}
          {applications.length === 0 ? (
            <div className='flex flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center'>
              <FileSearch className='h-10 w-10 text-slate-400' />
              <h4 className='mt-3 text-lg font-bold text-slate-900'>No applications yet</h4>
              <p className='mt-1 text-sm text-slate-500'>
                Jobs you apply to will show up here so you can track their status.
              </p>
              <button
                type='button'
                className='mt-4 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 cursor-pointer'
              >
                Explore Jobs <ArrowRight className='h-4 w-4' />
              </button>
            </div>
          ) : visibleApps.length === 0 ? (
            <div className='rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center text-sm text-slate-500'>
              No applications match your filters.
            </div>
          ) : (
            <div className='space-y-4'>
              {visibleApps.map((app) => (
                <ApplicationRow key={app.id} app={app} onWithdraw={withdraw} />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* ---------- Undo toast ---------- */}
      {lastWithdrawn && (
        <div className='fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4 rounded-full bg-slate-900 px-5 py-3 text-sm text-white shadow-2xl'>
          <span>Withdrew application for &quot;{lastWithdrawn.app.title}&quot;</span>
          <button
            type='button'
            onClick={undoWithdraw}
            className='flex items-center gap-1.5 font-semibold text-sky-300 hover:text-sky-200 cursor-pointer'
          >
            <Undo2 className='h-4 w-4' /> Undo
          </button>
        </div>
      )}
    </div>
  )
}

export default AppliedJobs