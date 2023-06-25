import { Link } from "react-router-dom";

export function EmptyBookmarkPage() { 
    return(
        <>
                    <h1> No bookmarks now. Add now to see it here later. </h1> 
                    <p> Visit <Link to="/home" style={{color: "blue"}}> Home </Link> to add more bookmarks. </p>
                    </>
    );
}