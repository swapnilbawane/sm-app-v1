import '../style.css'
import '../index.css'
import { useAuth } from '../Context/auth-context'
import { Link } from 'react-router-dom'

export function Header() {
    const { handleLogout } = useAuth()

    return (
        <>
            <nav className="white-bg">
                <div className="p-s txt-m ml-m header-bar">
                    <Link to="/home">
                        <div className="website-title">
                            <span className="primary-color">Baat</span>
                            <span> Cheet </span> <sup> {'>'} Speak your mind! </sup>
                        </div>
                    </Link>

                    <button
                        className="primary-bg p-l pt-xs pb-xs secondary-color border-none outline-transparent logout"
                        onClick={handleLogout}
                    >
                        {' '}
                        Logout{' '}
                    </button>
                </div>
            </nav>
        </>
    )
}
