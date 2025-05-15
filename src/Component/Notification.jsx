import React from 'react'

function Notification({isloggedIn}) {
  return (
    <div className='Counter'>
      {isloggedIn ? <h2>'You have a new message'</h2>:<h2>'no new meassge'</h2>}
    </div>
  )
}

export default Notification
