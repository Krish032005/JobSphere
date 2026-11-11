import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Briefcase,
  Building2,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  User,
  Search,
  Zap,
  TrendingUp,
  Check,
} from 'lucide-react'

// ---- Static data ----
const steps = [
  {
    icon: Search,
    title: 'Find Jobs',
    text: 'Browse openings that match your skills and save the ones you like.',
  },
  {
    icon: Zap,
    title: 'Apply Fast',
    text: 'Use your saved profile and resume to apply in just a few clicks.',
  },
  {
    icon: TrendingUp,
    title: 'Grow Your Career',
    text: 'Track every application and keep moving toward your next role.',
  },
]

const perks = ['Free for candidates', 'No spam, ever', 'Takes under a minute']

// ---- Small inline brand icons ----
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

// ---- Password strength helper (0 - 4) ----
function getStrength(pw) {
  let score = 0
  if (pw.length >= 8) score++
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++
  if (/\d/.test(pw)) score++
  if (/[^A-Za-z0-9]/.test(pw)) score++
  return score
}

const strengthLabels = ['Too weak', 'Weak', 'Okay', 'Good', 'Strong']
const strengthColors = [
  'bg-gray-200',
  'bg-red-500',
  'bg-amber-500',
  'bg-lime-500',
  'bg-emerald-500',
]

const SignUp = () => {
  const navigate = useNavigate()

  const [role, setRole] = useState('candidate') // 'candidate' | 'recruiter'
  const [fullName, setFullName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [agree, setAgree] = useState(false)
  const [error, setError] = useState('')

  const strength = getStrength(password)
  const passwordsMatch = confirm.length > 0 && password === confirm

  function goToLogin() {
    navigate('/login')
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }
    if (strength < 2) {
      setError('Please choose a stronger password.')
      return
    }
    if (!agree) {
      setError('Please accept the Terms of Service and Privacy Policy.')
      return
    }

    // TODO: connect to your auth API
    // e.g. axios.post('/api/auth/signup', { fullName, companyName, email, password, role })
    console.log({ role, fullName, companyName, email, password })
  }

  const inputClass =
    'w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200'

  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-gradient-to-bl from-amber-50 via-pink-50 to-rose-50 px-6 py-6 sm:px-12'>

      {/* ---------- Background decoration (pure CSS) ---------- */}
      <div className='pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-pink-300/40 blur-3xl' />
      <div className='pointer-events-none absolute top-1/2 right-1/4 h-[380px] w-[380px] rounded-full bg-amber-300/30 blur-3xl' />
      <div className='pointer-events-none absolute -bottom-40 -right-40 h-[460px] w-[460px] rounded-full bg-pink-500/20 blur-3xl' />
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
          Already have an account?
          <button
            type='button'
            onClick={goToLogin}
            className='flex items-center gap-1 font-semibold text-pink-600 transition-colors duration-200 hover:text-pink-700 cursor-pointer'
          >
            Log in <ArrowRight className='h-4 w-4' />
          </button>
        </p>
      </header>

      {/* ---------- Main content ---------- */}
      <main className='relative z-10 mt-8 flex flex-col items-center justify-center gap-16 lg:mt-12 lg:flex-row lg:items-start lg:justify-between'>

        {/* ===== LEFT: SIGN UP CARD ===== */}
        <section className='w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl shadow-pink-200/60'>

          {/* Card heading */}
          <div className='text-center'>
            <h3 className='text-3xl font-extrabold text-gray-900'>
              Create <i className='font-serif text-pink-600'>Account</i>
            </h3>
            <p className='mt-1 text-gray-500'>Join JobSphere and kickstart your career.</p>
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
          <form onSubmit={handleSubmit} className='mt-6 space-y-4'>

            {/* Full name */}
            <div>
              <label
                htmlFor='fullName'
                className='mb-1.5 flex items-center gap-2 text-sm font-semibold text-gray-800'
              >
                <User className='h-4 w-4' /> Full name
              </label>
              <input
                id='fullName'
                type='text'
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder='John Doe'
                className={inputClass}
              />
            </div>

            {/* Company name (recruiter only) */}
            {role === 'recruiter' && (
              <div>
                <label
                  htmlFor='companyName'
                  className='mb-1.5 flex items-center gap-2 text-sm font-semibold text-gray-800'
                >
                  <Building2 className='h-4 w-4' /> Company name
                </label>
                <input
                  id='companyName'
                  type='text'
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder='Your company'
                  className={inputClass}
                />
              </div>
            )}

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
                className={inputClass}
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor='password'
                className='mb-1.5 flex items-center gap-2 text-sm font-semibold text-gray-800'
              >
                <Lock className='h-4 w-4' /> Password
              </label>
              <div className='relative'>
                <input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Create a strong password'
                  className={`${inputClass} pr-12`}
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

              {/* Strength meter */}
              {password.length > 0 && (
                <div className='mt-2'>
                  <div className='flex gap-1.5'>
                    {[1, 2, 3, 4].map((bar) => (
                      <span
                        key={bar}
                        className={`h-1.5 flex-1 rounded-full transition-colors ${
                          strength >= bar ? strengthColors[strength] : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <p className='mt-1 text-xs text-gray-500'>
                    Strength: <span className='font-semibold'>{strengthLabels[strength]}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Confirm password */}
            <div>
              <label
                htmlFor='confirm'
                className='mb-1.5 flex items-center gap-2 text-sm font-semibold text-gray-800'
              >
                <Lock className='h-4 w-4' /> Confirm password
              </label>
              <div className='relative'>
                <input
                  id='confirm'
                  type={showConfirm ? 'text' : 'password'}
                  required
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder='Re-enter your password'
                  className={`${inputClass} pr-12`}
                />
                <button
                  type='button'
                  onClick={() => setShowConfirm((prev) => !prev)}
                  aria-label={showConfirm ? 'Hide password' : 'Show password'}
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 cursor-pointer'
                >
                  {showConfirm ? <EyeOff className='h-5 w-5' /> : <Eye className='h-5 w-5' />}
                </button>
              </div>
              {confirm.length > 0 && (
                <p
                  className={`mt-1 text-xs font-medium ${
                    passwordsMatch ? 'text-emerald-600' : 'text-red-500'
                  }`}
                >
                  {passwordsMatch ? 'Passwords match' : 'Passwords do not match'}
                </p>
              )}
            </div>

            {/* Terms */}
            <label className='flex items-start gap-2 text-sm text-gray-700 cursor-pointer'>
              <input
                type='checkbox'
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className='mt-0.5 h-4 w-4 accent-pink-600'
              />
              <span>
                I agree to the{' '}
                <span className='font-semibold text-pink-600 hover:text-pink-700'>
                  Terms of Service
                </span>{' '}
                and{' '}
                <span className='font-semibold text-pink-600 hover:text-pink-700'>
                  Privacy Policy
                </span>
              </span>
            </label>

            {/* Error message */}
            {error && (
              <p className='rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600'>
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type='submit'
              className='flex w-full items-center justify-center gap-2 rounded-xl bg-pink-600 py-3 text-base font-semibold text-white shadow-lg shadow-pink-300/50 transition hover:bg-pink-700 active:scale-[0.99] cursor-pointer'
            >
              Create Account <ArrowRight className='h-5 w-5' />
            </button>
          </form>

          {/* Divider */}
          <div className='my-5 flex items-center gap-3'>
            <span className='h-px flex-1 bg-gray-200' />
            <span className='text-sm text-gray-500'>or continue with</span>
            <span className='h-px flex-1 bg-gray-200' />
          </div>

          {/* Social signup */}
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

          {/* Mobile-only login link */}
          <p className='mt-5 text-center text-sm text-gray-700 sm:hidden'>
            Already have an account?{' '}
            <button
              type='button'
              onClick={goToLogin}
              className='font-semibold text-pink-600 hover:text-pink-700 cursor-pointer'
            >
              Log in
            </button>
          </p>
        </section>

        {/* ===== RIGHT: HERO CONTENT ===== */}
        <section className='hidden w-full max-w-xl lg:block lg:pt-6'>

          {/* Small banner */}
          <div className='inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5'>
            <span className='h-2.5 w-2.5 animate-pulse rounded-full bg-amber-500' />
            <p className='text-sm font-semibold text-gray-800'>Join a growing community</p>
          </div>

          {/* Main heading */}
          <h2 className='mt-6 text-5xl font-extrabold leading-[1.1] text-gray-900 xl:text-6xl'>
            Create your
            <br />
            <i className='font-serif text-pink-600'>JobSphere</i>
            <br />
            <span className='relative inline-block'>
              account
              <span className='absolute -bottom-1 left-0 h-1 w-full rounded-full bg-pink-600' />
            </span>
          </h2>

          {/* Description */}
          <p className='mt-6 max-w-md text-lg text-gray-600'>
            Take the next step in your career with endless opportunities.
          </p>

          {/* Perks */}
          <div className='mt-5 flex flex-wrap gap-2'>
            {perks.map((perk) => (
              <span
                key={perk}
                className='inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm'
              >
                <Check className='h-4 w-4 text-pink-600' /> {perk}
              </span>
            ))}
          </div>

          {/* How it works: vertical timeline */}
          <div className='relative mt-10 space-y-6 pl-2'>
            {/* vertical line */}
            <span className='absolute left-[1.65rem] top-4 bottom-4 w-px bg-pink-200' />

            {steps.map(({ icon: Icon, title, text }, index) => (
              <div key={title} className='relative flex items-start gap-4'>
                <div className='relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-md shadow-pink-200/60'>
                  <Icon className='h-6 w-6 text-pink-600' />
                </div>
                <div className='pt-0.5'>
                  <p className='text-base font-bold text-gray-900'>
                    <span className='mr-2 text-pink-600'>0{index + 1}</span>
                    {title}
                  </p>
                  <p className='max-w-sm text-sm text-gray-600'>{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <p className='mt-10 font-serif text-2xl italic text-gray-800'>
            Dream. Apply. Achieve.
            <span className='mt-1 block h-1 w-40 rounded-full bg-pink-600' />
          </p>
        </section>
      </main>
    </div>
  )
}

export default SignUp