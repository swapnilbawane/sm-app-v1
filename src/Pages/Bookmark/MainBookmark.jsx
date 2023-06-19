import '../../style.css'
import '../../index.css'
import { useAuth } from '../../Context/auth-context'
import { PostComponent } from '../../Components/PostComponent'

export function MainBookmark() {
    const { data, currentUser, setData } = useAuth()

    return (
        <>
            <main className="mt-xl">
                <h3 className="pt-s">Your Bookmarks</h3>

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
            </main>
        </>
    )
}
