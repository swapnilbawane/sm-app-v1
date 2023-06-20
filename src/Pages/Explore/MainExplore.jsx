import '../../style.css'
import '../../index.css'

import { PostComponent } from '../../Components/PostComponent'
import { useAuth } from '../../Context/auth-context'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export function MainExplore() {
    const { data, currentUser, setData, allUsers } = useAuth()
    // const [ newPost, setNewPost ] = useState("");
    const [exploreData, setExploreData] = useState(data)
    const [category, setCategory] = useState('foryou')

    const [isActive, setIsActive] = useState({
        foryou: true,
        trending: false,
        science: false,
        cricket: false,
        india: false,
    })

    const semibold =
        'border p-xs mt-xs mb-xs mr-s width-7 txt-center fw-semibold'
    const greycolor =
        'border p-xs mt-xs mb-xs mr-s ml-s width-7 txt-center grey-color'

    const categoryHandler = (e) => {
        const categoryName = e.target.value

        switch (categoryName) {
            case 'foryou':
                console.log('foryou')
                setIsActive({
                    foryou: true,
                    trending: false,
                    science: false,
                    cricket: false,
                    india: false,
                })

                break

            case 'trending':
                console.log('trending')
                setIsActive({
                    foryou: false,
                    trending: true,
                    science: false,
                    cricket: false,
                    india: false,
                })

                const trendingData = data.posts.filter(
                    (posts) => posts.category === 'trending'
                )
                setExploreData({ posts: trendingData })
                break

            case 'science':
                console.log('science')
                setIsActive({
                    foryou: false,
                    trending: false,
                    science: true,
                    cricket: false,
                    india: false,
                })
                const scienceData = data.posts.filter(
                    (posts) => posts.category === 'science'
                )
                setExploreData({ posts: scienceData })
                break

            case 'cricket':
                console.log('cricket')
                setIsActive({
                    foryou: false,
                    trending: false,
                    science: false,
                    cricket: true,
                    india: false,
                })
                const cricketData = data.posts.filter(
                    (posts) => posts.category === 'cricket'
                )
                setExploreData({ posts: cricketData })
                break

            case 'india':
                console.log('india')
                setIsActive({
                    foryou: false,
                    trending: false,
                    science: false,
                    cricket: false,
                    india: true,
                })
                const indiaData = data.posts.filter(
                    (posts) => posts.category === 'india'
                )
                setExploreData({ posts: indiaData })
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
                        className={isActive.science ? semibold : greycolor}
                        value="science"
                        onClick={categoryHandler}
                    >
                        Science
                    </button>

                    <button
                        className={isActive.cricket ? semibold : greycolor}
                        value="cricket"
                        onClick={categoryHandler}
                    >
                       Cricket
                    </button>

                    <button
                        className={isActive.india ? semibold : greycolor}
                        value="india"
                        onClick={categoryHandler}
                    >
                        India
                    </button>
                </div>

                {/* Render posts all */}

                <div className="white-bg mr-xxl p-xs mt-s">
                    {/* TODO: Add a map function here but first get data on first load in login context */}

                    {exploreData?.posts?.map((item) => {
                        const { firstName, lastName } = allUsers.find((user)=> user.username===item.username)
                        const postData = { ...item, firstName, lastName }
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
