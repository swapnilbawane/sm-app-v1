import '../../style.css'
import '../../index.css'
import { useState } from 'react'
import { PostComponent } from '../../Components/PostComponent'
import { useAuth } from '../../Context/auth-context'
import { usePost } from '../../Context/post-context'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure,
} from '@chakra-ui/react'

// On clicking POST it calls API - recreate it.

export function MainHome() {
    const { data, allUsers, currentUser } = useAuth()
    const {
        addNewPostHandler,
        postHandler,
        newPost,
        trendingPostsHandler,
        latestPostsHandler,
    } = usePost()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [posts, setPosts] = useState({ trending: false, latest: true })

    // console.log('data from main home', data)

    return (
        <>
            <main className="mt-xl">
                <div className="white-bg mr-xxl p-xs mt-s">
                    <div className="flex flex-row nowrap p-xs">
                        {/* <div
                            className="grey-bg br-full width-xl height-xl p-xs mr-xs"
                           
                        ></div> */}

                        <img
                            src={currentUser?.profileimage}
                            alt="gravatar_1"
                            className="br-full width-xl height-xl mr-xs"
                            style={{ aspectRatio: '1' }}
                        />

                        <div className="w-full">
                            <textarea
                                cols="50"
                                rows="6"
                                className="w-full lynx-white-bg p-s outline-transparent border-none"
                                style={{ resize: 'none' }}
                                placeholder="Write something interesting..."
                                spellCheck={false}
                                data-ms-editor={true}
                                value={newPost}
                                onChange={addNewPostHandler}
                            ></textarea>
                            <div className="flex flex-space-between pt-s">
                                {/* <div className="flex" style={{ gap: '1rem' }}>
                                    <i className="bi bi-card-image"></i>
                                    <i className="bi bi-filetype-gif"></i>
                                    <i className="bi bi-emoji-smile"></i>
                                </div> */}
                                <button
                                    className="primary-bg p-l pt-xs pb-xs secondary-color border-none outline-transparent"
                                    onClick={postHandler}
                                >
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-space-between mr-xxl flex-align-center pt-s">
                    {posts.latest === true && <h3>Latest Posts</h3>}
                    {posts.trending === true && <h3>Trending Posts</h3>}

                    {/* <div>
                        <button onClick={() => latestPostsHandler()}>
                            {' '}
                            Latests Posts{' '}
                        </button>
                        <button onClick={() => trendingPostsHandler()}>
                            {' '}
                            Trending Posts{' '}
                        </button>
                    </div> */}

                    {/* <i className="bi bi-sliders2-vertical"></i> */}
                    <>
                        <Menu>
                            <MenuButton>
                                <i
                                    className="bi bi-sliders2-vertical"
                                    onClick={onOpen}
                                ></i>
                            </MenuButton>

                            <MenuList>
                                <MenuItem
                                    onClick={() => {
                                        setPosts({
                                            ...posts,
                                            latest: false,
                                            trending: true,
                                        })
                                        trendingPostsHandler()
                                    }}
                                >
                                    Trending Posts
                                </MenuItem>

                                <MenuItem
                                    onClick={() => {
                                        setPosts({
                                            ...posts,
                                            latest: true,
                                            trending: false,
                                        })
                                        latestPostsHandler()
                                    }}
                                >
                                    Latests Posts
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </>
                </div>

                <div className="white-bg mr-xxl p-xs mt-s">
                    {/* TODO: Add a map function here but first get data on first load in login context */}

                    {data?.posts?.map((item) => {
                        // const itemid = item._id
                        // const itemusername = item.username
                        const { firstName, lastName, profileimage } =
                            allUsers.find(
                                (user) => user.username === item.username
                            ) // finding first name based on username
                        //  what this does is that it is showing home feed so for each posts - it is taking user name from each posts and then from that it is searching data of all users and from that it is taking first name and lastname to be displayed on home feed.

                        const postData = {
                            ...item,
                            firstName,
                            lastName,
                            profileimage,
                        }
                        return (
                            <div key={item._id}>
                                <PostComponent {...postData} />
                            </div>
                        )
                    })}
                </div>
            </main>
        </>
    )
}
