import '../../style.css'
import '../../index.css'
import { PostComponent } from '../../Components/PostComponent'
import { useAuth } from '../../Context/auth-context'

export function MainHome() {

  const { data } = useAuth(); 


    return (
        <>
            <main className="mt-xl">
                <div className="white-bg mr-xxl p-xs mt-s">
                    <div className="flex flex-row nowrap p-xs">
                        <div
                            className="grey-bg br-full width-xl height-xl p-xs mr-xs"
                            style={{ aspectRatio: '1' }}
                        ></div>
                        <div className="w-full">
                            <textarea
                                cols="50"
                                rows="6"
                                className="w-full lynx-white-bg p-s outline-transparent border-none"
                                style={{ resize: 'none' }}
                                placeholder="Write something interesting..."
                                spellCheck={false}
                                data-ms-editor={true}
                            ></textarea>
                            <div className="flex flex-space-between pt-s">
                                <div className="flex" style={{ gap: '1rem' }}>
                                    <i className="bi bi-card-image"></i>
                                    <i className="bi bi-filetype-gif"></i>
                                    <i className="bi bi-emoji-smile"></i>
                                </div>
                                <button className="primary-bg p-l pt-xs pb-xs secondary-color border-none outline-transparent">
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-space-between mr-xxl flex-align-center pt-s">
                    <h3>Latest Posts</h3>
                    <i className="bi bi-sliders2-vertical"></i>
                </div>

                <div className="white-bg mr-xxl p-xs mt-s">
                  {/* TODO: Add a map function here but first get data on first load in login context */}
                    <PostComponent />
                    <PostComponent />
                </div>
            </main>
        </>
    )
}
