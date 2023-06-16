import { Header } from "../../Components/Header";
import { AsideLeft } from "../../Components/AsideLeft";
import { AsideRight } from "../../Components/AsideRight";
import { MainHome } from "./MainHome";

export function Home() {
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
