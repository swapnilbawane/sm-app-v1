import '../../style.css'
import '../../index.css'

import { PostComponent } from '../../Components/PostComponent';
import { PostComponentOther } from '../../Components/PostComponentOther';
import { useAuth } from '../../Context/auth-context';
import { useEffect, useState } from 'react';
import { EmptyProfileFeed } from '../Profile/EmptyProfileFeed';

export function MainOtherProfile({ 
    firstName,
    lastName,
    username,
    followers,
    following,
    bio,
    link
}) { 

const { 
data,
allUsers,
otherProfilePostsData,
setOtherProfilePostsData,
originalPostsData,
loggedUserName,
currentUser
} = useAuth()

const [ user, setUser ] = useState({followers:[], following:[]})

const isFollowing = currentUser.following.findIndex((item)=>item.username===username)


console.log("other profile isFollowing", isFollowing)

const numberOfPosts = data.posts.reduce((acc, curr) => {
    return curr.username === username ? acc + 1 : acc
}, 0)

const getOtherUserData = () => { 
    const otherUserPosts = originalPostsData.posts.filter((item)=> item.username === username)
    console.log("other user posts", otherUserPosts)
    setOtherProfilePostsData(otherUserPosts)
}

useEffect(()=> { 
    getOtherUserData();
},[])

    return(
        <>
         <main className="p-s">
                <div className="flex flex-column flex-center">
                    <div className="lynx-gray-bg width-7 height-7 br-full"></div>
                    <h3 className="pt-s">
                        {firstName} {lastName}
                    </h3>
                    <p className="grey-color txt-s">@{username}</p>
                    <button
                        className="border lynx-white-bg p-xs m-xs fw-semibold width-8"
                        // onClick={handleProfileEditClick}
                    >
                        { isFollowing === -1 ? `Follow` : `Following` } 
                    </button>

                   

                    <p className="m-xs p-xs">{bio}</p>
                    <p className="primary-color">
                        {' '}
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link}
                        </a>{' '}
                    </p>

                    <div className="white-bg p-xs m-xs flex flex-row flex-space-evenly">
                        <div className="flex flex-column flex-center m-s ml-m mr-m">
                            <p className="fw-black">
                                {following.length}
                            </p>
                            <p className="fw-semibold">Following</p>
                        </div>
                        <div className="flex flex-column flex-center m-s ml-m mr-m">
                            <p className="fw-black">{numberOfPosts}</p>
                            <p className="fw-semibold">Posts</p>
                        </div>
                        <div className="flex flex-column flex-center m-s ml-m mr-m">
                            <p className="fw-black">
                                {followers.length}
                            </p>
                            <p className="fw-semibold">Followers</p>
                        </div>
                    </div>
                </div>

                <h3 className="m-s">Your Posts</h3>

                <div className="white-bg">
                    <div className="white-bg mr-xxl p-xs mt-s">
                        {/* TODO: Add a map function here but first get data on first load in login context */}

                        {otherProfilePostsData?.length === 0 ? (
                            <EmptyProfileFeed />
                        ) : (
                            otherProfilePostsData?.map((item, index) => {
                               
                                const itemData = {
                                    ...item,
                                    firstName,
                                    lastName,
                                }
                             
                                console.log(index, 'item data', itemData)

                                return (
                                    <div key={item._id}>
                                        <PostComponentOther {...itemData} />
                                    </div>
                                )
                            })
                        )}
                    </div>
                </div>
            </main>
        </>
    ); 
}