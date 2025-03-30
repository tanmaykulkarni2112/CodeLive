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

# convex
Convex provides server sided database services so we are going to use its services. It can be used together with Clerk for the Auth and DB setup!

The schema for the table can be made on the website but we have done it preferably in the code itself to include validations for specific datatypes and to create index(for faster retreival of the data)

READ THE DOCUMENTATIONS TO GET BETTER IDEA

# Webhooks
Webhooks are automated message (EVENT) sent from app when something happens. Since Clerk uses the `svix` package... we will do the same

# Tips 

0. You are working with serverside directly do not forget to get the servers running before coding.
For the NextJS we will do `npm run dev`
For the convex server we will use the  `npx convex dev`


1. The command npm i packagename --legacy-peer-deps will ignore peer dependency conflicts and install the package as it would have in older versions of npm (prior to npm 7). This can help if the package you're trying to install has dependencies that are incompatible with your version of React. Keep in mind:
- This is a workaround, and it might lead to issues if the package relies on a peer dependency that's not properly supported in your current React version.
- It's always a good idea to check if the package has an updated version or if the package maintainers have recommended solutions for the issue.