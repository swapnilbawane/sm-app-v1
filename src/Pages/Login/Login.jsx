import '../../style.css'
import '../../index.css'
import { Link } from 'react-router-dom'

export function Login() {
    return (
        <>
            <div className="flex flex-column flex-center h-full w-full">
                <h2 className="fw-black txt-xl mb-m">
                    <span className="primary-color"> My </span>
                    Website
                </h2>

                <div
                    className="white-bg br-m p-xxl pt-xl pb-xl"
                    style={{ width: '30rem' }}
                >
                    <h3 className="txt-center mb-m txt-l"> Login</h3>

                    <div className="flex flex-column">
                        <label for="email">Email Address</label>
                        <input
                            type="text"
                            name="email"
                            className="p-xs txt-s lynx-white-color br-s mb-s"
                            style={{ border: '1px solid grey' }}
                            placeholder="tanay@neog.camp"
                        />
                    </div>

                    <div className="flex flex-column">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id=""
                            className="p-xs txt-s lynx-white-color br-s flex items-center"
                            style={{ border: '1px solid grey' }}
                            placeholder="**************"
                        />
                    </div>

                    <div className="flex flex-align-center flex-space-between mt-m mb-m">
                        <div className="txt-s flex flex-align-center">
                            <input
                                type="checkbox"
                                name="rmbr-me"
                                className="p-s txt-cursor"
                            />
                            <label for="rmbr-me" className="pl-xs txt-cursor">
                                Remember Me
                            </label>
                        </div>

                        <Link to="/" className="action-color">
                            
                            Forgot your password?
                        </Link>
                    </div>

                    <button className="w-full primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s">
                        Login
                    </button>

                    <Link
                        to="/"
                        className="txt-center w-full mt-m"
                        style={{ display: 'block' }}
                    >
                        
                        Create New Account
                    </Link>
                </div>
            </div>
        </>
    )
}
