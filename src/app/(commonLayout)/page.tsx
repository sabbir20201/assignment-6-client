import React from 'react';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import NewsFeed from './components/NewsFeed';

const mainPage = () => {
  return (
    <>
        <div className=''>
      <div className='flex gap-5 mt-5'>
        <div className='w-3/12 border rounded '>
        <LeftSideBar></LeftSideBar>
        </div>
        <div className='w-6/12'>
        <NewsFeed></NewsFeed>
        </div>
        <div className='w-3/12 border rounded'>
        <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
    </>

  );
};

export default mainPage;