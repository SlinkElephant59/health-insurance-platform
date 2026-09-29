import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { client } from '@/lib/sanity';

// Define the shape of our Health Tip data
interface HealthTip {
  _id: string;
  title: string;
  content: string;
  category: string;
  publishedAt: string;
}

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  // Fetch health tips from Sanity
  const tips: HealthTip[] = await client.fetch(
    `*[_type == "healthTip"] | order(publishedAt desc)`
  );

  return (
    <div className="min-h-screen bg-teal-50">
      {/* Header */}
      <header className="bg-teal-600 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">HealthcareKenya.org</h1>
        <UserButton afterSignOutUrl="/" />
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6 mt-8">
        <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-teal-500">
          <h2 className="text-3xl font-semibold text-teal-900 mb-4">
            Welcome to your Dashboard! 🏥
          </h2>
          <p className="text-gray-600 mb-8">
            You are successfully logged in. Here are the latest health tips from our CMS.
          </p>

          {/* Health Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.length > 0 ? (
              tips.map((tip) => (
                <div 
                  key={tip._id} 
                  className="bg-teal-50 p-6 rounded-md border border-teal-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-teal-800">{tip.title}</h3>
                    <span className="bg-teal-200 text-teal-800 text-xs px-2 py-1 rounded-full uppercase">
                      {tip.category}
                    </span>
                  </div>
                  <p className="text-gray-700 mt-2">{tip.content}</p>
                  <p className="text-xs text-gray-500 mt-4">
                    Published: {new Date(tip.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No health tips available yet.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}