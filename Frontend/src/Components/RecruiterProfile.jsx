import React, { useEffect, useRef, useState } from 'react'
import {
  LayoutDashboard,
  Building2,
  Briefcase,
  Users,
  Settings,
  LogOut,
  Bell,
  ChevronDown,
  Link2,
  Info,
  Pencil,
  Plus,
  ArrowRight,
  UploadCloud,
  Rocket,
  Trash2,
  Check,
  X,
} from 'lucide-react'

// ---------------- Sample data (replace with your backend data) ----------------
const initialCompany = {
  name: 'Fernway',
  initials: 'FW',
  industry: 'Software',
  size: '200–500',
  employeesText: '200–500 employees',
  location: 'Mumbai, IN',
  website: 'fernway.com',
  founded: '2018',
  about:
    'Fernway is a software company focused on building scalable and innovative solutions for businesses. We are passionate about technology, people, and creating a better digital future.',
}

// Set this to [] to see the empty state
const initialPostings = [
  { id: 1, title: 'Senior Frontend Engineer', applicants: 24, status: 'Active' },
  { id: 2, title: 'Product Designer', applicants: 9, status: 'Active' },
]

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: Building2, label: 'Company Profile', active: true },
  { icon: Briefcase, label: 'Job Postings' },
  { icon: Users, label: 'Applicants' },
  { icon: Settings, label: 'Settings' },
  { icon: LogOut, label: 'Logout' },
]

const RecruiterProfile = () => {
  const [company] = useState(initialCompany)
  const [about, setAbout] = useState(initialCompany.about)
  const [editingAbout, setEditingAbout] = useState(false)
  const [aboutDraft, setAboutDraft] = useState(initialCompany.about)

  const [postings, setPostings] = useState(initialPostings)

  const [logoUrl, setLogoUrl] = useState('')
  const [dragging, setDragging] = useState(false)
  const fileInputRef = useRef(null)

  // Free the preview URL when it changes or the page unmounts
  useEffect(() => {
    return () => {
      if (logoUrl) URL.revokeObjectURL(logoUrl)
    }
  }, [logoUrl])

  function startEditAbout() {
    setAboutDraft(about)
    setEditingAbout(true)
  }

  function saveAbout() {
    setAbout(aboutDraft.trim())
    setEditingAbout(false)
    // TODO: save to your API, e.g. axios.put('/api/company', { about: aboutDraft })
  }

  function handleLogoFile(file) {
    if (!file || !file.type.startsWith('image/')) return
    setLogoUrl(URL.createObjectURL(file))
    // TODO: upload the file to your server / cloud storage
  }

  function toggleStatus(id) {
    setPostings((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: p.status === 'Active' ? 'Closed' : 'Active' } : p
      )
    )
  }

  const overviewRows = [
    { label: 'Founded', value: company.founded },
    { label: 'Industry', value: company.industry },
    { label: 'Company size', value: company.size },
    { label: 'Location', value: company.location },
  ]

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
          <h4 className='mt-2 text-lg font-bold text-slate-900'>Hire Faster</h4>
          <p className='mt-1 text-sm text-slate-600'>Post a job and reach candidates today.</p>
          <button
            type='button'
            className='mt-4 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow transition hover:bg-blue-700 cursor-pointer'
          >
            Post a Job <ArrowRight className='h-4 w-4' />
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
              {company.initials}
            </span>
            <ChevronDown className='h-4 w-4 text-slate-500' />
          </button>
        </header>

        <main className='flex-1 space-y-6 px-6 pb-10 lg:px-8'>

          {/* ---------- Company banner ---------- */}
          <section className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700 p-6 text-white shadow-lg sm:p-8'>
            <div className='pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-blue-400/20' />
            <div className='pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-white/5' />

            <div className='relative flex items-center justify-between gap-6'>
              <div className='flex flex-col items-start gap-5 sm:flex-row sm:items-center'>
                {/* Logo box */}
                <div className='flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/30 bg-white/15 backdrop-blur'>
                  {logoUrl ? (
                    <img src={logoUrl} alt={`${company.name} logo`} className='h-full w-full object-cover' />
                  ) : (
                    <span className='text-4xl font-extrabold tracking-wide text-white/90'>
                      {company.initials}
                    </span>
                  )}
                </div>

                <div>
                  <h2 className='text-4xl font-extrabold sm:text-5xl'>{company.name}</h2>
                  <p className='mt-2 text-blue-100'>
                    {company.industry} &middot; {company.employeesText} &middot; {company.location}
                  </p>
                  <a
                    href={`https://${company.website}`}
                    target='_blank'
                    rel='noreferrer'
                    className='mt-2 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-sky-200'
                  >
                    <Link2 className='h-4 w-4' /> {company.website}
                  </a>
                </div>
              </div>

              {/* Decorative abstract building (pure CSS, no stock illustration) */}
              <div className='relative mr-6 hidden h-40 w-72 items-end justify-end gap-3 lg:flex'>
                <div className='grid h-24 w-16 grid-cols-2 gap-1.5 rounded-t-xl bg-white/10 p-2'>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} className='rounded-sm bg-sky-200/40' />
                  ))}
                </div>
                <div className='grid h-40 w-28 grid-cols-3 gap-1.5 rounded-t-xl bg-white/20 p-2.5'>
                  {Array.from({ length: 18 }).map((_, i) => (
                    <span
                      key={i}
                      className={`rounded-sm ${i % 5 === 0 ? 'bg-amber-200/80' : 'bg-sky-200/60'}`}
                    />
                  ))}
                </div>
                <div className='grid h-32 w-20 grid-cols-2 gap-1.5 rounded-t-xl bg-white/10 p-2'>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i} className='rounded-sm bg-sky-200/40' />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ---------- Two column content ---------- */}
          <div className='grid grid-cols-1 gap-6 xl:grid-cols-3'>

            {/* ===== LEFT COLUMN ===== */}
            <div className='space-y-6 xl:col-span-2'>

              {/* About the company */}
              <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
                <div className='mb-4 flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <Info className='h-5 w-5 text-blue-600' />
                    <h3 className='text-lg font-bold text-slate-900'>About the company</h3>
                  </div>

                  {!editingAbout && (
                    <button
                      type='button'
                      onClick={startEditAbout}
                      className='flex items-center gap-1.5 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-100 cursor-pointer'
                    >
                      <Pencil className='h-4 w-4' /> Edit
                    </button>
                  )}
                </div>

                {editingAbout ? (
                  <div>
                    <textarea
                      value={aboutDraft}
                      onChange={(e) => setAboutDraft(e.target.value)}
                      rows={5}
                      className='w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                    />
                    <div className='mt-3 flex justify-end gap-2'>
                      <button
                        type='button'
                        onClick={() => setEditingAbout(false)}
                        className='flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 cursor-pointer'
                      >
                        <X className='h-4 w-4' /> Cancel
                      </button>
                      <button
                        type='button'
                        onClick={saveAbout}
                        disabled={!aboutDraft.trim()}
                        className='flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer'
                      >
                        <Check className='h-4 w-4' /> Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className='max-w-3xl leading-relaxed text-slate-600'>{about}</p>
                )}
              </div>

              {/* Job postings */}
              <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
                <div className='mb-4 flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <Briefcase className='h-5 w-5 text-blue-600' />
                    <h3 className='text-lg font-bold text-slate-900'>Job postings</h3>
                  </div>
                  <button
                    type='button'
                    className='flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition hover:text-blue-800 cursor-pointer'
                  >
                    Post a new job <ArrowRight className='h-4 w-4' />
                  </button>
                </div>

                {postings.length === 0 ? (
                  <div className='flex flex-col items-start justify-between gap-4 rounded-xl bg-slate-50 px-5 py-5 sm:flex-row sm:items-center'>
                    <div>
                      <p className='text-lg font-bold text-slate-900'>No active job postings yet.</p>
                      <p className='text-sm text-slate-500'>Start hiring top talent today!</p>
                    </div>
                    <button
                      type='button'
                      className='flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-blue-700 cursor-pointer'
                    >
                      <Plus className='h-4 w-4' /> Post Job
                    </button>
                  </div>
                ) : (
                  <div className='divide-y divide-slate-100'>
                    {postings.map((post) => (
                      <div
                        key={post.id}
                        className='flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between'
                      >
                        <div>
                          <p className='font-bold text-slate-900'>{post.title}</p>
                          <p className='flex items-center gap-1.5 text-sm text-slate-500'>
                            <Users className='h-4 w-4' /> {post.applicants} applicants
                          </p>
                        </div>

                        <div className='flex items-center gap-4'>
                          <span
                            className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-semibold ${
                              post.status === 'Active'
                                ? 'bg-emerald-50 text-emerald-700'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            <span
                              className={`h-2 w-2 rounded-full ${
                                post.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-400'
                              }`}
                            />
                            {post.status}
                          </span>
                          <button
                            type='button'
                            onClick={() => toggleStatus(post.id)}
                            className='text-sm font-semibold text-slate-400 transition hover:text-blue-600 cursor-pointer'
                          >
                            {post.status === 'Active' ? 'Close' : 'Reopen'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* ===== RIGHT COLUMN ===== */}
            <div className='space-y-6'>

              {/* Overview */}
              <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
                <div className='mb-4 flex items-center gap-3'>
                  <Briefcase className='h-5 w-5 text-blue-600' />
                  <h3 className='text-lg font-bold text-slate-900'>Overview</h3>
                </div>

                <div className='divide-y divide-slate-100'>
                  {overviewRows.map(({ label, value }) => (
                    <div key={label} className='flex items-center justify-between py-3 text-sm'>
                      <span className='text-slate-500'>{label}</span>
                      <span className='font-semibold text-slate-900'>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Company logo */}
              <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
                <div className='mb-4 flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <Building2 className='h-5 w-5 text-blue-600' />
                    <h3 className='text-lg font-bold text-slate-900'>Company logo</h3>
                  </div>
                  {logoUrl && (
                    <button
                      type='button'
                      onClick={() => setLogoUrl('')}
                      aria-label='Remove logo'
                      className='flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500 transition hover:bg-red-100 cursor-pointer'
                    >
                      <Trash2 className='h-4 w-4' />
                    </button>
                  )}
                </div>

                <input
                  ref={fileInputRef}
                  type='file'
                  accept='image/*'
                  className='hidden'
                  onChange={(e) => handleLogoFile(e.target.files?.[0])}
                />

                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => {
                    e.preventDefault()
                    setDragging(true)
                  }}
                  onDragLeave={() => setDragging(false)}
                  onDrop={(e) => {
                    e.preventDefault()
                    setDragging(false)
                    handleLogoFile(e.dataTransfer.files?.[0])
                  }}
                  className={`flex cursor-pointer flex-col items-center rounded-xl border-2 border-dashed px-4 py-8 text-center transition ${
                    dragging
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-blue-300 bg-blue-50/50 hover:bg-blue-50'
                  }`}
                >
                  {logoUrl ? (
                    <img
                      src={logoUrl}
                      alt='Company logo preview'
                      className='h-16 w-16 rounded-xl object-cover'
                    />
                  ) : (
                    <UploadCloud className='h-9 w-9 text-blue-600' />
                  )}
                  <p className='mt-2 text-sm font-semibold text-blue-700'>
                    {logoUrl ? 'Replace logo' : 'Upload logo'}
                  </p>
                  <p className='text-xs text-slate-500'>Click or drag an image here (PNG, JPG)</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default RecruiterProfile