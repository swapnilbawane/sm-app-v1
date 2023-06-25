import "../style.css";
import "../index.css";
import { useAuth } from "../Context/auth-context";


export function Header() {

const { handleLogout } = useAuth()

    return(
<>
<nav className="white-bg">
   <div className="p-s pl-xxl txt-m ml-m">
    
       <a href="index.html"> 
           <span className="primary-color">My</span>Website 
       </a>

       <button onClick={handleLogout}> Logout </button>

   </div>
</nav>

</>
);
}