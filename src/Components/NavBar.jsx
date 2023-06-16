export function NavBar() { 
    return(
        <>
        {/* check by location if location is /home then keep it bold like className={location==="/home" ? "fw-bold" : "fw"} */}
        <div>

<div className="pt-s black-color fw-semibold">
  <a href="/">
      <i className="bi bi-house"> </i>
      &nbsp;
      <span className="fw-bold">Home</span>
  </a>
</div>

<div className="pt-s black-color fw-semibold">
  <a href="explore.html">
    <i className="bi bi-rocket"> </i>
    &nbsp;
    <span>Explore</span>
</a>
</div>

<div className="pt-s black-color fw-semibold">
  <a href="bookmark.html">
    <i className="bi bi-bookmark"> </i>
    &nbsp;
    <span>Bookmark</span>
</a>
</div>

<div className="pt-s black-color fw-semibold">
  <a href="profile.html">
    <i className="bi bi-person"> </i>
    &nbsp;
    <span>Profile</span>
</a>
</div>  

<button className="mt-m p-s primary-bg white-color border-none outline-transparent new-post-btn"> Create New Post </button>

</div> 
        </> 
    ); 
}