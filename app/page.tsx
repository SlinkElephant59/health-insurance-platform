import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-teal-800">HealthcareKenya.org</h1>
        <div className="space-x-4">
          <Link 
            href="/sign-in" 
            className="text-teal-700 hover:text-teal-900 font-medium transition-colors"
          >
            Sign In
          </Link>
          <Link 
            href="/sign-up" 
            className="bg-teal-600 text-white px-5 py-2 rounded-full hover:bg-teal-700 transition-colors shadow-md"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6 pt-20 pb-32 text-center">
        <span className="inline-block bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded-full mb-6">
          🏥 Your Health, Our Priority
        </span>
        
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Manage Your Health Insurance <br />
          <span className="text-teal-600">With Confidence</span>
        </h2>
        
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Access your coverage details, find nearby hospitals, and read expert health tips—all in one secure, easy-to-use platform designed for Kenyans.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/sign-up" 
            className="bg-teal-600 text-white text-lg px-8 py-4 rounded-full hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Create Free Account
          </Link>
          <Link 
            href="#features" 
            className="border-2 border-teal-600 text-teal-700 text-lg px-8 py-4 rounded-full hover:bg-teal-50 transition-all"
          >
            Learn More
          </Link>
        </div>
      </main>

      {/* Simple Features Preview */}
      <section id="features" className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-8">
        {[
          { title: "Secure Dashboard", desc: "View your active policies and coverage status anytime." },
          { title: "Hospital Locator", desc: "Find accredited facilities near you instantly." },
          { title: "Expert Health Tips", desc: "Curated advice from medical professionals." }
        ].map((feature, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-teal-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-teal-800 mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}