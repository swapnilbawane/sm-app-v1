export function FollowOtherComponent({
_id,
firstName,
lastName,
username  
}) { 


    return(
        <> 
        <div className="flex p-s flex-space-between flex-align-center">
        <div className="grey-bg br-full width-xl height-xl"></div>
        <div className="flex flex-column">
          <a href="profile1.html">
            <div className="fw-bold">{firstName} {lastName}</div>
            <div className="fw-light grey-color">@{username}</div>
          </a>
        </div>
        <div className="primary-color fw-bold">
          <a href="profile2.html">
            Follow
            <i className="bi bi-plus-lg"></i>
          </a>
        </div>
  </div>
        </> 
    ); 
}