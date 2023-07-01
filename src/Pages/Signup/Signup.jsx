import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Context/auth-context'

export function Signup() {


const { handleSignup } = useAuth()

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
    })

    const handleInput = (event) => {
        const inputValue = event.target.value
        const inputName = event.target.name

        switch (inputName) {
            case 'firstname':
                setUser({ ...user, firstName: inputValue })
                break

            case 'lastname':
                setUser({ ...user, lastName: inputValue })
                break

            case 'username':
                setUser({ ...user, username: inputValue })
                break

            case 'password':
                setUser({ ...user, password: inputValue })
                break

            case 'confirm-password':
                setUser({ ...user, confirmPassword: inputValue })
                break

            default:
                console.log("default case for signup")
                break    
        }
    }

    return (
        <>
            <div className="flex flex-column flex-center h-full w-full signup">
                <h2 className="fw-black mb-m">
                    <span className="primary-color">Baat</span> Cheet
                </h2>

                <div
                    className="white-bg br-m p-xxl pt-l pb-l signuppage"
                    style={{ width: '30rem' }}
                >
                    <h3 className="txt-center mb-s txt-l">Signup</h3>

                    <div className="flex flex-column">
                        <label htmlFor="name" className="txt-s">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstname"
                            className="p-xs txt-s br-s mb-s"
                            style={{ border: '1px solid grey' }}
                            placeholder="Tanay"
                            value={user.firstName}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="flex flex-column">
                        <label htmlFor="name" className="txt-s">
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastname"
                            className="p-xs txt-s br-s mb-s"
                            style={{ border: '1px solid grey' }}
                            placeholder="Pratap"
                            value={user.lastName}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="flex flex-column">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="p-xs txt-s br-s mb-s"
                            style={{ border: '1px solid grey' }}
                            placeholder="tanaypratap"
                            value={user.username}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="flex flex-column">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="p-xs txt-s br-s flex mb-s items-center"
                            style={{ border: '1px solid grey' }}
                            placeholder="***************"
                            value={user.password}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="flex flex-column">
                        <label htmlFor="password">Confirm Password</label>
                        <input
                            type="password"
                            name="confirm-password"
                            className="p-xs txt-s br-s flex items-center"
                            style={{ border: '1px solid grey' }}
                            placeholder="**********"
                            value={user.confirmPassword}
                            onChange={handleInput}
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
                                I accept all Terms & Conditions
                            </label>
                        </div>
                    </div> */}

                    {user.password === user.confirmPassword &&
                    user.password.length > 0 ? (
                        <button
                            className="w-full primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s"
                            onClick={() => handleSignup(user)}
                        >
                            Create New Account
                        </button>
                    ) : null}

                    <Link
                        to="/"
                        className="txt-center w-full mt-m grey-button p-s pt-xs pb-xs"
                        style={{ display: 'block' }}
                    >
                        Already have an account
                    </Link>
                </div>
            </div>
        </>
    )
}
