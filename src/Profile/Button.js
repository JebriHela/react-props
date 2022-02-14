import React from 'react'

function Button({name}) {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}> <button onClick={() => alert ("welcome " + name)} >push</button>

    </div>
  )
}

export default Button