/**
 * @statevariable allUsers
 * @description includes the list of all users and is a state variable which stores the most recent value of users. 
 * @ Render from the list of accounts present and do not show the user loggedin in the list of follow
 * This component just renders a list of other users in the right side bar
 * 
 * @component <FollowOtherComponent> 
 * @description renders the component for each user
 */
import { useAuth } from '../Context/auth-context'
import '../index.css'
import '../style.css'
import { FollowOtherComponent } from './FollowOtherComponent'

export function AsideRight() {
    const { allUsers, loggedUserName } = useAuth()

    return (
        <>
            <aside className="mt-xl sidebar2">
                <div className="white-bg">
                    <div className="fw-bold flex flex-row flex-space-between flex-align-center border-bottom p-s">
                        <div>Who to Follow?</div>
                    </div>

                    {allUsers?.map((item) => {
                        return item.username !== loggedUserName ? (
                            <div key={item._id}>
                                <FollowOtherComponent {...item} />
                            </div>
                        ) : null
                    })}
                </div>
            </aside>
        </>
    )
}
