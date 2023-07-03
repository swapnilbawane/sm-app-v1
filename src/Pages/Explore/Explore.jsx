import { AsideLeft } from '../../Components/AsideLeft'
import { AsideRight } from '../../Components/AsideRight'
import { Header } from '../../Components/Header'
import { MainExplore } from './MainExplore'

export function Explore() {
    return (
        <>
            <div className="container">
                <Header />
                <AsideLeft />
                <MainExplore />
                <AsideRight />
            </div>
        </>
    )
}
