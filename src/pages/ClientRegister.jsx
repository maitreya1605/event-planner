import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ClientRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    contact: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/client/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registration successful!');
        if (data.redirectUrl) {
          navigate(data.redirectUrl);
        } else {
          navigate('/login/client');
        }
      } else {
        alert(data.msg || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <section className="max-w-3xl mx-auto space-y-6">
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">Client onboarding</p>
        <h1 className="text-3xl font-semibold mt-3">Create your account</h1>
        <p className="text-white/70 mt-2">
          Join us to start planning your perfect event.
        </p>
        <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
          <label className="text-sm font-semibold text-white/90 md:col-span-1">
            Full Name
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
              placeholder="John Doe"
              required
            />
          </label>
          <label className="text-sm font-semibold text-white/90 md:col-span-1">
            Username
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
              placeholder="johndoe123"
              required
            />
          </label>
          <label className="text-sm font-semibold text-white/90 md:col-span-1">
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
              placeholder="you@example.com"
              required
            />
          </label>
          <label className="text-sm font-semibold text-white/90 md:col-span-1">
            Contact Number
            <input
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
              placeholder="1234567890"
              required
            />
          </label>
          <label className="text-sm font-semibold text-white/90 md:col-span-2">
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
              placeholder="••••••••"
              required
            />
          </label>

          <button
            type="submit"
            className="md:col-span-2 rounded-2xl border border-brand-blue/40 px-6 py-3 font-semibold text-brand-blue hover:border-brand-blue hover:bg-brand-blue/10 transition-colors"
          >
            Register
          </button>
        </form>
      </div>
      <div className="flex justify-between text-sm text-white/70 flex-wrap gap-3">
        <Link to="/login/client" className="text-brand-blue hover:underline font-semibold">
          Back to client login
        </Link>
        <Link to="/" className="hover:text-white">
          Return home
        </Link>
      </div>
    </section>
  )
}

export default ClientRegister
