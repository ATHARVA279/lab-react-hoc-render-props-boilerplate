import React from 'react'
import RenderProps from './RenderProps'
const LikePostRender = () => {
  return (
    <RenderProps>
{
    ({count,handleCount})=>(
        <div>
            <button onClick={handleCount}>LikePost {count}</button>
        </div>
    )
}
    </RenderProps>
  )
}

export default LikePostRender