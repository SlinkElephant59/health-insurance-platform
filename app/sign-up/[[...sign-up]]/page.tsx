// app/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from '@clerk/nextjs';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="bg-[#005f73] text-white py-3 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity">
             HealthCare<span className="font-normal text-[#a7d3d3]">.kenya</span>
          </Link>
          <Link href="/" className="text-sm font-bold hover:underline">← Back to Home</Link>
        </div>
      </nav>

      <main className="flex-grow flex items-start justify-center py-16 px-4">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-normal text-[#112e51] mb-2">Create account</h1>
          <p className="text-sm text-gray-600 mb-8">
            Already have an account? <Link href="/sign-in" className="text-[#005f73] font-bold underline">Log in</Link>
          </p>

          {/* Standard Clerk Component */}
          <SignUp />
        </div>
      </main>
    </div>
  );
}