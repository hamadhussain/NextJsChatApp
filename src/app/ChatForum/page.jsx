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

const ChatForum = ({ firstName, token, userID }) => {
  const userId = userID;
  const userName = firstName;
  const userToken = token;
  const apiKey = "bxguj3z3dqdj"; // API Key for Stream

  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };

  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    // Create or get the channel
    const channel = client.channel('messaging', 'Check', {
      image: 'https://getstream.io/random_png/?name=react',
      name: 'Next JS',
      members: [userId], // Ensure user is a member
    });

    // Make sure channel is loaded
    setChannel(channel);
console.log(    "channel",channel.id
);
    
  }, [client, userId]);

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

export default ChatForum;









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

// import "stream-chat-react/dist/css/v2/index.css";
  
// const ChatForum =  ({firstName,token,userID}) => {

//     const userId = userID;
//     const userName = firstName;
//     const userToken = token
//     const apiKey = "bxguj3z3dqdj";
//     const user = {
//         id: userId,
//         name: userName,
//         image: `https://getstream.io/random_png/?name=${userName}`,
//       };
 
//     const [channel, setChannel] = useState();
//     const client = useCreateChatClient({
//       apiKey,
//       tokenOrProvider: userToken,
//       userData: user,
//     });
  
//     useEffect(() => {
//       if (!client) return;
  
//       const channel = client.channel('messaging', 'Check', {
//         image: 'https://getstream.io/random_png/?name=react',
//         name: 'Next JS',
//         members: [userId],
//       });
  
//       setChannel(channel);
//     }, [client]);
  
//     if (!client) return <div>Setting up client & connection...</div>;
  
  
//     return (
//       <Chat client={client}>
//         <Channel channel={channel}>
//           <Window>
//             <ChannelHeader />
//             <MessageList />
//             <MessageInput />
//           </Window>
//           <Thread />
//         </Channel>
//       </Chat>
//     );
//   };

// export default ChatForum



