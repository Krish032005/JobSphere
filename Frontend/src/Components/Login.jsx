import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Briefcase,
  Building2,
  Users,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  User,
  MapPin,
} from 'lucide-react'

// ---- Static data (swap with real counts from your backend later) ----
const stats = [
  { icon: Briefcase, value: '50+', label: 'Jobs Listed' },
  { icon: Building2, value: '10+', label: 'Companies' },
  { icon: Users, value: '100+', label: 'Registered Users' },
]

const sampleJobs = [
  {
    initial: 'T',
    color: 'bg-indigo-500',
    title: 'Frontend Developer',
    meta: 'Mumbai',
    type: 'Full-time',
    rotate: '-rotate-2',
    offset: 'ml-0',
  },
  {
    initial: 'N',
    color: 'bg-emerald-500',
    title: 'MERN Stack Developer',
    meta: 'Remote',
    type: 'Full-time',
    rotate: 'rotate-2',
    offset: 'ml-12',
  },
]

// ---- Small inline brand icons (lucide has no Google logo) ----
const GoogleIcon = () => (
  <svg viewBox='0 0 48 48' className='w-5 h-5'>
    <path fill='#EA4335' d='M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z' />
    <path fill='#4285F4' d='M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z' />
    <path fill='#FBBC05' d='M10.5 28.7c-.5-1.5-.8-3-.8-4.7s.3-3.2.8-4.7l-7.9-6.1C.9 16.4 0 20.1 0 24s.9 7.6 2.6 10.8l7.9-6.1z' />
    <path fill='#34A853' d='M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.8 2.3-8.4 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z' />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox='0 0 24 24' className='w-5 h-5' fill='#0A66C2'>
    <path d='M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z' />
  </svg>
)

const Login = () => {
  const navigate = useNavigate()

  const [role, setRole] = useState('candidate') // 'candidate' | 'recruiter'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(false)

  function goToSignup() {
    navigate('/signup')
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: connect to your auth API
    // e.g. axios.post('/api/auth/login', { email, password, role, remember })
    console.log({ email, password, role, remember })
  }

  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 px-6 py-6 sm:px-12'>

      {/* ---------- Background decoration (pure CSS, no images) ---------- */}
      <div className='pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-pink-300/40 blur-3xl' />
      <div className='pointer-events-none absolute top-1/3 left-1/3 h-[380px] w-[380px] rounded-full bg-amber-300/30 blur-3xl' />
      <div className='pointer-events-none absolute -bottom-40 -left-40 h-[460px] w-[460px] rounded-full bg-pink-500/20 blur-3xl' />
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.07)_1px,transparent_1px)] [background-size:24px_24px]' />

      {/* ---------- Header ---------- */}
      <header className='relative z-10 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <span className='h-8 w-8 rounded-full bg-amber-400' />
          <h1
            className='text-2xl sm:text-3xl text-gray-900'
            style={{ fontFamily: 'Anton' }}
          >
            JobSphere
          </h1>
        </div>

        <p className='hidden sm:flex items-center gap-1 text-sm font-medium text-gray-800'>
          Don&apos;t have an account?
          <button
            type='button'
            onClick={goToSignup}
            className='flex items-center gap-1 font-semibold text-pink-600 transition-colors duration-200 hover:text-pink-700 cursor-pointer'
          >
            Sign up <ArrowRight className='h-4 w-4' />
          </button>
        </p>
      </header>

      {/* ---------- Main content ---------- */}
      <main className='relative z-10 mt-10 flex flex-col items-center justify-between gap-12 lg:mt-16 lg:flex-row lg:items-start'>

        {/* ===== LEFT CONTENT ===== */}
        <section className='hidden w-full max-w-xl lg:block'>

          {/* Small banner */}
          <div className='inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5'>
            <span className='h-2.5 w-2.5 animate-pulse rounded-full bg-amber-500' />
            <p className='text-sm font-semibold text-gray-800'>
              Find <span>&bull;</span> Apply <span>&bull;</span> Grow
            </p>
          </div>

          {/* Main heading */}
          <h2 className='mt-6 text-5xl font-extrabold leading-[1.1] text-gray-900 xl:text-6xl'>
            Your next <i className='font-serif text-pink-600'>big</i>
            <br />
            opportunity
            <br />
            is{' '}
            <span className='relative inline-block'>
              waiting.
              <span className='absolute -bottom-1 left-0 h-1 w-full rounded-full bg-pink-600' />
            </span>
          </h2>

          {/* Description */}
          <p className='mt-6 max-w-md text-lg text-gray-600'>
            Discover top jobs, connect with leading companies and build your future.
          </p>

          {/* Sample job cards */}
          <div className='mt-8 space-y-3'>
            {sampleJobs.map((job) => (
              <div
                key={job.title}
                className={`flex w-80 items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-lg shadow-pink-200/50 backdrop-blur ${job.rotate} ${job.offset}`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg font-bold text-white ${job.color}`}
                >
                  {job.initial}
                </div>

                <div className='flex-1'>
                  <p className='text-sm font-bold text-gray-900'>{job.title}</p>
                  <p className='flex items-center gap-1 text-xs text-gray-500'>
                    <MapPin className='h-3 w-3' /> {job.meta}
                  </p>
                </div>

                <span className='rounded-full bg-pink-100 px-2.5 py-1 text-[11px] font-semibold text-pink-600'>
                  {job.type}
                </span>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div className='mt-8 flex w-fit items-center rounded-2xl bg-white/70 px-6 py-4 shadow-md backdrop-blur-md'>
            {stats.map(({ icon: Icon, value, label }, index) => (
              <div
                key={label}
                className={`flex items-center gap-3 px-5 ${
                  index === 0 ? 'pl-0' : 'border-l border-gray-300'
                } ${index === stats.length - 1 ? 'pr-0' : ''}`}
              >
                <Icon className='h-6 w-6 text-pink-600' />
                <div>
                  <p className='text-xl font-bold leading-none text-gray-900'>{value}</p>
                  <p className='text-sm text-gray-500'>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== RIGHT: LOGIN CARD ===== */}
        <section className='w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl shadow-pink-200/60'>

          {/* Card heading */}
          <div className='text-center'>
            <div className='mb-3 flex items-center justify-center gap-2'>
              <span className='h-6 w-6 rounded-full bg-amber-400' />
              <span
                className='text-2xl text-gray-900'
                style={{ fontFamily: 'Anton' }}
              >
                JobSphere
              </span>
            </div>
            <h3 className='text-3xl font-extrabold text-gray-900'>
              Welcome <i className='font-serif text-pink-600'>Back!</i>
            </h3>
            <p className='mt-1 text-gray-500'>Sign in to continue your journey.</p>
          </div>

          {/* Role toggle */}
          <div className='mt-6 grid grid-cols-2 rounded-full border border-gray-200 bg-gray-100 p-1'>
            <button
              type='button'
              onClick={() => setRole('candidate')}
              className={`flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                role === 'candidate'
                  ? 'bg-gray-900 text-white shadow'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <User className='h-4 w-4' /> Candidate
            </button>
            <button
              type='button'
              onClick={() => setRole('recruiter')}
              className={`flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                role === 'recruiter'
                  ? 'bg-gray-900 text-white shadow'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Briefcase className='h-4 w-4' /> Recruiter
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className='mt-6 space-y-5'>

            {/* Email */}
            <div>
              <label
                htmlFor='email'
                className='mb-1.5 flex items-center gap-2 text-sm font-semibold text-gray-800'
              >
                <Mail className='h-4 w-4' /> Email address
              </label>
              <input
                id='email'
                type='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='you@example.com'
                className='w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200'
              />
            </div>

            {/* Password */}
            <div>
              <div className='mb-1.5 flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='flex items-center gap-2 text-sm font-semibold text-gray-800'
                >
                  <Lock className='h-4 w-4' /> Password
                </label>
                <button
                  type='button'
                  className='text-sm font-semibold text-pink-600 hover:text-pink-700 cursor-pointer'
                >
                  Forgot password?
                </button>
              </div>

              <div className='relative'>
                <input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='••••••••'
                  className='w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 text-gray-900 placeholder-gray-400 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 cursor-pointer'
                >
                  {showPassword ? <EyeOff className='h-5 w-5' /> : <Eye className='h-5 w-5' />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label className='flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer'>
              <input
                type='checkbox'
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className='h-4 w-4 accent-pink-600'
              />
              Remember me
            </label>

            {/* Submit */}
            <button
              type='submit'
              className='flex w-full items-center justify-center gap-2 rounded-xl bg-pink-600 py-3 text-base font-semibold text-white shadow-lg shadow-pink-300/50 transition hover:bg-pink-700 active:scale-[0.99] cursor-pointer'
            >
              Log in <ArrowRight className='h-5 w-5' />
            </button>
          </form>

          {/* Divider */}
          <div className='my-6 flex items-center gap-3'>
            <span className='h-px flex-1 bg-gray-200' />
            <span className='text-sm text-gray-500'>or continue with</span>
            <span className='h-px flex-1 bg-gray-200' />
          </div>

          {/* Social login */}
          <div className='grid grid-cols-2 gap-3'>
            <button
              type='button'
              className='flex items-center justify-center gap-2 rounded-xl border border-gray-200 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-50 cursor-pointer'
            >
              <GoogleIcon /> Google
            </button>
            <button
              type='button'
              className='flex items-center justify-center gap-2 rounded-xl border border-gray-200 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-50 cursor-pointer'
            >
              <LinkedInIcon /> LinkedIn
            </button>
          </div>

          {/* Footer link */}
          <p className='mt-6 text-center text-sm text-gray-700'>
            New here?{' '}
            <button
              type='button'
              onClick={goToSignup}
              className='font-semibold text-pink-600 hover:text-pink-700 cursor-pointer'
            >
              Create an account
            </button>
          </p>
        </section>
      </main>
    </div>
  )
}

export default Login