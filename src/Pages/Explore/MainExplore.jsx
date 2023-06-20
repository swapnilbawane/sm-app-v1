import '../../style.css'
import '../../index.css'

import { PostComponent } from '../../Components/PostComponent'
import { useAuth } from '../../Context/auth-context'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export function MainExplore() {
    const { data, currentUser, setData } = useAuth()
    // const [ newPost, setNewPost ] = useState("");
    const [exploreData, setExploreData] = useState(data)
    const [category, setCategory] = useState('foryou')
    const [isActive, setIsActive] = useState({
        foryou: true,
        trending: false,
        technology: false,
        sports: false,
        news: false
    })

    const semibold =
        'border p-xs mt-xs mb-xs mr-s width-7 txt-center fw-semibold'
    const greycolor =
        'border p-xs mt-xs mb-xs mr-s ml-s width-7 txt-center grey-color'
    const link = null

    const categoryHandler = (e) => {
        const categoryName = e.target.value

        switch (categoryName) {
            case 'foryou':
                console.log('foryou')
                setIsActive({foryou: true,
                  trending: false,
                  technology: false,
                  sports: false,
                  news: false})
                break

            case 'trending':
                console.log('trending')
                setIsActive({foryou: false,
                  trending: true,
                  technology: false,
                  sports: false,
                  news: false})
                break

            case 'technology':
                console.log('technology')
                setIsActive({foryou: false,
                  trending: false,
                  technology: true,
                  sports: false,
                  news: false})
                break

            case 'sports':
                console.log('sports')
                setIsActive({foryou: false,
                  trending: false,
                  technology: false,
                  sports: true,
                  news: false})
                break

            case 'news':
                console.log('news')
                setIsActive({foryou: false,
                  trending: false,
                  technology: false,
                  sports: false,
                  news: true})
                break

            default:
                console.log('end of switch')
                break
        }
    }

    return (
        <>
            <main className="mt-xl">
                <h3 className="pt-s">Explore</h3>

                <div className="flex flex-row nowrap">
                    <button
                        className={isActive.foryou ? semibold : greycolor}
                        value="foryou"
                        onClick={categoryHandler}
                    >
                        For You
                    </button>

                    <button
                        className={isActive.trending ? semibold : greycolor}
                        value="trending"
                        onClick={categoryHandler}
                    >
                        Trending
                    </button>

                    <button
                        className={isActive.technology ? semibold : greycolor}
                        value="technology"
                        onClick={categoryHandler}
                    >
                        Technology
                    </button>

                    <button
                        className={isActive.sports ? semibold : greycolor}
                        value="sports"
                        onClick={categoryHandler}
                    >
                        Sports
                    </button>

                    <button
                        className={isActive.news ? semibold : greycolor}
                        value="news"
                        onClick={categoryHandler}
                    >
                        News
                    </button>
                </div>

                {/* Render posts all */}

                <div className="white-bg mr-xxl p-xs mt-s">
                    {/* TODO: Add a map function here but first get data on first load in login context */}

                    {exploreData?.posts?.map((item) => {
                        const postData = { ...item, ...currentUser }
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
