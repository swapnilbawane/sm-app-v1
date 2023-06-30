import '../../style.css'
import '../../index.css'

import { PostComponent } from '../../Components/PostComponent'
import { useAuth } from '../../Context/auth-context'
import { useState } from 'react'
import { EmptyProfileFeed } from './EmptyProfileFeed'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

import { Button } from '@chakra-ui/react'

export function MainProfile() {
    const {
        data,
        currentUser,
        setData,
        loggedUserName,
        profilePostsData,
        setProfilePostsData,
        editUserHandler,
    } = useAuth()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [textEdit, setTextEdit] = useState({
        bio: currentUser.bio,
        link: currentUser.link,
        profileimage: currentUser.profileimage,
    })

    const avatarHandler = (imageLink) => {
        // if(e.target.name==="gr_1") {
        setTextEdit({ ...textEdit, profileimage: imageLink })
        // }
    }

    const textEditHandler = (e) => {
        if (e.target.name === 'bio') {
            setTextEdit({ ...textEdit, bio: e.target.value })
        }

        if (e.target.name === 'link') {
            setTextEdit({ ...textEdit, link: e.target.value })
        }
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const handleProfileEditClick = () => {
        setIsModalOpen(true)
    }

    const numberOfPosts = data.posts.reduce((acc, curr) => {
        return curr.username === currentUser.username ? acc + 1 : acc
    }, 0)

    // console.log(
    //     `The number of posts for ${currentUser.username} is ${numberOfPosts}`
    // )

    return (
        <>
            <main className="p-s">
                <div className="flex flex-column flex-center">
                    {/* <div className="lynx-gray-bg width-7 height-7 br-full">  */}
                    <img
                        src={currentUser.profileimage}
                        alt="gravatar_1"
                        className="gravatar-icon"
                    />
                    {/* </div> */}

                    <h3 className="pt-s">
                        {currentUser.firstName} {currentUser.lastName}
                    </h3>
                    <p className="grey-color txt-s">@{currentUser.username}</p>
                    <button
                        className="border lynx-white-bg p-xs m-xs fw-semibold width-8"
                        onClick={handleProfileEditClick}
                    >
                        Edit Profile Details
                    </button>

                    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Your Profile Details</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <div className="editprofile-container">
                                    <div className="gravatar-body">
                                        <div>
                                            {' '}
                                            <p> Change your Gravatar </p>{' '}
                                        </div>

                                        <div className="gravatar-container">
                                            <img
                                                src="https://res.cloudinary.com/djhnar3ju/image/upload/v1688106576/Gravatar/Gravatar_2.jpg"
                                                alt="gravatar_1"
                                                name="gr_1"
                                                className="gravatar-icon"
                                                onClick={() =>
                                                    avatarHandler(
                                                        'https://res.cloudinary.com/djhnar3ju/image/upload/v1688106576/Gravatar/Gravatar_2.jpg'
                                                    )
                                                }
                                            />

                                            <img
                                                src="https://res.cloudinary.com/djhnar3ju/image/upload/v1688106577/Gravatar/Gravatar_3.jpg"
                                                alt="gravatar_1"
                                                name="gr_2"
                                                className="gravatar-icon"
                                                onClick={() =>
                                                    avatarHandler(
                                                        'https://res.cloudinary.com/djhnar3ju/image/upload/v1688106577/Gravatar/Gravatar_3.jpg'
                                                    )
                                                }
                                            />

                                            <img
                                                src="https://res.cloudinary.com/djhnar3ju/image/upload/v1688106576/Gravatar/Gravatar_4.jpg"
                                                alt="gravatar_1"
                                                name="gr_3"
                                                className="gravatar-icon"
                                                onClick={() =>
                                                    avatarHandler(
                                                        'https://res.cloudinary.com/djhnar3ju/image/upload/v1688106576/Gravatar/Gravatar_4.jpg'
                                                    )
                                                }
                                            />

                                            <img
                                                src="https://res.cloudinary.com/djhnar3ju/image/upload/v1688106576/Gravatar/Gravatar_5.jpg"
                                                alt="gravatar_1"
                                                name="gr_4"
                                                className="gravatar-icon"
                                                onClick={() =>
                                                    avatarHandler(
                                                        'https://res.cloudinary.com/djhnar3ju/image/upload/v1688106576/Gravatar/Gravatar_5.jpg'
                                                    )
                                                }
                                            />

                                            <img
                                                src="https://res.cloudinary.com/djhnar3ju/image/upload/v1688106576/Gravatar/Gravatar_6.jpg"
                                                alt="gravatar_1"
                                                name="gr_5"
                                                className="gravatar-icon"
                                                onClick={() =>
                                                    avatarHandler(
                                                        'https://res.cloudinary.com/djhnar3ju/image/upload/v1688106576/Gravatar/Gravatar_6.jpg'
                                                    )
                                                }
                                            />

                                            <img
                                                src="https://res.cloudinary.com/djhnar3ju/image/upload/v1688107497/Gravatar/Gravatar_1.jpg"
                                                alt="gravatar_1"
                                                name="gr_6"
                                                className="gravatar-icon"
                                                onClick={() =>
                                                    avatarHandler(
                                                        'https://res.cloudinary.com/djhnar3ju/image/upload/v1688107497/Gravatar/Gravatar_1.jpg'
                                                    )
                                                }
                                            />
                                        </div>

                                        <hr />

                                        <div className="current-gravatar">
                                            <p> Your gravatar </p>
                                            <img
                                                src={textEdit.profileimage}
                                                alt="gravatar_1"
                                                className="gravatar-icon"
                                            />
                                        </div>
                                    </div>

                                    <hr />

                                    <p>
                                        {' '}
                                        Name: {currentUser.firstName}{' '}
                                        {currentUser.lastName}{' '}
                                    </p>
                                    <hr />
                                    <p> Username: {currentUser.username} </p>
                                    <hr />
                                    <br />
                                    <p> Bio </p>
                                    <textarea
                                        name="bio"
                                        value={textEdit.bio}
                                        onChange={textEditHandler}
                                    >
                                        {currentUser.bio}
                                    </textarea>

                                    <hr />
                                    <br />
                                    <p> Link ( eg. https://www.example.com ) </p>
                                    <textarea
                                        name="link"
                                        value={textEdit.link}
                                        onChange={textEditHandler}
                                    >
                                        {currentUser.link}
                                    </textarea>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    colorScheme="blue"
                                    mr={3}
                                    onClick={() => {
                                        console.log({textEdit})
                                        editUserHandler(textEdit)
                                        handleCloseModal()
                                    }}
                                >
                                    Save
                                </Button>
                                {/* <Button variant="ghost">Delete</Button> */}
                            </ModalFooter>
                        </ModalContent>
                    </Modal>

                    <p className="m-xs p-xs">{currentUser.bio}</p>
                    <p className="primary-color">
                        {' '}
                        <a
                            href={currentUser.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {currentUser.link}
                        </a>{' '}
                    </p>

                    <div className="white-bg p-xs m-xs flex flex-row flex-space-evenly">
                        <div className="flex flex-column flex-center m-s ml-m mr-m">
                            <p className="fw-black">
                                {currentUser.following.length}
                            </p>
                            <p className="fw-semibold">Following</p>
                        </div>
                        <div className="flex flex-column flex-center m-s ml-m mr-m">
                            <p className="fw-black">{numberOfPosts}</p>
                            <p className="fw-semibold">Posts</p>
                        </div>
                        <div className="flex flex-column flex-center m-s ml-m mr-m">
                            <p className="fw-black">
                                {currentUser.followers.length}
                            </p>
                            <p className="fw-semibold">Followers</p>
                        </div>
                    </div>
                </div>

                <h3 className="m-s">Your Posts</h3>

                <div className="white-bg">
                    <div className="white-bg mr-xxl p-xs mt-s">
                        {/* TODO: Add a map function here but first get data on first load in login context */}

                        {profilePostsData?.posts.length === 0 ? (
                            <EmptyProfileFeed />
                        ) : (
                            profilePostsData?.posts?.map((item, index) => {
                                // const postData = { ...item}
                                const firstName = currentUser.firstName
                                const lastName = currentUser.lastName
                                const profileimage = currentUser.profileimage

                                const itemData = {
                                    ...item,
                                    firstName,
                                    lastName,
                                    profileimage
                                }
                                // console.log(index, 'item data', itemData)

                                return item.username === loggedUserName ? (
                                    <div key={item._id}>
                                        <PostComponent {...itemData} />
                                    </div>
                                ) : null
                            })
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}
