import { useAuth } from '../Context/auth-context'
import { Link } from 'react-router-dom'

export function ProfileTab() {
    const { currentUser } = useAuth()

    return (
        <>
            <Link to="/profile" className="flex flex-space-between flex-align-center">
                <div className="flex">
                    {/* <div className="grey-bg br-full width-xl height-xl"></div> */}

                    <img
                        src={currentUser?.profileimage}
                        alt="gravatar_1"
                        className="br-full width-xl height-xl"
                    />

                    <div className="flex flex-column ml-xs cursor-pointer">
                        <div className="fw-bold">
                            {currentUser?.firstName} {currentUser?.lastName}
                        </div>
                        <div className="fw-light grey-color">
                            @{currentUser?.username}
                        </div>
                    </div>

                </div>
                {/* <div className="grey-color fw-bold">
                    <i className="bi bi-three-dots"></i>
                </div> */}
            </Link>
        </>
    )
}
