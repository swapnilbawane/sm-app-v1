import '../../style.css'
import '../../index.css'
import { PostComponent } from '../../Components/PostComponent'
import { useAuth } from '../../Context/auth-context'
import { useState } from 'react'
import axios from 'axios'

// On clicking POST it calls API - recreate it.

export function MainHome() {

  const { data, currentUser,setData } = useAuth(); 
  const [ newPost, setNewPost ] = useState(""); 

  const addNewPostHandler = (event) => { 
    const textValue = event.target.value; 
    setNewPost(textValue); 
  }

  const postHandler = async() => { 
    
    console.log("newPostContent", newPost);


    try { 
        const encodedToken = localStorage.getItem("encodedToken")

        // const url = "/api/posts"
        // const config = { headers : { authorization : encodedToken }, body : JSON.stringify(sendPost) }    
        // const postResponse = await axios.post(url,config )

        const sendPost = { postData : newPost }
        console.log("sendPost", JSON.stringify(sendPost));
        const t= JSON.stringify(sendPost);
        console.log("parsed",JSON.parse(t));

        const postResponse =await fetch("/api/posts",{
            method: 'POST',
            body: JSON.stringify(sendPost),
            headers: {
            'Content-Type': 'application/json',
            'authorization': `${encodedToken}`
            } 
           });

        console.log("post response", postResponse);

        if(postResponse.status===201) { 
            let postsData = await postResponse.json();
            console.log("before reverse", postsData);  // { postsData : posts }
            console.log("posts data", postsData.posts) 
            const posts = Array.from(postsData.posts).reverse(); // reverse posts from postsData to show most recent posts 
            postsData = { posts }; // shorthand for object : posts: posts - this will put reversed posts to post key now it resembles postData = { posts : {[],[],[],[]}}
            setData(postsData);
            setNewPost("");
        }

    }
    catch(error) { 
        console.log(error)
    }
  }

  console.log("data from main home", data)


    return (
        <>
            <main className="mt-xl">
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
                    <h3>Latest Posts</h3>
                    <i className="bi bi-sliders2-vertical"></i>
                </div>

                <div className="white-bg mr-xxl p-xs mt-s">
                  {/* TODO: Add a map function here but first get data on first load in login context */}
                   
                   { 
                   data?.posts?.map((item)=> { 
                    const postData = {...item,...currentUser}
                    return(
                        <div key={item._id}>
                        <PostComponent {...postData}/>
                        </div>
                    ); 
                   })
                   }
                    
                    
                </div>
            </main>
        </>
    )
}
