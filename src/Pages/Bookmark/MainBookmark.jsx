import '../../style.css'
import '../../index.css'
import { useAuth } from '../../Context/auth-context'
import { PostComponent } from '../../Components/PostComponent'

// TODO: 
// In add to bookmark when I receive bookmark array I update it to current user {...currentUser, bookmark: bookmarkData}
// Then here I use that array, iterate over currentUser.bookmark and for each it find the data from the data.posts.map because all new and old posts are store in here -- authcontext  
// for each bookmark id === item._id 

export function MainBookmark() {
    const { data, currentUser, setData } = useAuth()

    console.log("currentuser from main bookmark", currentUser);

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
