"use client";
import { useState, useEffect } from "react";
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "stream-chat-react/dist/css/v2/index.css";

// const apiKey = 'dz5f4d5kzrue';
const userId = 'user_2ujbFUDZpkoYGPimlvSrE8TNyez';
const userName = 'floral';
const userToken = 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8ydWpiRlVEWnBrb1lHUGltbHZTckU4VE55ZXoifQ.VXW9PkQbuEITGIRvuI_7u1YVx_8fQ9GXvxJhGDgPxjs"
// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZmxvcmFsLWhlYXJ0LTUiLCJleHAiOjE3NDI4NDcwOTl9.ti0PWWVOQ7GS2Zx7_aNCge3PgVlgMRQELzej1yMzvGo';








const apiKey = "a6mpshfsxm8z";
// // const userId = "user_2ul50FAMrhPSFH8XCDd4Lv87nyG";
// const userName = "Hammad";
// // const userId="user_2ujbFUDZpkoYGPimlvSrE8TNyez"
// // const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8ydWw1MEZBTXJoUFNGSDhYQ0RkNEx2ODdueUcifQ.MsGAZhCRO_GNkL9X3sCXu0sdSNtoF2Smpzst_3dHacU";
// // // const userToken

// // const apiKey = 'dz5f4d5kzrue';
// const userId = 'sweet-math-9';
// // const userName = 'Hammad';
// const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic3dlZXQtbWF0aC05IiwiZXhwIjoxNzQyODM2MTIwfQ.7K8YlhOTlwVVJKX9ykS-Do54DAyI54wrGVepRHruF_Y';
// // const userToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8ydWpiRlVEWnBrb1lHUGltbHZTckU4VE55ZXoifQ.VXW9PkQbuEITGIRvuI_7u1YVx_8fQ9GXvxJhGDgPxjs"

const user = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
};

const App = () => {
  // const [channel, setChannel] = useState();
  // const [error, setError] = useState(null);

  // const client = useCreateChatClient({
  //   apiKey,
  //   tokenOrProvider: userToken,
  //   userData: user,
  // });

  // useEffect(() => {
  //   const initializeChannel = async () => {
  //     try {
  //       if (!client) return;

  //       const newChannel = client.channel("messaging", "hammad", {
  //         image: "https://getstream.io/random_png/?name=react",
  //         name: "Discussion",
  //         members: [userId],
  //       });

  //       await newChannel.watch(); 
  //       setChannel(newChannel);
  //     } catch (err) {
  //       console.error("Error creating channel:", err);
  //       setError("Failed to create or watch channel.");
  //     }
  //   };

  //   initializeChannel();
  // }, [client]);

  // if (!client) return <div>Setting up client & connection...</div>;
  // if (error) return <div>{error}</div>; // Display any error message

  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', 'custom_channel_id', {
      image: 'https://getstream.io/random_png/?name=react',
      name: 'Talk about React',
      members: [userId],
    });

    setChannel(channel);
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;


  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default App;

// "use client";
// import { useState, useEffect } from "react";
// import {
//   useCreateChatClient,
//   Chat,
//   Channel,
//   ChannelHeader,
//   MessageInput,
//   MessageList,
//   Thread,
//   Window,
// } from "stream-chat-react";

// import "stream-chat-react/dist/css/v2/index.css";;

// // const api_key = "a6mpshfsxm8z";
// // const api_secret =
// //   "35hm3rjhxbqtqdhfhqn869eqh9vvfjfnj6prc3nh5q8e3rtutyfxm5gha8t3vn7";
// const apiKey = "a6mpshfsxm8z";
// // const userId = "user_2ujbFUDZpkoYGPimlvSrE8TNyez";
// const userId="user_2ul50FAMrhPSFH8XCDd4Lv87nyG"
// const userName = "Hammad";
// // const userToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8ydWpiRlVEWnBrb1lHUGltbHZTckU4VE55ZXoifQ.VXW9PkQbuEITGIRvuI_7u1YVx_8fQ9GXvxJhGDgPxjs";
// const userToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8ydWw1MEZBTXJoUFNGSDhYQ0RkNEx2ODdueUcifQ.MsGAZhCRO_GNkL9X3sCXu0sdSNtoF2Smpzst_3dHacU"

// const user = {
//   id: userId,
//   name: userName,
//   image: `https://getstream.io/random_png/?name=${userName}`,
// };

// const App =  () => {
//   const [channel, setChannel] = useState();
//   const client =  useCreateChatClient({
//     apiKey,
//     tokenOrProvider: userToken,
//     userData: user,
//   });

//   useEffect(() => {
//     if (!client) return;

//     const channel = client.channel("messaging", "hammad", {
//       image: "https://getstream.io/random_png/?name=react",
//       name: "Discussion",
//       members: [userId],
//     });

//     setChannel(channel);
//   }, [client]);

//   if (!client) return <div>Setting up client & connection...</div>;

//   return (
//     <Chat client={client}>
//       <Channel channel={channel}>
//         <Window>
//           <ChannelHeader />
//           <MessageList />
//           <MessageInput />
//         </Window>
//         <Thread />
//       </Channel>
//     </Chat>
//   );
// };

// export default App;

// "use client";
// import { useState, useEffect } from "react";
// // import { User, Channel as StreamChannel } from'stream-chat';
// import {
//   useCreateChatClient,
//   Chat,
//   Channel,
//   ChannelHeader,
//   MessageInput,
//   MessageList,
//   Thread,
//   Window,
// } from "stream-chat-react";

// import "stream-chat-react/dist/css/v2/index.css";;

// const api_key = "a6mpshfsxm8z";
// const api_secret =
//   "35hm3rjhxbqtqdhfhqn869eqh9vvfjfnj6prc3nh5q8e3rtutyfxm5gha8t3vn7";
// const apiKey = "a6mpshfsxm8z";
// const userId = "user_2ujbFUDZpkoYGPimlvSrE8TNyez";
// const userName = "Hammad";
// // const userToken =
// //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8ydWpiRlVEWnBrb1lHUGltbHZTckU4VE55ZXoifQ.VXW9PkQbuEITGIRvuI_7u1YVx_8fQ9GXvxJhGDgPxjs";
// const user = {
//   id: userId,
//   name: userName,
//   image: `https://getstream.io/random_png/?name=${userName}`,
// };

// const App = () => {
//   const [channel, setChannel] = useState();
//   const [userToken, setUserToken] = useState(null);

//   const client = useCreateChatClient({
//     apiKey,
//     tokenOrProvider: userToken,
//     userData: user,
//   });

//   useEffect(() => {
//     fetch("/api/token")
//     .then((response) => response.json())
//     .then((data) => setUserToken(data.token))
//     .catch((error) => console.error("Error fetching token:", error));
//     if (!client) return;

//     const channel = client.channel("messaging", "custom_channel_id", {
//       image: "https://getstream.io/random_png/?name=react",
//       name: "Discussion",
//       members: [userId],
//     });

//     setChannel(channel);
//   }, [client]);

//   if (!client) return <div>Setting up client & connection...</div>;

//   return (
//     <Chat client={client}>
//       <Channel channel={channel}>
//         <Window>
//           <ChannelHeader />
//           <MessageList />
//           <MessageInput />
//         </Window>
//         <Thread />
//       </Channel>
//     </Chat>
//   );
// };

// export default App;
