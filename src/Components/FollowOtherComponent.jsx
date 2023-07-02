import { Link } from 'react-router-dom'
import { useAuth } from '../Context/auth-context'
import { useInteraction } from '../Context/interaction-context'

export function FollowOtherComponent({
    _id,
    firstName,
    lastName,
    username,
    followers,
    following,
    profileimage,
}) {
    const { followHandler, unFollowHandler } = useInteraction()
    const { allUsers, loggedUserName } = useAuth()

    const followLinkHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        followHandler(_id)
    }

    const unFollowLinkHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        unFollowHandler(_id)
    }

    const link = null

    const findLogged = allUsers?.find(
        (item) => item.username === loggedUserName
    )

    // console.log('findLogged', findLogged)

    const isFollowing = findLogged?.following.findIndex(
        (item) => item.username === username
    )

    // console.log('isFollowing:', isFollowing)

    return (
        <>
            <div className="flex p-s flex-space-between flex-align-center">
                {/* <div className="grey-bg br-full width-xl height-xl"></div> */}

                <img
                    src={profileimage}
                    alt="gravatar_1"
                    className="br-full width-xl height-xl"
                />

                <div className="flex flex-column">
                    <Link to={`/profile/${username}`}>
                        <div className="fw-bold">
                            {firstName} {lastName}
                        </div>
                        <div className="fw-light grey-color">@{username}</div>
                    </Link>
                </div>
                <div className="primary-color fw-bold">
                    {isFollowing === -1 ? (
                        <Link to={link} onClick={(e) => followLinkHandler(e)}>
                            Follow
                            <i className="bi bi-plus-lg"></i>
                        </Link>
                    ) : (
                        <Link to={link} onClick={(e) => unFollowLinkHandler(e)}>
                            Following
                        </Link>
                    )}
                </div>
            </div>
        </>
    )
}
