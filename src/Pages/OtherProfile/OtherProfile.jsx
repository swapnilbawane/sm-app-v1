import { AsideLeft } from '../../Components/AsideLeft'
import { AsideRight } from '../../Components/AsideRight'
import { Header } from '../../Components/Header'
import { MainOtherProfile } from './MainOtherProfile'

import { useParams } from 'react-router'
import { useAuth } from '../../Context/auth-context'

export function OtherProfile() {
    const { username } = useParams()
    const { allUsers } = useAuth()

    // Get the details of the user via username
    const userDetail = allUsers.find((item) => item.username === username)

    return (
        <>
            <div className="container">
                <Header />
                <AsideLeft />
                <MainOtherProfile {...userDetail} />
                <AsideRight />
            </div>
        </>
    )
}
