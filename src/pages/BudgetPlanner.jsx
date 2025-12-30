import { useMemo, useState } from 'react'

const allocationPresets = {
  wedding: { venue: 0.36, culinary: 0.28, design: 0.2, entertainment: 0.1, buffer: 0.06 },
  corporate: { venue: 0.32, culinary: 0.18, design: 0.16, entertainment: 0.18, buffer: 0.16 },
  social: { venue: 0.28, culinary: 0.32, design: 0.22, entertainment: 0.1, buffer: 0.08 },
}

const labels = {
  venue: 'Venue & production',
  culinary: 'Culinary & beverage',
  design: 'Design & ambiance',
  entertainment: 'Entertainment & talent',
  buffer: 'Contingency',
}

function BudgetPlanner() {
  const [budget, setBudget] = useState(32000)
  const [guestCount, setGuestCount] = useState(150)
  const [eventStyle, setEventStyle] = useState('wedding')

  const currency = useMemo(
    () =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }),
    [],
  )

  const allocation = useMemo(() => {
    const preset = allocationPresets[eventStyle] ?? allocationPresets.wedding
    return Object.entries(preset).map(([key, weight]) => ({
      label: labels[key],
      value: Math.round(budget * weight),
      percent: Math.round(weight * 100),
    }))
  }, [budget, eventStyle])

  const perGuest = useMemo(() => Math.round(budget / Math.max(guestCount, 1)), [budget, guestCount])

  return (
    <section className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">AI budget planner</p>
        <h1 className="text-3xl font-semibold">Guardrails that flex with quotes and guest counts.</h1>
        <p className="text-white/70 max-w-2xl">
          Dial in a total spend, guest target, and event style. Aurora will hold smarter allocations once backend
          automation is connected.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-white/10 bg-slate-900/70 p-8 space-y-6">
          <label className="block text-sm font-semibold text-white/80">
            Total budget ({currency.format(budget)})
            <input
              type="range"
              min="8000"
              max="120000"
              step="1000"
              value={budget}
              onChange={(event) => setBudget(Number(event.target.value))}
              className="mt-3 w-full accent-brand-pink"
            />
          </label>
          <label className="block text-sm font-semibold text-white/80">
            Guest count
            <input
              type="number"
              min="25"
              max="800"
              value={guestCount}
              onChange={(event) => setGuestCount(Number(event.target.value) || 0)}
              className="mt-2 w-full rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
            />
          </label>
          <label className="block text-sm font-semibold text-white/80">
            Event style
            <select
              value={eventStyle}
              onChange={(event) => setEventStyle(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
            >
              <option value="wedding">Luxury wedding</option>
              <option value="corporate">Corporate summit</option>
              <option value="social">Social soirée</option>
            </select>
          </label>
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">AI target / guest</p>
              <p className="text-2xl font-semibold mt-1">{currency.format(perGuest)}</p>
            </div>
            <p className="text-sm text-white/70 max-w-xs">
              Final guardrails sync with your finance stack once API credentials are added.
            </p>
          </div>
        </div>

        <div className="rounded-[32px] border border-brand-blue/20 bg-slate-950/60 p-8 space-y-5">
          <h2 className="text-2xl font-semibold">Recommended breakdown</h2>
          <ul className="space-y-4">
            {allocation.map((bucket) => (
              <li key={bucket.label} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{bucket.label}</p>
                  <p className="text-xs text-white/60">{bucket.percent}% allocation</p>
                </div>
                <span className="text-lg font-semibold">{currency.format(bucket.value)}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 p-4 text-sm text-white/75">
            Aurora AI keeps the dashboard hidden until backend services are active. Exporting, syncing, and vendor sharing
            will unlock later.
          </div>
        </div>
      </div>
    </section>
  )
}

export default BudgetPlanner

