import { SignedIn, SignedOut, SignOutButton, SignUpButton, UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div>
      <SignUpButton></SignUpButton>
      <SignOutButton></SignOutButton>
    </div>
  );
}