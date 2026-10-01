// app/dashboard/page.tsx
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { 
  ShieldCheck, Banknote, Users, MessageCircle, 
  Calendar, FileText 
} from 'lucide-react';

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  // MOCK DATA: Replace this with real database calls later
  const policy = {
    provider: "SHIF (Social Health Insurance Fund)",
    planType: "Family Comprehensive",
    policyNumber: "SHF-2024-KEN-88921",
    status: "Active",
    startDate: "Jan 15, 2024",
    expiryDate: "Jan 14, 2026",
    renewalDate: "Dec 15, 2025"
  };

  const members = [
    { name: "Jissy Wangwa", role: "Principal Member", id: "MEM-001", age: 32 },
    { name: "Sarah Wangwa", role: "Spouse", id: "MEM-002", age: 29 },
    { name: "David Wangwa", role: "Dependent Child", id: "MEM-003", age: 5 },
  ];

  const claims = [
    { date: "Sep 12, 2024", facility: "Aga Khan University Hospital", amount: "KSh 12,500", status: "Approved" },
    { date: "Aug 04, 2024", facility: "Nairobi West Hospital", amount: "KSh 4,200", status: "Pending" },
    { date: "Jun 22, 2024", facility: "City Pharmacy Ltd", amount: "KSh 1,850", status: "Approved" },
  ];

  return (
    <div className="min-h-screen bg-[#f0f4f8] font-sans text-[#112e51]">
      
      {/* Navigation */}
      <nav className="bg-[#005f73] text-white py-3 px-6 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity">
            HealthCare<span className="font-normal text-[#a7d3d3]">.kenya</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/profile" className="text-sm font-bold hover:text-[#a7d3d3] transition-colors">My Profile</Link>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        
        {/* Welcome Banner */}
        <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-[#008000]">
          <h1 className="text-3xl font-bold text-[#112e51] mb-2">Welcome back, Jissy! </h1>
          <p className="text-gray-600">Here is an overview of your current health insurance coverage.</p>
        </div>

        {/* --- SECTION 1: MY POLICY & MEDICAL CARE --- */}
        <section id="medical-care" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-8 h-8 text-[#005f73]" />
            <h2 className="text-2xl font-bold text-[#112e51]">Access Quality Medical Care & Policy Details</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Main Policy Card */}
            <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#005f73]">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Insurance Provider</p>
                  <h3 className="text-xl font-bold text-[#112e51]">{policy.provider}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${policy.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {policy.status.toUpperCase()}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-sm">
                <div><p className="text-gray-500">Plan Type</p><p className="font-semibold">{policy.planType}</p></div>
                <div><p className="text-gray-500">Policy Number</p><p className="font-semibold">{policy.policyNumber}</p></div>
                <div><p className="text-gray-500">Start Date</p><p className="font-semibold">{policy.startDate}</p></div>
                <div><p className="text-gray-500">Expiry Date</p><p className="font-semibold">{policy.expiryDate}</p></div>
              </div>
            </div>

            {/* Renewal / Deals Card */}
            <div className="bg-[#fff3cd] p-6 rounded-lg shadow-sm border border-[#ffca28] flex flex-col justify-between">
              <div>
                <Calendar className="w-8 h-8 text-[#856404] mb-4" />
                <h3 className="text-lg font-bold text-[#856404] mb-2">Upcoming Renewal</h3>
                <p className="text-sm text-[#856404] mb-4">Your policy renews on <strong>{policy.renewalDate}</strong>. Lock in early bird discounts now!</p>
              </div>
              <button className="bg-[#008000] hover:bg-[#006400] text-white py-2 px-4 rounded text-sm font-bold w-full transition-colors">
                View Future Deals
              </button>
            </div>
          </div>

          {/* Community Benefit Sub-section */}
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#005f73]">
            <p className="text-gray-700 mb-4">
              As a member of our community, you gain access to a network of accredited hospitals and clinics. 
              Quality healthcare is now within reach when you need it most.
            </p>
            <h3 className="font-bold text-[#005f73] mb-3">Latest Health Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 p-4 rounded hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#112e51]">Stay Hydrated</h4>
                <p className="text-sm text-gray-600 mt-2">Drink at least 8 glasses of water daily to maintain optimal health.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#112e51]">Regular Check-ups</h4>
                <p className="text-sm text-gray-600 mt-2">Schedule annual physicals to catch potential issues early.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: MEMBERS & LIPA MDOGO MDOGO --- */}
        <section id="lipa-mdogo" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <Banknote className="w-8 h-8 text-[#008000]" />
            <h2 className="text-2xl font-bold text-[#112e51]">Members on Plan & Lipa Mdogo Mdogo</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 mb-8">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#f0f4f8] text-[#112e51]">
                <tr>
                  <th className="p-4 font-bold">Name</th>
                  <th className="p-4 font-bold">Role</th>
                  <th className="p-4 font-bold">Member ID</th>
                  <th className="p-4 font-bold">Age</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {members.map((member, i) => (
                  <tr key={i} className="hover:bg-[#f9fafb] transition-colors">
                    <td className="p-4 font-medium flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#005f73] text-white flex items-center justify-center text-xs font-bold">
                        {member.name.charAt(0)}
                      </div>
                      {member.name}
                    </td>
                    <td className="p-4 text-gray-600">{member.role}</td>
                    <td className="p-4 text-gray-600 font-mono">{member.id}</td>
                    <td className="p-4 text-gray-600">{member.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Community Benefit Sub-section */}
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#008000]">
            <p className="text-gray-700 mb-4">
              Our flexible payment plan allows you to pay as little as <strong>KSh 100</strong>. 
              The full amount is payable within <strong>120 days</strong>, making medical protection affordable and manageable for everyone.
            </p>
            <div className="bg-[#f0f4f8] p-4 rounded text-center">
              <p className="text-sm text-gray-500 uppercase tracking-wide">Current Status</p>
              <p className="text-xl font-bold text-[#008000]">Active & Manageable ✅</p>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: CLAIMS HISTORY & PEACE OF MIND --- */}
        <section id="peace-of-mind" className="scroll-mt-24 pb-12">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-[#005f73]" />
            <h2 className="text-2xl font-bold text-[#112e51]">Claims History & Peace of Mind</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 mb-8">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#f0f4f8] text-[#112e51]">
                <tr>
                  <th className="p-4 font-bold">Date</th>
                  <th className="p-4 font-bold">Facility</th>
                  <th className="p-4 font-bold">Amount Claimed</th>
                  <th className="p-4 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {claims.map((claim, i) => (
                  <tr key={i} className="hover:bg-[#f9fafb] transition-colors">
                    <td className="p-4 text-gray-600">{claim.date}</td>
                    <td className="p-4 font-medium">{claim.facility}</td>
                    <td className="p-4 font-bold text-[#112e51]">{claim.amount}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${claim.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {claim.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Community Benefit Sub-section */}
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#005f73]">
            <p className="text-gray-700">
              Knowing you and your loved ones are protected from unexpected medical costs brings true peace of mind. 
              Simple. Affordable. Accessible. For You.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}