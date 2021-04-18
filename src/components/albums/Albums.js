import React from 'react'
import { useSelector } from 'react-redux'
import Album from './Album'

export default function Albums() {
  const albumList = useSelector(state => state.albums)
 
  return (
    <div >
      {albumList.length > 0 ?(
        albumList.map(album=><Album key={album.id} id={album.id} title={album.title}/>)
      ): (
        <p>List is Empty </p>
      )} 
    </div>
  )
}
