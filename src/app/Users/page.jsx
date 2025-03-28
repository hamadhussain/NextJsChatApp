import React from 'react'


const Users =  ({token, userID,firstName}) => {
    // console.log(user.id);
  return (
    <div>
      token : {token} <br />
      userID : {userID} <br />
      firstname : {firstName}
      {/* {user.id} */}
    </div>
  )
}

export default Users
