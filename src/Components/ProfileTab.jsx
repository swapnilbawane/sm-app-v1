import { useAuth } from "../Context/auth-context";


export function ProfileTab() {

    const { currentUser } = useAuth(); 
    
    return(
        <> 
        <div className="flex flex-space-between flex-align-center">

<div className="flex">
  <div className="grey-bg br-full width-xl height-xl"></div>
   <div className="flex flex-column ml-xs">
    <div className="fw-bold">{currentUser?.firstName} {currentUser?.lastName}</div>
    <div className="fw-light grey-color">@{currentUser?.username}</div>
   </div>
</div>
<div className="grey-color fw-bold"><i className="bi bi-three-dots"></i></div>

</div>
        </>
    ); 
}