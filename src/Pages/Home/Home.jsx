import { AsideLeft } from '../../Components/AsideLeft'
import { AsideRight } from '../../Components/AsideRight'
import { Header } from '../../Components/Header'
import { MainHome } from './MainHome'
// import { useEffect } from "react";
// import { useAuth } from "../../Context/auth-context";

export function Home() {
    // const { loggedUserName } = useAuth()
    // useEffect(()=> {
    //     <AsideRight />
    //  },[loggedUserName])

    return (
        <>
            <div className="container">
                <Header />

                <AsideLeft />

                <MainHome />
                {/* <Link to="/modals"> Modals </Link> */}

                <AsideRight />
            </div>
        </>
    )
}
