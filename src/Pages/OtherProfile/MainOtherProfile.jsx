import '../../style.css'
import '../../index.css'

import { PostComponentOther } from '../../Components/PostComponentOther'
import { useAuth } from '../../Context/auth-context'
import { useEffect, useState } from 'react'
import { EmptyProfileFeed } from '../Profile/EmptyProfileFeed'

export function MainOtherProfile({
    firstName,
    lastName,
    username,
    followers, // comment
    following, // comment
    bio,
    link,
}) {
    const {
        data,
        allUsers,
        otherProfilePostsData,
        setOtherProfilePostsData,
        originalPostsData,
        loggedUserName,
        currentUser,
    } = useAuth()

    const [user, setUser] = useState({})

    const isFollowing = currentUser.following.findIndex(
        (item) => item.username === username
    )

    const otherUserId = allUsers.find((item) => item.username === username)._id

    // console.log('other profile isFollowing', isFollowing)

    const numberOfPosts = data.posts.reduce((acc, curr) => {
        return curr.username === username ? acc + 1 : acc
    }, 0)

    useEffect(() => {
        const getOtherProfileUserData = async () => {
            try {
                const otherUserPostsResponse = await fetch(
                    `/api/users/${otherUserId}`
                )
                // console.log("other profile user response", (await otherUserPostsResponse.json()))

                if (otherUserPostsResponse.status === 200) {
                    let userResponse = await otherUserPostsResponse.json()
                    userResponse = userResponse.user
                    // console.log('userResponse', userResponse)
                    const otherUserPosts = {...originalPostsData}?.posts?.filter(
                        (item) => item.username === username
                    )
                    setOtherProfilePostsData(otherUserPosts)
                    setUser(userResponse)
                }
            } catch (error) {
                console.log(error)
            }
        }

        getOtherProfileUserData()
    }, [otherUserId, allUsers])

    return (
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
                        {isFollowing === -1 ? `Follow` : `Following`}
                    </button>

                    <p className="m-xs p-xs">{bio}</p>
                    <p className="primary-color">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link}
                        </a>
                    </p>

                    <div className="white-bg p-xs m-xs flex flex-row flex-space-evenly">
                        <div className="flex flex-column flex-center m-s ml-m mr-m">
                            <p className="fw-black">
                                {user?.following?.length}
                            </p>
                            <p className="fw-semibold">Following</p>
                        </div>
                        <div className="flex flex-column flex-center m-s ml-m mr-m">
                            <p className="fw-black">{numberOfPosts}</p>
                            <p className="fw-semibold">Posts</p>
                        </div>
                        <div className="flex flex-column flex-center m-s ml-m mr-m">
                            <p className="fw-black">
                                {user?.followers?.length}
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
    )
}
