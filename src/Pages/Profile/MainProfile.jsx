import '../../style.css'
import '../../index.css'

import { PostComponent } from "../../Components/PostComponent"; 
import { useAuth } from '../../Context/auth-context'
import { Link } from 'react-router-dom';

export function MainProfile() {
    const { data, currentUser, setData } = useAuth()

    return (
        <>
            <main className="p-s">
                <div className="flex flex-column flex-center">
                    <div className="lynx-gray-bg width-7 height-7 br-full"></div>
                    <h3 className="pt-s">Tanay Pratap</h3>
                    <p className="grey-color txt-s">@tanaypratap</p>
                    <button className="border lynx-white-bg p-xs m-xs fw-semibold width-8">
                        Edit Profile
                    </button>
                    <p className="m-xs p-xs">
                        Senior Software Engineer @Microsoft | Creator of India's
                        biggest programming community | Tweets about JavaScript,
                        ReactJS, Career and Startups
                    </p>
                    <p className="primary-color"> <a href="https://www.tanaypratap.com" target="_blank" rel="noopener noreferrer">tanaypratap.com </a> </p>
                    
                    <div className="white-bg p-xs m-xs flex flex-row flex-space-evenly">
                        <div className="flex flex-column flex-center m-s ml-m mr-m">
                            <p className="fw-black">0</p>
                            <p className="fw-semibold">Following</p>
                        </div>
                        <div className="flex flex-column flex-center m-s ml-m mr-m">
                            <p className="fw-black">2K</p>
                            <p className="fw-semibold">Posts</p>
                        </div>
                        <div className="flex flex-column flex-center m-s ml-m mr-m">
                            <p className="fw-black">37.3K</p>
                            <p className="fw-semibold">Followers</p>
                        </div>
                    </div>
                </div>

                <h3 className="m-s">Your Posts</h3>

                <div className="white-bg">
                    <div className="white-bg mr-xxl p-xs mt-s">
                        {/* TODO: Add a map function here but first get data on first load in login context */}

                        {data?.posts?.map((item) => {
                            const postData = { ...item, ...currentUser }
                            return (
                                <div key={item._id}>
                                    <PostComponent {...postData} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </main>
        </>
    )
}
