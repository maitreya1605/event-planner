import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

export default function LoginRequired() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-brand-cream flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden border border-brand-gold/20 p-8 text-center">
                <div className="bg-brand-navy/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lock className="w-10 h-10 text-brand-navy" />
                </div>
                <h2 className="font-serif text-3xl text-brand-navy mb-4">Access Restricted</h2>
                <p className="text-brand-charcoal/70 mb-8">
                    You need to be logged in to access this page. Please sign in to your account or create a new one to continue.
                </p>
                <div className="space-y-4">
                    <button
                        onClick={() => navigate('/auth')}
                        className="w-full bg-brand-navy text-white py-3 rounded-lg font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors duration-300 shadow-md"
                    >
                        Go to Login
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        className="w-full bg-transparent border border-brand-navy text-brand-navy py-3 rounded-lg font-bold uppercase tracking-widest hover:bg-brand-navy hover:text-white transition-colors duration-300"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
}
