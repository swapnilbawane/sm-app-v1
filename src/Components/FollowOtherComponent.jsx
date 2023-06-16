export function FollowOtherComponent() { 
    return(
        <> 
        <div className="flex p-s flex-space-between flex-align-center">
        <div className="grey-bg br-full width-xl height-xl"></div>
        <div className="flex flex-column">
          <a href="profile1.html">
            <div className="fw-bold">Tanay Pratap</div>
            <div className="fw-light grey-color">@tanaypratap</div>
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