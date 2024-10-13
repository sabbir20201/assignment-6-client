/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { TRecipe } from '@/types';
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import Image from 'next/image';
import Link from 'next/link';
const RecipeCart = ({ recipe }: { recipe: TRecipe }) => {
  const { user, title,  description, _id} = recipe as any;
  const { profileImage, userName , email} = user;
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <div>
      <Card className="rounded-sm">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar isBordered radius="full" size="md" src={profileImage} />
            {/* <Avatar src={recipe.user?.profileImage}/> */}
            {/* <Image src={} /> */}
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">    {userName}</h4>
              <h5 className="text-small tracking-tight text-default-400">{email}</h5>
            </div>
          </div>
          <div>

          </div>
          <Button
            className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
            color="primary"
            radius="full"
            size="sm"
            variant={isFollowed ? "bordered" : "solid"}
            onPress={() => setIsFollowed(!isFollowed)}
          >
            {isFollowed ? "Unfollow" : "Follow"}
          </Button>
        </CardHeader>
        <Link href={`/recipe/${_id}`} passHref>
        <CardBody className="px-3 py-0 text-small text-default-700">
          {/* <CardBody className="overflow-visible py-2"> */}
          <Image
            alt="Card background"
            className="object-cover rounded-md"
            src={recipe?.image}
            width={500}
            height={250}
            style={{ height: '250px' }}
          />
          {/* </CardBody> */}

          {/* <h1 className='font-semibold pt-2'>{title}</h1> */}
    
            <h1 className='font-semibold pt-2 cursor-pointer'>{title}</h1>
       
          <h1 className='font-semibold pt-2'>{description}</h1>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">4</p>
            <p className=" text-default-400 text-small">Following</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">97.1K</p>
            <p className="text-default-400 text-small">Followers</p>
          </div>
        </CardFooter>
        </Link>
      </Card>
    </div>
  );
};

export default RecipeCart;