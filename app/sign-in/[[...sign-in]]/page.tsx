// app/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Nav */}
      <nav className="bg-[#005f73] text-white py-3 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity">
             HealthCare<span className="font-normal text-[#a7d3d3]">.kenya</span>
          </Link>
          <Link href="/" className="text-sm font-bold hover:underline">← Back to Home</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-start justify-center py-16 px-4">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-normal text-[#112e51] mb-2">Log in</h1>
          <p className="text-sm text-gray-600 mb-8">
            Don't have an account? <Link href="/sign-up" className="text-[#005f73] font-bold underline">Create account</Link>
          </p>

          {/* Standard Clerk Component (No complex styling to prevent crashes) */}
          <SignIn />
          
          <div className="mt-8 p-4 bg-[#f0f4f8] rounded text-xs text-gray-600 border-l-4 border-[#005f73]">
            <p className="font-bold text-[#112e51] mb-1">Required information</p>
            <p>When you create an account, log in, or apply for coverage, you must complete all form fields unless they're marked optional.</p>
          </div>
        </div>
      </main>
    </div>
  );
}