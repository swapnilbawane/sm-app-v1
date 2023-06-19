import '../../style.css'
import '../../index.css'

import { PostComponent } from "../../Components/PostComponent"; 
import { useAuth } from '../../Context/auth-context'
import { useState } from 'react'

export function MainExplore() { 

  const { data, currentUser,setData } = useAuth(); 
  // const [ newPost, setNewPost ] = useState(""); 

return(
<> 
<main className="mt-xl">

<h3 className="pt-s">Explore</h3>

<div className="flex flex-row nowrap">
 <div className="border p-xs mt-xs mb-xs mr-s width-7 txt-center fw-semibold"> For You </div> 
 <div className="border p-xs mt-xs mb-xs mr-s ml-s width-7 txt-center grey-color"> Trending </div>
 <div className="border p-xs mt-xs mb-xs mr-s ml-s width-7 txt-center grey-color"> Technology </div>
 <div className="border p-xs mt-xs mb-xs mr-s ml-s width-7 txt-center grey-color"> Sports </div>
 <div className="border p-xs mt-xs mb-xs mr-s ml-s width-7 txt-center grey-color"> News </div>
</div> 

{/* Render posts all */}

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
); 
}