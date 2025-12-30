import { Link } from 'react-router-dom'

function AdminLogin() {
  return (
    <section className="max-w-xl mx-auto space-y-6">
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-black/30">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">Admin access</p>
        <h1 className="text-3xl font-semibold mt-3">Planner control room login</h1>
        <p className="text-white/70 mt-2">Secure portal for internal teams. MFA & audit logging enforced when backend is live.</p>
        <form className="space-y-4 mt-6" onSubmit={(event) => event.preventDefault()}>
          <label className="block text-sm font-semibold text-white/90">
            Work email
            <input
              className="mt-2 w-full rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
              type="email"
              placeholder="you@aurora.events"
              required
            />
          </label>
          <label className="block text-sm font-semibold text-white/90">
            Access key
            <input
              className="mt-2 w-full rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
              type="password"
              placeholder="••••••••"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-brand-pink to-brand-blue px-4 py-3 font-semibold text-slate-950 shadow-glow"
            disabled
          >
            Launch admin (locked)
          </button>
        </form>
        <p className="text-xs text-white/60 mt-3 text-center">Feature hidden until backend auth service is wired.</p>
      </div>
      <div className="flex justify-between text-sm text-white/70 flex-wrap gap-3">
        <Link to="/register/admin" className="text-brand-blue hover:underline font-semibold">
          Need an admin profile? Register
        </Link>
        <Link to="/login/client" className="hover:text-white">
          Switch to client login
        </Link>
      </div>
    </section>
  )
}

export default AdminLogin

