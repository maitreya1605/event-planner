const packages = [
  {
    title: 'Signature Wedding',
    descriptor: 'Luxury · Hybrid',
    price: 'from $45k',
    bullets: ['Full creative direction', 'Couture styling board', 'Concierge guest messaging'],
    accent: 'from-brand-pink/40 to-transparent',
  },
  {
    title: 'Coastal Retreat',
    descriptor: 'Destination · Intimate',
    price: 'from $28k',
    bullets: ['Travel + hospitality ops', '3-day experience map', 'On-site production pod'],
    accent: 'from-brand-blue/40 to-transparent',
  },
  {
    title: 'Corporate Summit',
    descriptor: 'Brand · Experiential',
    price: 'from $36k',
    bullets: ['Hybrid AV studio', 'Executive concierge desk', 'Sponsorship-ready assets'],
    accent: 'from-violet-400/40 to-transparent',
  },
]

function Booking() {
  return (
    <section className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">Bookings</p>
        <h1 className="text-3xl font-semibold">Lock dates, brief the team, and spin up automations.</h1>
        <p className="text-white/70 max-w-2xl">
          Choose a path below or send a custom brief. Once backend services go live, these requests will automatically
          fan out to vendor pods and concierge channels.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {packages.map((pkg) => (
          <article
            key={pkg.title}
            className={`rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-inner shadow-black/30 bg-gradient-to-b ${pkg.accent}`}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">{pkg.descriptor}</p>
            <h3 className="text-2xl font-semibold mt-2">{pkg.title}</h3>
            <p className="text-sm text-white/60 mt-1">{pkg.price}</p>
            <ul className="mt-5 space-y-2 text-white/80 text-sm">
              {pkg.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-2xl border border-white/20 px-4 py-3 text-sm font-semibold text-white hover:border-white transition" disabled>
              Book discovery call
            </button>
          </article>
        ))}
      </div>

      <form
        onSubmit={(event) => event.preventDefault()}
        className="rounded-[32px] border border-brand-blue/20 bg-slate-950/70 p-8 space-y-4 shadow-2xl shadow-black/40"
      >
        <h2 className="text-2xl font-semibold">Custom booking request</h2>
        <p className="text-white/70">Send us your wishlist. Submission stays private until backend routing is live.</p>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-semibold text-white/80">
            Event type
            <select className="mt-2 w-full rounded-2xl border border-white/15 bg-slate-900/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/60">
              <option>Full-service wedding</option>
              <option>Corporate leadership summit</option>
              <option>Brand activation</option>
              <option>Private social experience</option>
            </select>
          </label>
          <label className="text-sm font-semibold text-white/80">
            Preferred date
            <input
              type="date"
              className="mt-2 w-full rounded-2xl border border-white/15 bg-slate-900/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
            />
          </label>
          <label className="text-sm font-semibold text-white/80">
            Ideal budget
            <input
              placeholder="$40,000"
              className="mt-2 w-full rounded-2xl border border-white/15 bg-slate-900/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
            />
          </label>
          <label className="text-sm font-semibold text-white/80">
            Guests
            <input
              type="number"
              min="20"
              className="mt-2 w-full rounded-2xl border border-white/15 bg-slate-900/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
              placeholder="150"
            />
          </label>
          <label className="text-sm font-semibold text-white/80 md:col-span-2">
            Notes for planners
            <textarea
              rows="4"
              className="mt-2 w-full rounded-2xl border border-white/15 bg-slate-900/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
              placeholder="Must-have venues, non-negotiables, or special requests..."
            />
          </label>
        </div>
        <button
          type="submit"
          className="rounded-2xl bg-gradient-to-r from-brand-pink to-brand-blue px-6 py-3 font-semibold text-slate-950 shadow-glow"
          disabled
        >
          Submit request (held until backend)
        </button>
      </form>
    </section>
  )
}

export default Booking

