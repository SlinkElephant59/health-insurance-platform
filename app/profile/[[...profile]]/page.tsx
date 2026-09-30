// app/profile/[[...profile]]/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { UserProfile } from '@clerk/nextjs';
import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const user = await currentUser();

  const fullName =
    [user?.firstName, user?.lastName].filter(Boolean).join(' ') || 'Unnamed User';
  const email = user?.primaryEmailAddress?.emailAddress ?? 'No email on file';
  const joined = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  return (
    <div className="min-h-screen bg-teal-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header with Title and Exit Button */}
      <div className="max-w-5xl mx-auto flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-teal-800">My Profile</h1>
        
        <Link 
          href="/dashboard" 
          className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-md flex items-center gap-2"
        >
          ← Back to Dashboard
        </Link>
      </div>

      {/* Basic info summary */}
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-lg mb-6 flex items-center gap-4">
        {user?.imageUrl && (
          <Image
            src={user.imageUrl}
            alt={fullName}
            width={64}
            height={64}
            className="rounded-full border-2 border-teal-100"
          />
        )}
        <div>
          <p className="text-lg font-semibold text-teal-900">{fullName}</p>
          <p className="text-sm text-teal-700">{email}</p>
          {joined && (
            <p className="text-xs text-teal-500 mt-1">Member since {joined}</p>
          )}
        </div>
      </div>

      {/* Clerk's Profile UI - Increased width to max-w-5xl */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <UserProfile path="/profile" routing="path" />
      </div>
    </div>
  );
}