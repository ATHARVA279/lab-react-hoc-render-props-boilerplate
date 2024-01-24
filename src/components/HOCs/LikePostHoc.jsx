import React from 'react'
import CommonHOC from './CommonHoc'

const LikePostHoc=({handleCount,count})=>{
    return(
        <div>
            <button onClick={handleCount}> Like Post {count}</button>
        </div>
    )
}

export default CommonHOC(LikePostHoc)