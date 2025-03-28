import ChatForums from '../../ChatForum/page'
import { currentUser } from '@clerk/nextjs/server'

const App = async ({params}) => {0
    const roomID = params?.slug;
    const user = await currentUser()
  console.log(user);
  
  return (
    <div>
      <ChatForums slug={roomID} clerkUser={{id :user.id, name:user.firstName,Token: user.publicMetadata.Token}}/>
    </div>
  )
}

export default App



