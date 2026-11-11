import React, { useMemo, useState } from 'react'
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
  SlidersHorizontal,
  LayoutGrid,
  List,
  Wallet,
  Building2,
  Rocket,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock,
  SearchX,
} from 'lucide-react'

// ---------------- Sample data (replace with your backend data) ----------------
const jobsData = [
  {
    id: 1,
    title: 'Junior MERN Stack Developer',
    company: 'TechNova',
    location: 'Mumbai',
    type: 'Full-time',
    level: 'Entry level',
    years: '0–1 years',
    salary: '₹3L – ₹5L',
    salaryMin: 3,
    posted: 1,
    description: 'Build and maintain REST APIs and React interfaces using MongoDB, Express and Node.js.',
  },
  {
    id: 2,
    title: 'Frontend Developer Intern',
    company: 'PixelCraft',
    location: 'Remote',
    type: 'Internship',
    level: 'Entry level',
    years: '0 years',
    salary: '₹15K – ₹25K / mo',
    salaryMin: 1.8,
    posted: 2,
    description: 'Work with senior developers on responsive UI using React and Tailwind CSS.',
  },
  {
    id: 3,
    title: 'Senior Frontend Engineer',
    company: 'CloudKart',
    location: 'Remote',
    type: 'Full-time',
    level: 'Senior',
    years: '5+ years',
    salary: '₹28L – ₹35L',
    salaryMin: 28,
    posted: 3,
    description: 'Build scalable web applications using React and modern web technologies.',
  },
  {
    id: 4,
    title: 'Backend Engineer (Node)',
    company: 'DataBridge',
    location: 'Bengaluru',
    type: 'Contract',
    level: 'Mid level',
    years: '3+ years',
    salary: '₹18L – ₹22L',
    salaryMin: 18,
    posted: 4,
    description: 'Work on high-scale backend systems using Node.js and AWS.',
  },
  {
    id: 5,
    title: 'Product Designer',
    company: 'Studio Kite',
    location: 'Bengaluru',
    type: 'Full-time',
    level: 'Mid level',
    years: '3+ years',
    salary: '₹20L – ₹26L',
    salaryMin: 20,
    posted: 5,
    description: 'Design intuitive and impactful product experiences for web and mobile.',
  },
  {
    id: 6,
    title: 'QA Automation Engineer',
    company: 'Finlytics',
    location: 'Delhi',
    type: 'Full-time',
    level: 'Mid level',
    years: '2+ years',
    salary: '₹8L – ₹12L',
    salaryMin: 8,
    posted: 6,
    description: 'Create and maintain automated test suites for a fast-growing fintech product.',
  },
  {
    id: 7,
    title: 'Part-time React Tutor',
    company: 'LearnLoop',
    location: 'Remote',
    type: 'Part-time',
    level: 'Entry level',
    years: '1+ years',
    salary: '₹20K – ₹30K / mo',
    salaryMin: 2.4,
    posted: 7,
    description: 'Teach React fundamentals to beginners in live online sessions.',
  },
  {
    id: 8,
    title: 'Engineering Lead, Platform',
    company: 'Orbit Systems',
    location: 'Mumbai',
    type: 'Full-time',
    level: 'Lead',
    years: '8+ years',
    salary: '₹45L – ₹60L',
    salaryMin: 45,
    posted: 8,
    description: 'Lead a team of engineers building the core platform and developer tooling.',
  },
]

const filterGroups = [
  { key: 'type', title: 'Job Type', options: ['Full-time', 'Part-time', 'Contract', 'Internship'] },
  { key: 'level', title: 'Experience', options: ['Entry level', 'Mid level', 'Senior', 'Lead'] },
  { key: 'location', title: 'Location', options: ['Remote', 'Mumbai', 'Bengaluru', 'Delhi'] },
]

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: User, label: 'Profile' },
  { icon: Briefcase, label: 'Applied Jobs' },
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

const emptyFilters = { type: [], level: [], location: [] }

// ---------------- Job card ----------------
const JobCard = ({ job, isList, saved, onToggleSave }) => (
  <article
    className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md ${
      isList ? 'flex flex-col gap-4 lg:flex-row lg:items-center' : 'flex flex-col gap-4'
    }`}
  >
    {/* Logo + title */}
    <div className='flex min-w-0 flex-1 items-center gap-4'>
      <div
        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-2xl font-bold text-white ${
          avatarColors[(job.id - 1) % avatarColors.length]
        }`}
      >
        {job.company[0]}
      </div>

      <div className='min-w-0'>
        <h3 className='truncate text-lg font-bold text-slate-900'>{job.title}</h3>
        <p className='mt-0.5 flex flex-wrap items-center gap-x-2 text-sm text-slate-500'>
          <span className='flex items-center gap-1'>
            <Building2 className='h-3.5 w-3.5' /> {job.company}
          </span>
          <span>&bull;</span>
          <span className='flex items-center gap-1'>
            <MapPin className='h-3.5 w-3.5' /> {job.location}
          </span>
        </p>
        <div className='mt-2 flex flex-wrap gap-2'>
          <span className='rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700'>
            {job.type}
          </span>
          <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600'>
            {job.years}
          </span>
        </div>
      </div>
    </div>

    {/* Salary + description */}
    <div className={isList ? 'lg:w-64' : ''}>
      <p className='flex items-center gap-2 text-sm font-bold text-slate-900'>
        <Wallet className='h-4 w-4 text-blue-600' /> {job.salary}
      </p>
      <p className='mt-1 text-sm text-slate-500'>{job.description}</p>
      <p className='mt-2 flex items-center gap-1 text-xs text-slate-400'>
        <Clock className='h-3 w-3' /> Posted {job.posted}d ago
      </p>
    </div>

    {/* Actions */}
    <div className={`flex items-center gap-3 ${isList ? 'lg:flex-col-reverse lg:items-end' : 'justify-between'}`}>
      <button
        type='button'
        className='flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-blue-700 cursor-pointer'
      >
        Apply Now <ArrowRight className='h-4 w-4' />
      </button>
      <button
        type='button'
        onClick={() => onToggleSave(job.id)}
        aria-label={saved ? 'Remove from saved' : 'Save job'}
        className={`flex h-10 w-10 items-center justify-center rounded-full transition cursor-pointer ${
          saved ? 'bg-blue-50 text-blue-600' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-700'
        }`}
      >
        <Bookmark className={`h-5 w-5 ${saved ? 'fill-blue-600' : ''}`} />
      </button>
    </div>
  </article>
)

// ---------------- Filter group (collapsible) ----------------
const FilterGroup = ({ group, selected, onToggle }) => {
  const [open, setOpen] = useState(true)

  return (
    <div className='border-t border-slate-100 py-4'>
      <button
        type='button'
        onClick={() => setOpen((prev) => !prev)}
        className='flex w-full items-center justify-between text-left cursor-pointer'
      >
        <span className='text-sm font-bold text-slate-900'>{group.title}</span>
        <ChevronDown
          className={`h-4 w-4 text-slate-500 transition-transform ${open ? '' : '-rotate-90'}`}
        />
      </button>

      {open && (
        <div className='mt-3 space-y-2.5'>
          {group.options.map((option) => (
            <label
              key={option}
              className='flex items-center gap-3 text-sm text-slate-700 cursor-pointer'
            >
              <input
                type='checkbox'
                checked={selected.includes(option)}
                onChange={() => onToggle(group.key, option)}
                className='h-4 w-4 rounded accent-blue-600'
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

const SearchJob = () => {
  // search inputs (draft) and applied search
  const [queryInput, setQueryInput] = useState('')
  const [locationInput, setLocationInput] = useState('')
  const [applied, setApplied] = useState({ query: '', location: '' })

  const [filters, setFilters] = useState(emptyFilters)
  const [sortBy, setSortBy] = useState('relevant')
  const [view, setView] = useState('list') // 'list' | 'grid'
  const [savedIds, setSavedIds] = useState([])

  function handleSearch(e) {
    e.preventDefault()
    setApplied({ query: queryInput.trim(), location: locationInput.trim() })
  }

  function toggleFilter(key, value) {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }))
  }

  function clearAll() {
    setFilters(emptyFilters)
    setQueryInput('')
    setLocationInput('')
    setApplied({ query: '', location: '' })
  }

  function toggleSave(id) {
    setSavedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  const visibleJobs = useMemo(() => {
    const q = applied.query.toLowerCase()
    const loc = applied.location.toLowerCase()

    let result = jobsData.filter((job) => {
      const matchesQuery =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.description.toLowerCase().includes(q)
      const matchesLocation = !loc || job.location.toLowerCase().includes(loc)
      const matchesFilters = filterGroups.every(
        ({ key }) => filters[key].length === 0 || filters[key].includes(job[key])
      )
      return matchesQuery && matchesLocation && matchesFilters
    })

    if (sortBy === 'newest') result = [...result].sort((a, b) => a.posted - b.posted)
    if (sortBy === 'salary') result = [...result].sort((a, b) => b.salaryMin - a.salaryMin)

    return result
  }, [applied, filters, sortBy])

  const isList = view === 'list'

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
      <main className='min-w-0 flex-1 space-y-6 px-6 py-6 lg:px-8'>

        {/* ---------- Hero ---------- */}
        <section className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700 p-6 text-white shadow-lg sm:p-8'>
          <div className='pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-blue-400/20' />
          <div className='pointer-events-none absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-white/5' />

          {/* Bell + avatar */}
          <div className='relative z-10 flex justify-end'>
            <div className='flex items-center gap-5'>
              <button type='button' className='relative text-blue-100 hover:text-white cursor-pointer'>
                <Bell className='h-6 w-6' />
                <span className='absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-blue-900' />
              </button>
              <button type='button' className='flex items-center gap-2 cursor-pointer'>
                <span className='flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-blue-800'>
                  KM
                </span>
                <ChevronDown className='h-4 w-4 text-blue-100' />
              </button>
            </div>
          </div>

          <div className='relative z-10 flex items-center justify-between gap-6'>
            <div className='max-w-xl'>
              <h2 className='text-4xl font-extrabold leading-tight sm:text-5xl'>
                Find Your
                <br />
                Dream <i className='font-serif text-sky-300'>Job</i>
              </h2>
              <p className='mt-3 text-blue-100'>
                Explore opportunities from growing companies and build your career.
              </p>
            </div>

            {/* Decorative info cards (no stock illustration) */}
            <div className='relative mr-6 hidden h-40 w-96 xl:block'>
              <div className='absolute right-24 top-0 flex -rotate-3 items-center gap-3 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-xl'>
                <span className='flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600'>
                  <Briefcase className='h-5 w-5' />
                </span>
                <div>
                  <p className='text-sm font-bold'>{jobsData.length} open roles</p>
                  <p className='text-xs text-slate-500'>Updated daily</p>
                </div>
              </div>

              <div className='absolute right-0 top-14 flex rotate-2 items-center gap-3 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-xl'>
                <span className='flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600'>
                  <BadgeCheck className='h-5 w-5' />
                </span>
                <div>
                  <p className='text-sm font-bold'>Verified companies</p>
                  <p className='text-xs text-slate-500'>Hiring right now</p>
                </div>
              </div>

              <div className='absolute bottom-0 right-32 flex -rotate-2 items-center gap-3 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-xl'>
                <span className='flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600'>
                  <CheckCircle2 className='h-5 w-5' />
                </span>
                <div>
                  <p className='text-sm font-bold'>Easy Apply</p>
                  <p className='text-xs text-slate-500'>One click with your profile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search bar */}
          <form
            onSubmit={handleSearch}
            className='relative z-10 mt-8 flex flex-col gap-3 rounded-2xl bg-white p-2 shadow-xl md:flex-row md:items-center md:rounded-full'
          >
            <div className='flex flex-1 items-center gap-3 px-4'>
              <Search className='h-5 w-5 shrink-0 text-slate-400' />
              <input
                type='text'
                value={queryInput}
                onChange={(e) => setQueryInput(e.target.value)}
                placeholder='Job title, skill, or company'
                className='w-full bg-transparent py-3 text-sm text-slate-900 placeholder-slate-400 outline-none'
              />
            </div>

            <div className='hidden h-8 w-px bg-slate-200 md:block' />

            <div className='flex items-center gap-3 px-4 md:w-72'>
              <MapPin className='h-5 w-5 shrink-0 text-slate-400' />
              <input
                type='text'
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                placeholder='Location'
                className='w-full bg-transparent py-3 text-sm text-slate-900 placeholder-slate-400 outline-none'
              />
            </div>

            <button
              type='submit'
              className='flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 cursor-pointer'
            >
              <Search className='h-4 w-4' /> Search
            </button>
          </form>
        </section>

        {/* ---------- Filters + results ---------- */}
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-[18rem_1fr]'>

          {/* ===== Filter panel ===== */}
          <aside className='h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
            <div className='mb-2 flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <SlidersHorizontal className='h-5 w-5 text-blue-600' />
                <h3 className='text-lg font-bold text-slate-900'>Filter Jobs</h3>
              </div>
              <button
                type='button'
                onClick={clearAll}
                className='text-sm font-semibold text-blue-600 hover:text-blue-800 cursor-pointer'
              >
                Clear All
              </button>
            </div>

            {filterGroups.map((group) => (
              <FilterGroup
                key={group.key}
                group={group}
                selected={filters[group.key]}
                onToggle={toggleFilter}
              />
            ))}
          </aside>

          {/* ===== Results ===== */}
          <section className='min-w-0'>
            {/* Toolbar */}
            <div className='mb-4 flex flex-wrap items-center justify-between gap-3'>
              <p className='text-slate-600'>
                <span className='font-bold text-blue-700'>{visibleJobs.length}</span>{' '}
                {visibleJobs.length === 1 ? 'Job' : 'Jobs'} found
              </p>

              <div className='flex items-center gap-3'>
                <div className='relative'>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className='appearance-none rounded-full border border-slate-200 bg-white py-2.5 pl-5 pr-10 text-sm font-semibold text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 cursor-pointer'
                  >
                    <option value='relevant'>Most Relevant</option>
                    <option value='newest'>Newest First</option>
                    <option value='salary'>Highest Salary</option>
                  </select>
                  <ChevronDown className='pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500' />
                </div>

                <div className='flex rounded-full border border-slate-200 bg-white p-1'>
                  <button
                    type='button'
                    onClick={() => setView('grid')}
                    aria-label='Grid view'
                    className={`flex h-8 w-9 items-center justify-center rounded-full transition cursor-pointer ${
                      view === 'grid' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    <LayoutGrid className='h-4 w-4' />
                  </button>
                  <button
                    type='button'
                    onClick={() => setView('list')}
                    aria-label='List view'
                    className={`flex h-8 w-9 items-center justify-center rounded-full transition cursor-pointer ${
                      view === 'list' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    <List className='h-4 w-4' />
                  </button>
                </div>
              </div>
            </div>

            {/* Job cards */}
            {visibleJobs.length === 0 ? (
              <div className='flex flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center'>
                <SearchX className='h-10 w-10 text-slate-400' />
                <h4 className='mt-3 text-lg font-bold text-slate-900'>No jobs match your search</h4>
                <p className='mt-1 text-sm text-slate-500'>
                  Try removing some filters or searching with different keywords.
                </p>
                <button
                  type='button'
                  onClick={clearAll}
                  className='mt-4 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 cursor-pointer'
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className={isList ? 'space-y-4' : 'grid grid-cols-1 gap-4 md:grid-cols-2'}>
                {visibleJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    isList={isList}
                    saved={savedIds.includes(job.id)}
                    onToggleSave={toggleSave}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  )
}

export default SearchJob