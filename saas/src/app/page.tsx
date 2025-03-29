import { SignedIn, SignedOut, SignOutButton, SignUpButton, UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div>
      <SignedOut>
      <SignUpButton> 
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">Sign Up</button>
      </SignUpButton>
      </SignedOut>

    <UserButton/>

      <SignedIn>
        <SignOutButton> 
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign out</button>
        </SignOutButton>
      </SignedIn>
    </div>
  );
}
