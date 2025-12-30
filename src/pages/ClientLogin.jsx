import { Link } from 'react-router-dom'

function ClientLogin() {
  return (
    <section className="max-w-xl mx-auto space-y-6">
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">Client portal</p>
        <h1 className="text-3xl font-semibold mt-3">Log in to your celebration</h1>
        <p className="text-white/70 mt-2">Track RSVPs, budgets, and concierge chats in one portal once the backend is live.</p>
        <form className="space-y-4 mt-6" onSubmit={(event) => event.preventDefault()}>
          <label className="block text-sm font-semibold text-white/90">
            Event code
            <input
              className="mt-2 w-full rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
              placeholder="EVT-2025-PRISM"
              required
            />
          </label>
          <label className="block text-sm font-semibold text-white/90">
            Email
            <input
              type="email"
              className="mt-2 w-full rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
              placeholder="client@email.com"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-2xl border border-white/30 px-4 py-3 font-semibold text-white hover:border-white transition"
            disabled
          >
            Enter portal (coming soon)
          </button>
        </form>
        <p className="text-xs text-white/60 mt-3 text-center">Portal visibility is hidden until backend APIs are wired.</p>
      </div>
      <div className="flex justify-between text-sm text-white/70 flex-wrap gap-3">
        <Link to="/register/client" className="text-brand-blue hover:underline font-semibold">
          First time? Register portal
        </Link>
        <Link to="/login/admin" className="hover:text-white">
          Planner login
        </Link>
      </div>
    </section>
  )
}

export default ClientLogin

