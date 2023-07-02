// TODO: This is a card component, this should receive the destructured data from the map function run in Other Profile page.
import { useState } from 'react'
import { useAuth } from '../Context/auth-context'
import { useInteraction } from '../Context/interaction-context'

import { useDisclosure } from '@chakra-ui/react'

import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

export function PostComponentOther({
    _id,
    content,
    username,
    likes,
    firstName,
    lastName,
    profileimage,
}) {
    const {
        likeHandler,
        dislikeHandler,
        bookmarkHandler,
        removeBookmarkHandler,
    } = useInteraction()

    const { currentUser, data, bookmarkData, loggedUserName } = useAuth()

    // let bookmarkLikes

    // if (bookmark) {
    //     const { likes } = data.posts.find((item) => item._id === _id)
    //     bookmarkLikes = likes
    // }

    const isPresentInBookmarks = bookmarkData.findIndex(
        (item) => item._id === _id
    )

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    // const [textEdit, setTextEdit] = useState(content)

    // const textEditHandler = (e) => {
    //     setTextEdit(e.target.value)
    // }

    // const handleEditClick = () => {
    //     setIsModalOpen(true)
    // }

    // const location = useLocation()

    return (
        <>
            <div className="flex flex-row nowrap p-xs">
                {/* <div
                    className="grey-bg br-full width-xl height-xl p-xs mr-xs"
                    style={{ aspectRatio: '1' }}
                ></div> */}

                <img
                    src={profileimage}
                    alt="gravatar_1"
                    className="br-full width-xl height-xl p-xs mr-xs"
                />

                <div>
                    {/* TODO: CSS BUG the three dots spacing is affected by the number of lines posted */}
                    <div className="flex flex-row flex-align-center flex-space-between">
                        <div className="flex flex-row">
                            <p className="fw-semibold">
                                {firstName} {lastName}
                            </p>
                            <p className="grey-color pl-xs">
                                @{username}
                                <span className="pl-xs">.</span>
                                <span className="pl-xs">1 min</span>
                            </p>
                        </div>

                        <>
                            <Menu>
                                <MenuButton>
                                    <i
                                        className="bi bi-three-dots cursor-pointer"
                                        onClick={onOpen}
                                    ></i>
                                </MenuButton>

                                <MenuList>
                                    <MenuItem>Feature Coming Soon</MenuItem>
                                </MenuList>
                            </Menu>
                        </>
                    </div>

                    <p className="pr-s pt-xs width-xtralarge">{content}</p>

                    <div className="flex flex-row nowrap flex-space-between pb-xs pt-m pr-s flex-align-center">
                        {likes?.likeCount > 0 ? (
                            <i
                                className="bi bi-heart-fill cursor-pointer"
                                onClick={() => dislikeHandler(_id)}
                            ></i>
                        ) : (
                            <i
                                className="bi bi-heart cursor-pointer"
                                onClick={() => likeHandler(_id)}
                            ></i>
                        )}

                        {/* <i className="bi bi-chat-left"></i>
                        <i className="bi bi-share"></i> */}

                        {isPresentInBookmarks === -1 ? (
                            <i
                                className="bi bi-bookmark cursor-pointer"
                                onClick={() => bookmarkHandler(_id)}
                            ></i>
                        ) : (
                            <i
                                className="bi bi-bookmark-fill cursor-pointer"
                                onClick={() => removeBookmarkHandler(_id)}
                            ></i>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
