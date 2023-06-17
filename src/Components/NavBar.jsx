//  TODO: Conditional rendering based on useLocation for NavBar 

import { useLocation } from "react-router";


export function NavBar() { 

const location = useLocation(); 
console.log("location", location);

    return(
        <>
        {/* check by location if location is /home then keep it bold like className={location==="/home" ? "fw-bold" : "fw"} */}
        <div>

<div className="pt-s black-color fw-semibold">
  <a href="/">
      <i className="bi bi-house"> </i>
      &nbsp;
     <span className={location.pathname==="/home" ? "fw-bold" : "fw"}>Home</span> 
  </a>
</div>

<div className="pt-s black-color fw-semibold">
  <a href="explore.html">
    <i className="bi bi-rocket"> </i>
    &nbsp;
    <span className={location.pathname==="/explore" ? "fw-bold" : "fw"}>Explore</span>
</a>
</div>

<div className="pt-s black-color fw-semibold">
  <a href="bookmark.html">
    <i className="bi bi-bookmark"> </i>
    &nbsp;
    <span className={location.pathname==="/bookmark" ? "fw-bold" : "fw"}>Bookmark</span>
</a>
</div>

<div className="pt-s black-color fw-semibold">
  <a href="profile.html">
    <i className="bi bi-person"> </i>
    &nbsp;
    <span className={location.pathname==="/profile" ? "fw-bold" : "fw"}>Profile</span>
</a>
</div>  

<button className="mt-m p-s primary-bg white-color border-none outline-transparent new-post-btn"> Create New Post </button>

</div> 
        </> 
    ); 
}