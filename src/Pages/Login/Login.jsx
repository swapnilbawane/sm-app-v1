import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Context/auth-context'
import '../../index.css'
import '../../style.css'

export function Login() {
    const [user, setUser] = useState({ username: '', password: '' })
    const { handleLogin, handleGuestLogin } = useAuth()

    const handleLoginInput = (e) => {
        const targetValue = e.target.value

        if (e.target.name === 'username') {
            setUser({ ...user, username: targetValue })
        } else if (e.target.name === 'password') {
            setUser({ ...user, password: targetValue })
        }
    }

    return (
        <>
            <div className="flex flex-column flex-center h-full w-full login">
                <h2 className="fw-black txt-xl mb-m">
                    <span className="primary-color"> Baat </span>
                    Cheet
                </h2>

                <div
                    className="white-bg br-m p-xxl pt-xl pb-xl loginpage"
                    style={{ width: '30rem' }}
                >
                    <h3 className="txt-center mb-m txt-l"> Login</h3>

                    <div className="flex flex-column">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="p-xs txt-s br-s mb-s"
                            style={{ border: '1px solid grey' }}
                            placeholder="tanaypratap"
                            value={user.username}
                            onChange={handleLoginInput}
                        />
                    </div>

                    <div className="flex flex-column">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id=""
                            className="p-xs txt-s br-s flex items-center"
                            style={{ border: '1px solid grey' }}
                            placeholder="**************"
                            value={user.password}
                            onChange={handleLoginInput}
                        />
                    </div>

                    {/* <div className="flex flex-align-center flex-space-between mt-m mb-m">
                        <div className="txt-s flex flex-align-center">
                            <input
                                type="checkbox"
                                name="rmbr-me"
                                className="p-s txt-cursor"
                            />
                            <label htmlFor="rmbr-me" className="pl-xs txt-cursor">
                                Remember Me
                            </label>
                        </div>

                        <Link to="/" className="action-color">
                            Forgot your password?
                        </Link>
                    </div> */}

                    <button
                        className="w-full primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s"
                        onClick={() => handleLogin(user)}
                    >
                        Login
                    </button>

                    <button
                        className="w-full primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s"
                        onClick={() => handleGuestLogin()}
                    >
                        Login as Guest
                    </button>

                    <Link
                        to="/signup"
                        className="txt-center w-full grey-button p-s pt-xs pb-xs"
                        style={{ display: 'block' }}
                    >
                        Create New Account
                    </Link>
                </div>
            </div>
        </>
    )
}
