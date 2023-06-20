// TODO: This is a card component, this should receive the destructured data from the map function run in Main Home page. 

import { useInteraction } from "../Context/interaction-context";

export function PostComponent({
// itemid,
// itemusername,
_id,
content,
username,
likes,
firstName,
lastName
}) {

 const { likeHandler, dislikeHandler } = useInteraction(); 

 const item = { 
    _id,
    content,
    username,
    likes,
    firstName,
    lastName }

console.log("item from post component", item)

    return (
        <>
            <div className="flex flex-row nowrap p-xs">
                <div
                    className="grey-bg br-full width-xl height-xl p-xs mr-xs"
                    style={{ aspectRatio: '1' }}
                ></div>

                <div>
                    {/* TODO: CSS BUG the three dots spacing is affected by the number of lines posted */}
                    <div className="flex flex-row flex-align-center flex-space-between"> 
                        <div className="flex flex-row">
                            <p className="fw-semibold">{firstName} {lastName}</p>
                            <p className="grey-color pl-xs">
                                @{username}
                                <span className="pl-xs">.</span>
                                <span className="pl-xs">1 min</span>
                            </p>
                        </div>
                        <p>...</p>
                    </div>

                    <p className="pr-s pt-xs">
                    {content}
                    </p>

                    <div className="flex flex-row nowrap flex-space-between pb-xs pt-m pr-s flex-align-center">
                       { 
                       likes.likeCount>0
                       ?
                        <i className="bi bi-heart-fill" onClick={()=> dislikeHandler(_id)}></i>
                       :
                       <i className="bi bi-heart" onClick={()=> likeHandler(_id)} ></i>        
                       }
                        {/* <i className="bi bi-chat-left"></i>
                        <i className="bi bi-share"></i> */}
                        <i className="bi bi-bookmark-fill"></i>
                    </div>
                </div>
            </div>
        </>
    );
}
