import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PageTitle from '../pageTitle/PageTitle'
import WithLoading from '../../HOC/WithLoading';
import Albums from './Albums';
import { loadAllAlbums, loadAllAlbumsAsync } from '../../redux/actions';

export default function AlbumsIndex() {
  const [isloading, setIsLoading] = useState(true);
  const AlbumsWidthLoading = WithLoading(Albums)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllAlbumsAsync())
    setIsLoading(false)
  }, [dispatch])
  return (
    <div className='container'>
      <PageTitle title='Albums' />
      <div className='row'>
        <div className='col-sm-2'>
          <aside>Aside</aside>
        </div>
        <div className='col-sm-10'>
          <AlbumsWidthLoading isLoading={isloading} />
          
        </div>
      </div>
    </div>
  )
}
