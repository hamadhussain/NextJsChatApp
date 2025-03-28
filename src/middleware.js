// import { useAuth } from "@clerk/nextjs";
// import { createRouteMatcher, clerkMiddleware, auth } from "@clerk/nextjs/server";

// const isPublicRoute = createRouteMatcher(['/sign-up(.*)', '/sign-in(.*)', '/api/create']);

// export default clerkMiddleware((auth, req) => {
//   if (!isPublicRoute(req)) {
    
//     const { userId } = auth();
//     if (!userId) {
//       return Response.redirect(new URL("/sign-in", req.url));
//     }
//     console.log("User ID:", userId);
//   }
//   return Response.next();
// });

// export const config = {
//   matcher: [
//     "/((?!_next/static|_next/image|favicon.ico).*)", // Ensure static files ko ignore kare
//     "/(api|trpc)(.*)",
//   ],
// };








// import { createRouteMatcher, clerkMiddleware, auth } from "@clerk/nextjs/server";

// const isPublicRoute = createRouteMatcher(['/sign-up(.*)', '/sign-in(.*)', '/api/create']);

// export default clerkMiddleware((req) => {
//   if (!isPublicRoute(req)) {
//     const { userId, sessionClaims } = auth(); // auth() se user info le sakte ho
//     if (!userId) {
//       return Response.redirect(new URL("/sign-in", req.url));
//     }

//     console.log("User ID:", userId); // Debugging ke liye
//     console.log("User Info:", sessionClaims);
//   }

//   return Response.next();
// });

// export const config = {
//   matcher: [
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     '/(api|trpc)(.*)',
//   ],
// };











import {createRouteMatcher, clerkMiddleware } from '@clerk/nextjs/server'
// import { currentUser } from '@clerk/nextjs/server'
// import { currentUser } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(['/sign-up(.*)', '/sign-in(.*)', '/api/create'])

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) await auth.protect()
    // const user = await currentUser();
    // console.log(user);
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
// // import { createRouteMatcher, clerkMiddleware } from '@clerk/nextjs/server';

// // const isPublicRoute = createRouteMatcher(['/sign-up(.*)', '/sign-in(.*)', '/api/create']);

// // export default clerkMiddleware(async (auth, req) => {
// //   if (!isPublicRoute(req)) {
// //     const { userId, sessionClaims } = await auth().protect(); // User info protect() ke baad milti hai
    
// //     console.log("User ID:", userId); // Check karne ke liye console kar sakte ho
// //     console.log("User Info:", sessionClaims); // Ye user ka full session data hai

// //     // Agar tum request headers mein user ka data bhejna chahte ho
// //     req.headers.set("x-user-id", userId);
// //   }
// // });

// // export const config = {
// //   matcher: [
// //     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
// //     '/(api|trpc)(.*)',
// //   ],
// // };

// // // 'use server'
// // // import { createRouteMatcher, clerkMiddleware } from '@clerk/nextjs/server'
// // // // import { currentUser } from "@clerk/nextjs/server";

// // // // Define routes that are public
// // // const isPublicRoute = createRouteMatcher(['/sign-up(.*)', '/sign-in(.*)', '/api/create']);

// // // export default clerkMiddleware(async (auth, req) => {
// // //   // Check if the route is public
// // //   if (!isPublicRoute(req)) {
// // //     await auth.protect(); // Protect the route if it's not public
// // //   }

// // //   // Retrieve the current user
// // //   // const user = await currentUser();
// // //   // console.log(user); // Log the user object
// // // });

// // // export const config = {
// // //   matcher: [
// // //     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
// // //     '/(api|trpc)(.*)',
// // //   ],
// // // };


// // // import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
// // // import { PrismaClient } from "@prisma/client";
// // // import { StreamChat } from 'stream-chat';
// // // import { currentUser } from '@clerk/nextjs/server'

// // // const prisma = new PrismaClient();
// // // const isPublicRoute = createRouteMatcher(['/sign-up(.*)', '/sign-in(.*)', '/api/create']);

// // // export default clerkMiddleware(async (auth, req) => {
// // //   if (isPublicRoute(req)) {
// // //     await auth.protect();
// // // const user = await currentUser()

// // //     const userId = auth.userId;

// // //     let user = await prisma.user.findUnique({
// // //       where: {
// // //         userId: userId,
// // //       },
// // //     });

// // //     if (!user) {
// // //       const randomToken = Math.random().toString(36).substring(2, 15);

// // //       user = await prisma.user.create({
// // //         data: {
// // //           userId: userId,
// // //           name: 'User Name',
// // //           token: randomToken,
// // //         },
// // //       });
// // //     }

// // //     const serverClient = StreamChat.getInstance('bxguj3z3dqdj', 'mtjvzgetjnrjp8pvt4mh5deygam5q3rzn2zhf6j3wkxhrwpxgq3p4wmtwawwx2md');
// // //     const streamToken = serverClient.createToken(userId);

// // //     await prisma.user.update({
// // //       where: { id: user.id },
// // //       data: {
// // //         token: streamToken,
// // //       },
// // //     });

// // //     return;
// // //   }
// // // });

// // // export const config = {
// // //   matcher: [
// // //     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
// // //     '/(api|trpc)(.*)',
// // //   ],
// // // };

