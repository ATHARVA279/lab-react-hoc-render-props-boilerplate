import React from 'react'

const CommonHOC = (ChildComp) => {
    let logic=()=>{
        const [count,setCount]=React.useState(0)
        function handleCount() {
            setCount(count+1)
            
        }
        return <ChildComp handleCount={handleCount} count={count}/>

    }

  return logic;
}

export default CommonHOC