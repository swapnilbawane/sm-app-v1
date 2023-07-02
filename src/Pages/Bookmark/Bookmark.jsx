import { AsideLeft } from '../../Components/AsideLeft'
import { AsideRight } from '../../Components/AsideRight'
import { Header } from '../../Components/Header'
import { MainBookmark } from './MainBookmark'

export function Bookmark() {
    return (
        <>
            <div className="container">
                <Header />
                <AsideLeft />
                <MainBookmark />
                <AsideRight />
            </div>
        </>
    )
}
