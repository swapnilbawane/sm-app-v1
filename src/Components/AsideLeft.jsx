import '../index.css'
import '../style.css'
import { NavBar } from './NavBar'
import { ProfileTab } from './ProfileTab'

export function AsideLeft() {
    return (
        <>
            <aside className="p-s pt-xl ml-m sidebar1">
                {/* removed from above mr-xxl / pl-xxl class */}
                <div className="flex flex-column sidebar gapleft">
                    {/* Nav bar side */}
                    <NavBar />

                    {/* profile name */}
                    <ProfileTab />
                </div>
            </aside>
        </>
    )
}
