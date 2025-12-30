import { Link } from 'react-router-dom'

function AdminRegister() {
  return (
    <section className="max-w-3xl mx-auto space-y-6">
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">Admin onboarding</p>
        <h1 className="text-3xl font-semibold mt-3">Create a planner workspace</h1>
        <p className="text-white/70 mt-2">
          Invite your core team now, wire automations later. Credentials remain dormant until backend approval is ready.
        </p>
        <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
          <label className="text-sm font-semibold text-white/90 md:col-span-1">
            Full name
            <input
              className="mt-2 w-full rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
              placeholder="Avery Lin"
              required
            />
          </label>
          <label className="text-sm font-semibold text-white/90 md:col-span-1">
            Work email
            <input
              type="email"
              className="mt-2 w-full rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
              placeholder="planner@studio.com"
              required
            />
          </label>
          <label className="text-sm font-semibold text-white/90 md:col-span-1">
            Agency name
            <input
              className="mt-2 w-full rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
              placeholder="Aurora Atelier"
              required
            />
          </label>
          <label className="text-sm font-semibold text-white/90 md:col-span-1">
            Region
            <select className="mt-2 w-full rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brand-blue/60">
              <option>North America</option>
              <option>Europe</option>
              <option>Middle East</option>
              <option>Asia Pacific</option>
            </select>
          </label>
          <label className="text-sm font-semibold text-white/90 md:col-span-2">
            Notes for our success team
            <textarea
              rows="3"
              className="mt-2 w-full rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
              placeholder="Share current tools, typical budgets, or concierge needs..."
            />
          </label>
          <button
            type="submit"
            className="md:col-span-2 rounded-2xl bg-gradient-to-r from-brand-pink to-brand-blue px-6 py-3 font-semibold text-slate-950 shadow-glow"
            disabled
          >
            Register workspace (awaiting backend)
          </button>
        </form>
      </div>
      <div className="flex justify-between text-sm text-white/70 flex-wrap gap-3">
        <Link to="/login/admin" className="text-brand-blue hover:underline font-semibold">
          Back to admin login
        </Link>
        <Link to="/register/client" className="hover:text-white">
          Need a client portal? Register client
        </Link>
      </div>
    </section>
  )
}

export default AdminRegister

