import '../../style.css'
import '../../index.css'

import { PostComponent } from '../../Components/PostComponent'
import { useAuth } from '../../Context/auth-context'
import { Link } from 'react-router-dom'
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

import { Button, useDisclosure } from '@chakra-ui/react'

import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'


export function MainProfile() {
    const {
        data,
        currentUser,
        setData,
        loggedUserName,
        profilePostsData,
        setProfilePostsData,
        editUserHandler
    } = useAuth()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [textEdit, setTextEdit] = useState({
        bio: currentUser.bio,
        link: currentUser.link,
    })

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

    console.log(
        `The number of posts for ${currentUser.username} is ${numberOfPosts}`
    )

    return (
        <>
            <main className="p-s">
                <div className="flex flex-column flex-center">
                    <div className="lynx-gray-bg width-7 height-7 br-full"></div>
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
                                <>
                                    <p> Name: {currentUser.firstName} {currentUser.lastName} </p>
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
                                    <p> Link </p>
                                    <textarea
                                        name="link"
                                        value={textEdit.link}
                                        onChange={textEditHandler}
                                    >
                                        {currentUser.link}
                                    </textarea>
                                </>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    colorScheme="blue"
                                    mr={3}
                                    onClick={() => {
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

                                const itemData = {
                                    ...item,
                                    firstName,
                                    lastName,
                                }
                                console.log(index, 'item data', itemData)

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
