import React from 'react'

function Header() {
    console.log("Header Rendered")
  return (
    <div>
        <h2>Christopher</h2>
    </div>
  )
}

export default React.memo(Header)