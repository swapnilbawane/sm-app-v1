import { useState } from 'react'
import { useInteraction } from '../Context/interaction-context'
import { Link } from 'react-router-dom'

export function FollowOtherComponent({ _id, firstName, lastName, username }) {
    const { followHandler, unFollowHandler } = useInteraction()
    const [followed, setFollowed] = useState(false)

    const followLinkHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        followHandler(_id)
        setFollowed(true)
    }

    const unFollowLinkHandler = (e) => {
      e.preventDefault()
      e.stopPropagation()
      unFollowHandler(_id)
      setFollowed(false)
  }

    const link = null

    return (
        <>
            <div className="flex p-s flex-space-between flex-align-center">
                <div className="grey-bg br-full width-xl height-xl"></div>
                <div className="flex flex-column">
                    <Link to={`/profile/${username}`}>
                        <div className="fw-bold">
                            {firstName} {lastName}
                        </div>
                        <div className="fw-light grey-color">@{username}</div>
                    </Link>
                </div>
                <div className="primary-color fw-bold">

                   {  !followed 
                   ?
                   <Link to={link} onClick={(e) => followLinkHandler(e)}>
                        Follow 
                        <i className="bi bi-plus-lg"></i>
                    </Link> 
                   : 
                   <Link to={link} onClick={(e) => unFollowLinkHandler(e)}>
                        Following 
                    </Link>
                   }
                    
                </div>
            </div>
        </>
    )
}
