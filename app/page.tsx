// app/page.tsx
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { 
  Search, BookOpen, Pen, Briefcase, 
  ShieldCheck, Banknote, Users, MessageCircle 
} from 'lucide-react';

export default async function Home() {
  // 1. Check if the user is logged in
  const { userId } = await auth();

  return (
    <div className="min-h-screen bg-[#f0f4f8] font-sans text-[#112e51]">
      
      {/* Top Official Banner */}
      <div className="bg-[#112e51] text-white text-xs py-1.5 px-4 flex justify-between items-center">
        <span className="flex items-center gap-2">
          <span className="text-lg">🇰</span> An official platform for Kenyan Health Insurance
        </span>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-[#005f73] text-white py-3 px-6 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-8 w-full md:w-auto">
            <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity">
              HealthCare<span className="font-normal text-[#a7d3d3]">.kenya</span>
            </Link>
            <div className="hidden lg:flex gap-6 text-sm font-medium">
              <Link href="/dashboard" className="hover:text-[#a7d3d3] transition-colors">Dashboard</Link>
              <Link href="#" className="hover:text-[#a7d3d3] transition-colors">See Topics</Link>
            </div>
          </div>

          {/* Dynamic Auth Section */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-end">
            {userId ? (
              // IF LOGGED IN: Show User Button (Handles Profile & Logout)
              <UserButton afterSignOutUrl="/" />
            ) : (
              // IF LOGGED OUT: Show Log In button
              <Link href="/sign-in" className="text-sm font-bold hover:underline border border-white px-3 py-1 rounded">
                Log in
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-[#e0f2fe] py-12 px-6 border-b border-[#b3d4e6]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 flex flex-col justify-center">
            <div className="bg-[#fff3cd] border-l-4 border-[#ffca28] p-3 mb-6 rounded-r text-sm font-bold text-[#856404] inline-flex items-center w-fit">
                Unlock Your Medical Protection! 
                <Link href="/sign-up" className="bg-[#008000] hover:bg-[#006400] text-white px-3 py-1.5 rounded ml-3 text-xs font-normal transition-colors cursor-pointer">
                    Join Today
                </Link>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-normal text-[#112e51] mb-4 leading-tight">
              Access Medical Insurance on <br />
              <span className="font-bold text-[#008000]">Lipa Mdogo Mdogo</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl">
              Join our Daily Wealth Habit Community. With as little as <span className="font-bold">KSh 100</span>, you can protect yourself and your family.
            </p>
            
            {/* Dynamic Button based on login status */}
            <Link 
              href={userId ? "/dashboard" : "/sign-up"} 
              className="bg-[#008000] hover:bg-[#006400] text-white text-lg font-bold py-3 px-8 rounded shadow-md inline-block w-fit transition-colors"
            >
              {userId ? "Go to Dashboard" : "Join the Community Today"}
            </Link>
          </div>

          {/* Right Quick Links */}
          <div className="flex flex-col gap-3">
            {[
              { icon: BookOpen, text: "Get Marketplace basics" },
              { icon: Pen, text: "Log in to make changes" },
              { icon: Briefcase, text: "Browse plans & costs" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer border border-gray-200">
                <item.icon className="w-6 h-6 text-[#005f73]" />
                <span className="font-bold text-[#112e51] text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info Cards Grid (Linked to Dashboard Sections) */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {[
          { 
            id: "medical-care",
            icon: ShieldCheck, 
            title: "Access Quality Medical Care", 
            desc: "Get the treatment you need when you need it most." 
          },
          { 
            id: "lipa-mdogo",
            icon: Banknote, 
            title: "Lipa Mdogo Mdogo", 
            desc: "Flexible payments that work for you. Payable within 120 days." 
          },
          { 
            id: "peace-of-mind",
            icon: Users, 
            title: "Peace of Mind", 
            desc: "Knowing you and your loved ones are protected from unexpected costs." 
          }
        ].map((card, i) => (
          // WRAPPED IN LINK TO DASHBOARD SECTIONS
          <Link 
            href={`/dashboard#${card.id}`} 
            key={i} 
            className="bg-white p-8 rounded shadow-sm border-t-4 border-[#005f73] text-center hover:shadow-lg transition-shadow block group"
          >
            <div className="bg-[#005f73] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#008000] transition-colors">
              <card.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#005f73] mb-3 underline decoration-2 underline-offset-4">{card.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-[#f0f0f0] border-t border-gray-300 py-12 px-6 mt-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm text-gray-700">
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#112e51]">Connect with us</h4>
            <p className="mb-2 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#008000]" />
              WhatsApp: <span className="font-bold text-[#112e51]">0714431036</span>
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#112e51]">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline text-[#005f73]">About the Affordable Care Act</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#112e51]">Daily Wealth Habit Community</h4>
            <p>Join thousands of Kenyans securing their future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}