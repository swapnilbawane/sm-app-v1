/**
 * Components In Aside Left  
 * <Navbar>
 * <ProfileTab />
 * This is visible in <Home> <Explore> <Bookmark> <Profile> Components
 */

import '../index.css'
import '../style.css'
import { NavBar } from './NavBar'
import { ProfileTab } from './ProfileTab'

export function AsideLeft() {
    return (
        <>
            <aside className="p-s pt-xl ml-m sidebar1">
                <div className="flex flex-column sidebar gapleft">
                    <NavBar />

                    <ProfileTab />
                </div>
            </aside>
        </>
    )
}
