import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  // 1. Check if the user is logged in
  const { userId } = await auth();

  // 2. If not logged in, the middleware should catch this, 
  // but this is a good safety redirect.
  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div className="min-h-screen bg-teal-50">
      {/* Header / Navbar */}
      <header className="bg-teal-600 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">HealthcareKenya.org</h1>
        {/* Clerk's built-in user profile dropdown */}
        <UserButton afterSignOutUrl="/" />
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6 mt-8">
        <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-teal-500">
          <h2 className="text-3xl font-semibold text-teal-900 mb-4">
            Welcome to your Dashboard! 🏥
          </h2>
          <p className="text-gray-600 mb-6">
            You are successfully logged in. This is your secure space to manage your health insurance coverage.
          </p>

          {/* Placeholder for future features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-teal-50 p-6 rounded-md border border-teal-200">
              <h3 className="text-xl font-bold text-teal-800 mb-2">Coverage Status</h3>
              <p className="text-gray-700">Active ✅</p>
              <p className="text-sm text-gray-500 mt-2">Next check-up: TBD</p>
            </div>

            <div className="bg-teal-50 p-6 rounded-md border border-teal-200">
              <h3 className="text-xl font-bold text-teal-800 mb-2">Health Tips</h3>
              <p className="text-gray-700">
                Stay hydrated and get at least 30 minutes of exercise today!
              </p>
              <p className="text-sm text-gray-500 mt-2">(CMS integration coming soon)</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}