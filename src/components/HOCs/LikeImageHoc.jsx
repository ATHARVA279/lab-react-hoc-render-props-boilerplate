import React from 'react'
import CommonHOC from './CommonHoc'

const LikeImageHoc=({handleCount,count})=>{
    return(
        <div>
            <button onClick={handleCount}> Like Image {count}</button>
        </div>
    )
}

export default CommonHOC(LikeImageHoc)