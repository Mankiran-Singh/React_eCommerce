import React from 'react'
function Button(data){
   console.log('Button component executed')
   return <button onClick={data.eventHandler} className="btn btn-primary">{data.children}</button>
}

export default Button;