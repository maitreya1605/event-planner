function Dashboard() {
  return (
    <section className="rounded-[40px] border border-white/10 bg-slate-950/80 p-10 text-center space-y-6 shadow-2xl shadow-black/40 relative overflow-hidden">
      <div className="absolute inset-0 blur-3xl opacity-40 bg-gradient-to-br from-brand-pink/30 via-transparent to-brand-blue/30 pointer-events-none" />
      <div className="relative space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">Dashboard</p>
        <h1 className="text-3xl font-semibold">Planner dashboard is intentionally hidden.</h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          We&apos;ll light up analytics, run sheets, and concierge widgets as soon as backend services are online. Until
          then, this space remains locked to keep data secure.
        </p>
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 space-y-3 max-w-xl mx-auto">
          <div className="flex items-center justify-between text-sm text-white/70">
            <span>Status</span>
            <span className="font-semibold text-amber-300">Hidden awaiting API keys</span>
          </div>
          <div className="flex items-center justify-between text-sm text-white/70">
            <span>Next milestone</span>
            <span>Backend auth + data hydration</span>
          </div>
          <div className="flex items-center justify-between text-sm text-white/70">
            <span>ETA</span>
            <span>Owner to confirm</span>
          </div>
        </div>
        <button className="rounded-2xl px-6 py-3 border border-white/30 text-white/70 cursor-not-allowed" disabled>
          Reveal dashboard (disabled)
        </button>
      </div>
    </section>
  )
}

export default Dashboard

