// TODO: This is a card component, this should receive the destructured data from the map function run in Main Home page. 

export function PostComponent({
_id,
content,
username,
likes,
firstName,
lastName
}) {
    return (
        <>
            <div className="flex flex-row nowrap p-xs">
                <div
                    className="grey-bg br-full width-xl height-xl p-xs mr-xs"
                    style={{ aspectRatio: '1' }}
                ></div>

                <div>
                    {/* TODO: CSS BUG the three dots spacing is affected by the number of lines posted */}
                    <div className="flex flex-row flex-align-center flex-space-between"> 
                        <div className="flex flex-row">
                            <p className="fw-semibold">{firstName} {lastName}</p>
                            <p className="grey-color pl-xs">
                                @{username}
                                <span className="pl-xs">.</span>
                                <span className="pl-xs">1 min</span>
                            </p>
                        </div>
                        <p>...</p>
                    </div>

                    <p className="pr-s pt-xs">
                    {content}
                    </p>

                    <div className="flex flex-row nowrap flex-space-between pb-xs pt-m pr-s flex-align-center">
                        <i className="bi bi-heart"></i>
                        {/* <i className="bi bi-chat-left"></i>
                        <i className="bi bi-share"></i> */}
                        <i className="bi bi-bookmark-fill"></i>
                    </div>
                </div>
            </div>
        </>
    );
}
