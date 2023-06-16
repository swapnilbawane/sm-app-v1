import "../style.css";
import "../index.css";
import { NavBar } from "./NavBar";
import { ProfileTab } from "./ProfileTab";


export function AsideLeft() { 
    return (
        <> 
<aside className="p-s pt-xl pl-xxl ml-m sidebar1">

<div className="flex flex-column flex-space-between sidebar">
  
{/* Nav bar side */}
<NavBar /> 

{/* profile name */}
<ProfileTab /> 

</div>   

</aside>
</> 
    ); 
}