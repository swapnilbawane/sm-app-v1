import { Header } from '../../Components/Header'
import { AsideLeft } from '../../Components/AsideLeft'
import { AsideRight } from '../../Components/AsideRight'
import { MainProfile } from './MainProfile';

export function Profile() { 
    return(
        <>
         <div className="container">
                <Header />
                <AsideLeft />
                <MainProfile /> 
                <AsideRight />
            </div>
        </>
    ); 
}