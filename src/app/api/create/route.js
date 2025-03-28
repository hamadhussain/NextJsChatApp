// // pages/api/create.js
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
import { StreamChat } from 'stream-chat';
import { currentUser } from '@clerk/nextjs/server'
// export async function GET() {
//   const user = await currentUser();  // Get current user
//   const serverClient = StreamChat.getInstance(
//     'bxguj3z3dqdj',  // Stream API key
//     'mtjvzgetjnrjp8pvt4mh5deygam5q3rzn2zhf6j3wkxhrwpxgq3p4wmtwawwx2md'  // Stream secret key
//   );

//   const firstName = user.firstName || user.fullName;
//   const userID = user.id;

//   const expiration = Math.floor(Date.now() / 1000) + 60 * 60 * 24; // Expiration set to 24 hours

//   // Create token with role and permissions, user has 'user' role
//   const token = serverClient.createToken(userID, {
//     role: 'user',  // Set the role as 'user'
//     exp: expiration,  // Set expiration (in seconds since Unix epoch)
//   });

//   // // Create token with role and permissions, user has 'user' role
//   // const token = serverClient.createToken(userID, {
//   //   role: 'user'
//   // });

//   return Response.json({
//     firstName: firstName,
//     userID: userID,
//     token: token
//   });
// }




export async function GET() {
  const user = await currentUser();
  const serverClient = StreamChat.getInstance(
    'bxguj3z3dqdj',  // Stream API key
    'mtjvzgetjnrjp8pvt4mh5deygam5q3rzn2zhf6j3wkxhrwpxgq3p4wmtwawwx2md'  // Stream secret key
  );
  const firstName = user.firstName || user.fullName;
  const userID = user.id;
  const token = serverClient.createToken(user.id);

  await serverClient.upsertUser({
    id: userID})

    const channel =   serverClient.channel('messaging', 'Check', {
      image: 'https://getstream.io/random_png/?name=react',
      name: 'Next JS',
      members: [userID], // Ensure user is a member
    });
  // const channel = client.channel('messaging', 'Check', {
  //   image: 'https://getstream.io/random_png/?name=react',
  //   name: 'Next JS',
  //   members: [userId], // Ensure user is a member
  // });
await channel.create();
channel.addMembers([userID]);
  // setChannel(channel);
  return Response.json({
    firstName: firstName,
    userID: userID,
    token: token
  });
}


// export async function   GET() {
//   const user = await currentUser();
//   const serverClient = StreamChat.getInstance(
//     'bxguj3z3dqdj',  // Stream API key
//     'mtjvzgetjnrjp8pvt4mh5deygam5q3rzn2zhf6j3wkxhrwpxgq3p4wmtwawwx2md'  // Stream secret key
//   );
//   const firstName = user.firstName || user.fullName;
//   const userID= user.id;
//   const token = serverClient.createToken(user.id);

//   return  Response.json({ message: token })
// }

// export async function POST(req) {
//   try {
//     const messages = await req.json();
//     const user = await currentUser();
//     // if (!messages.title || !messages.body) {
//     //   return new Response(
//     //     JSON.stringify({ error: "Title and Body are required" }),
//     //     {
//     //       status: 400,
//     //       headers: { "Content-Type": "application/json" },
//     //     }
//     //   );
//     // }
    
//     // const userCreate = await prisma.user.create({
//     //   data: {
//     //     name: messages.title,
//     //     email: messages.body,
//     //   },
//     // });
//     // console.log(userCreate);

//     return new Response(
//       JSON.stringify({
//         messages: { user },
//       }),
//       {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   } catch (error) {
//     console.error("Error creating user:", error);

//     return new Response(
//       JSON.stringify({ error: "Something went wrong while creating the user" }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// }





















// // export default async function handler(req, res) {
// //   if (req.method === 'POST') {
// //     // Data from the request body
// //     const { title, body } = req.body;

// //     // Example of how you might process the data
// //     if (!title || !body) {
// //       return res.status(400).json({ error: 'Title and Body are required' });
// //     }

// //     // Simulate saving to a database (you can replace this with actual DB logic)
// //     const newPost = {
// //       id: Date.now(), // Just a mock ID based on timestamp
// //       title,
// //       body,
// //     };

// //     // Respond with the created post
// //     return res.status(201).json(newPost);
// //   } else {
// //     // If not a POST request, return a method not allowed error
// //     return res.status(405).json({ error: 'Method Not Allowed' });
// //   }
// // }
// export async function POST(req) {
//   try {
//     // Parse JSON body from the request
//     const messages = await req.json();
//     console.log(messages.body);
//     if (prisma) {
//       const userCreate = await prisma.user.create({
//         data: {
//           name: messages.title,
//           email: messages.body,
//         },
//       });
//       console.log(userCreate);
//     console.log("prisma is connected");
//     // const userF = await prisma.user.findMany();
//     //   console.log(userF);
//     }

//     return new Response(JSON.stringify({ messages }), {
//       status: 200, // Success status
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     // If an error occurs, return a 500 response
//     return new Response(JSON.stringify({ error: "Something went wrong" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

// // // pages/api/create.js

// // // export default async function handler(req, res) {
// // //     if (req.method === 'POST') {
// // //       // Data from the request body
// // //       const { title, body } = req.body;

// // //       // Example of how you might process the data
// // //       if (!title || !body) {
// // //         return res.status(400).json({ error: 'Title and Body are required' });
// // //       }

// // //       // Simulate saving to a database (you can replace this with actual DB logic)
// // //       const newPost = {
// // //         id: Date.now(), // Just a mock ID based on timestamp
// // //         title,
// // //         body,
// // //       };

// // //       // Respond with the created post
// // //       return res.status(201).json(newPost);
// // //     } else {
// // //       // If not a POST request, return a method not allowed error
// // //       return res.status(405).json({ error: 'Method Not Allowed' });
// // //     }
// // //   }

// // export async function POST(req) {
// //     const { messages } = await req.json()
// //     return  Response.json(messages)

// // }

// // // // export async function GET() {
// // // //     return Response.json({ message: 'Hello World' })
// // // //   }
// // // // pages/api/create.js

// // // export  async function handler(req, res) {
// // //     if (req.method === 'POST') {
// // //       // Data from the request body
// // //       const { title, body } = req.body;

// // //       // Example of how you might process the data
// // //       if (!title || !body) {
// // //         return res.status(400).json({ error: 'Title and Body are required' });
// // //       }

// // //       // Simulate saving to a database (you can replace this with actual DB logic)
// // //       const newPost = {
// // //         id: Date.now(), // Just a mock ID based on timestamp
// // //         title,
// // //         body,
// // //       };

// // //       // Respond with the created post
// // //       return res.status(201).json(newPost);
// // //     } else {
// // //       // If not a POST request, return a method not allowed error
// // //       return res.status(405).json({ error: 'Method Not Allowed' });
// // //     }
// // //   }

// import prisma from "@/lib/prisma";  // Ensure prisma client is imported if you're using it from a separate file

