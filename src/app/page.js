'use client';
import { useEffect, useState } from 'react';
import ChatForum from './ChatForum/page';
import Users from './Users/page';

const FetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [token, setToken] = useState(null);
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    fetch('/api/create')
      .then((response) => response.ok ? response.json() : Promise.reject('Failed to fetch'))
      .then((data) => {
        setFirstName(data.firstName);
        setToken(data.token);
        setUserID(data.userID);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>{data && <p>{data.message}</p>}
  {/* <Users token={token} userID={userID} firstName={firstName}/> */}
  <ChatForum token={token} userID={userID} firstName={firstName}/>
  </div>;
};

export default FetchData;








// // 'use client'
// // import { useState, useEffect } from 'react';
// // import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

// // import 'stream-chat-react/dist/css/v2/index.css';

// // const apiKey = 'dz5f4d5kzrue';
// // const userId = 'misty-shape-8';
// // const userName = 'misty';
// // const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibWlzdHktc2hhcGUtOCIsImV4cCI6MTc0MzAwMTY5Mn0.KdRuWdy0uNhBiy_KGSlx1xk-01PQImC252shb7bZMKQ';

// // const user = {
// //   id: userId,
// //   name: userName,
// //   image: `https://getstream.io/random_png/?name=${userName}`,
// // };

// // const App = () => {
// //   const [channel, setChannel] = useState();
// //   const client = useCreateChatClient({
// //     apiKey,
// //     tokenOrProvider: userToken,
// //     userData: user,
// //   });

// //   useEffect(() => {
// //     if (!client) return;

// //     const channel = client.channel('messaging', 'custom_channel_id', {
// //       image: 'https://getstream.io/random_png/?name=react',
// //       name: 'Talk about React',
// //       members: [userId],
// //     });

// //     setChannel(channel);
// //   }, [client]);

// //   if (!client) return <div>Setting up client & connection...</div>;

// //   return (
// //     <Chat client={client}>
// //       <Channel channel={channel}>
// //         <Window>
// //           <ChannelHeader />
// //           <MessageList />
// //           <MessageInput />
// //         </Window>
// //         <Thread />
// //       </Channel>
// //     </Chat>
// //   );
// // };

// // export default App;








// "use client";
// import { useState } from "react";

// const Home = () => {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("/api/create/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ title, body }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log(data);

//         setMessage(`Post Created: ${data}`);
//       } else {
//         setMessage(`Error: ${data.error}`);
//       }
//     } catch (error) {
//       console.error("Error occurred while submitting the post:", error);
//       setMessage("An error occurred while creating the post.");
//     }
//   };

//   return (
//     <div>
//       <h1>Create Post</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title:</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Body:</label>
//           <input
//             type="text"
//             value={body}
//             onChange={(e) => setBody(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default Home;

// // // 'use client'
// // // import { useState } from 'react';

// // // const Home = () => {
// // //   const [title, setTitle] = useState('');
// // //   const [body, setBody] = useState('');
// // //   const [message, setMessage] = useState('');

// // //  try {
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     const response = await fetch('/api/create/', {
// // //       method: 'POST',
// // //       headers: {
// // //         'Content-Type': 'application/json',
// // //       },
// // //       body: JSON.stringify({ title, body }),
// // //     });

// // //     const data = await response.json();

// // //     if (response.ok) {
// // //       setMessage(`Post Created: ${data.title}`);
// // //     } else {
// // //       setMessage(`Error: ${data.error}`);
// // //     }
// // //   };
// // //  } catch (error) {
// // //   console.log("error");

// // //  }

// // //   return (
// // //     <div>
// // //       <h1>Create Post</h1>
// // //       <form onSubmit={handleSubmit}>
// // //         <div>
// // //           <label>Title:</label>
// // //           <input
// // //             type="text"
// // //             value={title}
// // //             onChange={(e) => setTitle(e.target.value)}
// // //             required
// // //           />
// // //         </div>
// // //         <div>
// // //           <label>Body:</label>
// // //           <textarea
// // //             value={body}
// // //             onChange={(e) => setBody(e.target.value)}
// // //             required
// // //           />
// // //         </div>
// // //         <button type="submit">Submit</button>
// // //       </form>
// // //       {message && <p>{message}</p>}
// // //     </div>
// // //   );
// // // };

// // // export default Home;

// // // // 'use client'
// // // // import { useState, useEffect } from "react";

// // // // export default function Home() {
// // // //   const [users, setUsers] = useState([]);
// // // //   const [name, setName] = useState("");
// // // //   const [email, setEmail] = useState("");

// // // //   // Fetch users from API on page load
// // // //   useEffect(() => {
// // // //     async function fetchUsers() {
// // // //       const res = await fetch("/api/users");
// // // //       const data = await res.json();
// // // //       setUsers(data);
// // // //     }
// // // //     fetchUsers();
// // // //   }, []);

// // // //   // Handle form submit for adding new user
// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     const newUser = { name, email };

// // // //     // Post new user data to the server
// // // //     const res = await fetch("/api/create", {
// // // //       method: "POST",
// // // //       headers: {
// // // //         "Content-Type": "application/json",
// // // //       },
// // // //       body: JSON.stringify(newUser),
// // // //     });

// // // //     if (res.ok) {
// // // //       const addedUser = await res.json();
// // // //       setUsers([...users, addedUser]);
// // // //       setName("");
// // // //       setEmail("");
// // // //     } else {
// // // //       console.error("Error adding user");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h1>Users</h1>
// // // //       <ul>
// // // //         {users.map((user) => (
// // // //           <li key={user.id}>
// // // //             {user.name} ({user.email})
// // // //           </li>
// // // //         ))}
// // // //       </ul>

// // // //       <h2>Add New User</h2>
// // // //       <form onSubmit={handleSubmit}>
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Name"
// // // //           value={name}
// // // //           onChange={(e) => setName(e.target.value)}
// // // //           required
// // // //         />
// // // //         <input
// // // //           type="email"
// // // //           placeholder="Email"
// // // //           value={email}
// // // //           onChange={(e) => setEmail(e.target.value)}
// // // //           required
// // // //         />
// // // //         <button type="submit">Add User</button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // }
