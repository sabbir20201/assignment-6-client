import React from 'react';
import LeftSideBar from './components/ui/LeftSideBar';
import RightSideBar from './components/ui/RightSideBar';
import LatestRecipe from './components/latestRecipe/LatestRecipe';

const mainPage = async () => {
  const res = await fetch('http://localhost:5000/api/recipe', {
    next: {
      revalidate: 20,
    }
  })
  const recipe = await res.json()
  const {data} = recipe
  // console.log('main page =>',data);

  return (
    <>
      <div className='max-w-6xl mx-auto'>
        <div className='flex gap-5 mt-5'>
          <div className='w-3/12  rounded hidden lg:block'>
            <LeftSideBar></LeftSideBar>
          </div>
          <div className='lg:w-6/12 md:w-9/12 sm:w-full'>
            <LatestRecipe data={data}></LatestRecipe>
          </div>
          <div className='w-3/12 rounded hidden md:block lg:block'>
            <RightSideBar></RightSideBar>
          </div>
        </div>
      </div>
    </>

  );
};

export default mainPage;