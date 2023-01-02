import React, { useEffect } from 'react'

export default function LifeCycleHooks({number}) {
    useEffect(()=>{
        console.log("Functional Component: mounting....")
        console.log("Functional Component: updating....")
    },[number]
    )

    
  return (
    <>
        <h2>{number}</h2>
    </>
    
  )
}
