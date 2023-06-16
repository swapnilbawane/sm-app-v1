import "../style.css";
import "../index.css";
import { FollowOtherComponent } from "./FollowOtherComponent";

export function AsideRight() { 

return (
<>
<aside className="mt-xl mr-xxl sidebar2">

<div className="white-bg mb-m pl-s border flex flex-row flex-center nowrap">
  <i className="bi bi-search"></i>
  <input type="search" name="search-bar" id="" className="search-bar border-none outline-transparent p-s width-16" placeholder="Search Posts, People, Anything" spellCheck={false} data-ms-editor={true} />
</div>

<div className="white-bg">

<div className="fw-bold flex flex-row flex-space-between flex-align-center border-bottom p-s">
        <div>Who to Follow?</div>
        <div className="primary-color">Show More</div>
</div>

{/* Render from the list of accounts present */}
<FollowOtherComponent /> 
<FollowOtherComponent />
<FollowOtherComponent />
<FollowOtherComponent />

</div>

</aside>
</> 
); 

}