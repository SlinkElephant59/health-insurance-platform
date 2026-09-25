import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignUp />
    </div>
  );
}


// import { SignUp } from '@clerk/nextjs';

// export default function Page() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <SignUp />
//     </div>
//   );
// }