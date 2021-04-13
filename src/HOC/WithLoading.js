import React from 'react'
import Loading from '../components/loading/Loading'

export default function WithLoading(Component) {
  return ({isLoading, ...props})=>{
    // if(isLoading){
    //   return <Component {...props} />
    // }else{
    //   <p>Is loading</p>
    // }

    return !isLoading ? <Component {...props} /> : <Loading/>
  }
}
