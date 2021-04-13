import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../pageTitle/PageTitle';
import Post from './Post';

export default function Posts() {
  const [postList, setPosts] = useState([
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body:
        'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body:
        'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
  ]);

  const [showList, setShowList] = useState(true);

  const addNewPostHandler = () => {
    setPosts([
      ...postList,
      {
        userId: 1,
        id: 3,
        title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        body:
          'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
      },
    ]);
  };

  const toggleListHandler = () => {
    setShowList(!showList);
  };

  useEffect(() => {
    console.log('Use Effect call after change any state (mount and update)');
  });

  useEffect(() => {
    console.log('Use Effect (did mount)');
  }, []);

  useEffect(() => {
    console.log('Use Effect (mount and after change post list)');
  }, [postList]);

  useEffect(() => {

    return () => {
      console.log('clean (unmount)');
    };
  }, []);
  return (
    <div className={['container', 'mt-5'].join(' ')}>
      
      <PageTitle title='Posts' />

      <button className='btn btn-success' onClick={addNewPostHandler}>
        Add New
      </button>
      <button className='btn btn-danger' onClick={toggleListHandler}>
        Toggle List
      </button>
      <div className='row'>
        {showList
          ? postList.map((post, index) => (
              <div className='col-md-6 ' key={index}>
                <Post
                  id={post.id}
                  userId={post.userId}
                  title={post.title}
                  body={post.body}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
