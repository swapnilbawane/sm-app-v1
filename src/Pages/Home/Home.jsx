import { Header } from "../../Components/Header";
import { AsideLeft } from "../../Components/AsideLeft";
import { AsideRight } from "../../Components/AsideRight";
import { MainHome } from "./MainHome";
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

                <AsideRight />
            </div>
        </>
    );
}
