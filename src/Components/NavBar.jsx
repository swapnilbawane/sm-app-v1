//  TODO: Conditional rendering based on useLocation for NavBar

import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import '../style.css'
import '../index.css'
import { useAuth } from '../Context/auth-context'
import { useState } from 'react'
import { usePost } from '../Context/post-context'

export function NavBar() {
    const location = useLocation()
    console.log('location', location)

    const { addNewPostHandler, postHandler, newPost, setNewPost } = usePost()

    return (
        <>
            {/* check by location if location is /home then keep it bold like className={location==="/home" ? "fw-bold" : "fw"} */}
            <div>
                <div className="pt-s black-color fw-semibold">
                    <Link to="/home">
                        <i className="bi bi-house"> </i>
                        &nbsp;
                        <span
                            className={
                                location.pathname === '/home' ? 'fw-bold' : 'fw'
                            }
                        >
                            Home
                        </span>
                    </Link>
                </div>

                <div className="pt-s black-color fw-semibold">
                    <Link to="/explore">
                        <i className="bi bi-rocket"> </i>
                        &nbsp;
                        <span
                            className={
                                location.pathname === '/explore'
                                    ? 'fw-bold'
                                    : 'fw'
                            }
                        >
                            Explore
                        </span>
                    </Link>
                </div>

                <div className="pt-s black-color fw-semibold">
                    <Link to="/bookmark">
                        <i className="bi bi-bookmark"> </i>
                        &nbsp;
                        <span
                            className={
                                location.pathname === '/bookmark'
                                    ? 'fw-bold'
                                    : 'fw'
                            }
                        >
                            Bookmark
                        </span>
                    </Link>
                </div>

                <div className="pt-s black-color fw-semibold">
                    <Link to="/profile">
                        <i className="bi bi-person"> </i>
                        &nbsp;
                        <span
                            className={
                                location.pathname === '/profile'
                                    ? 'fw-bold'
                                    : 'fw'
                            }
                        >
                            Profile
                        </span>
                    </Link>
                </div>

                {/* <button className="mt-m p-s primary-bg white-color border-none outline-transparent new-post-btn"> Create New Post </button> */}
                {/* starts here  */}

                {location.pathname !== '/home' ? (
                    <Popup
                        trigger={
                            <button className="mt-m p-s primary-bg white-color border-none outline-transparent new-post-btn">
                                {' '}
                                Create New Post{' '}
                            </button>
                        }
                        modal
                        nested
                    >
                        {(close) => (
                            <div className="modal">
                                <button className="close" onClick={close}>
                                    &times;
                                </button>

                                <div className="header"> Create New Post </div>
                                <div className="white-bg mr-xxl p-xs mt-s">
                                    <div className="flex flex-row nowrap p-xs">
                                        <div
                                            className="grey-bg br-full width-xl height-xl p-xs mr-xs"
                                            style={{ aspectRatio: '1' }}
                                        ></div>
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
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* {item.name} */}

                                <div className="actions">
                                    <button
                                        className="primary-bg p-l pt-xs pb-xs secondary-color border-none outline-transparent"
                                        onClick={() => {
                                            postHandler()
                                            close()
                                        }}
                                    >
                                        Post
                                    </button>
                                </div>
                            </div>
                        )}
                    </Popup>
                ) : null}

                {/* ends here  */}
            </div>
        </>
    )
}
