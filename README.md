We are working with NextJS so everything will be serversided and the to make the script run on the client side we can use the `"use client"` in the first line.

The layout.tsx is the entrypoint of our program.

For the purpose of using authentication we are going to use Clerk.

When dealing with the Clerk elements like SignOutButton we can add our touch by placing the elements inside it.
```tsx
    <SignUpButton> 
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">Sign Up</button>
    </SignUpButton>
```

Below is the example of the functionality can be used. **Look at the imports**

```tsx
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

```

> Ensure that the middleware.ts is in the correct folder.