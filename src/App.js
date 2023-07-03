import { Route, Routes } from 'react-router-dom'
import { Bookmark } from './Pages/Bookmark/Bookmark'
import { Explore } from './Pages/Explore/Explore'
import { Home } from './Pages/Home/Home'
import { Login } from './Pages/Login/Login'
import { OtherProfile } from './Pages/OtherProfile/OtherProfile'
import { Profile } from './Pages/Profile/Profile'
import { Signup } from './Pages/Signup/Signup'

import Mockman from 'mockman-js'
import { ModalTests } from './ModalTests'
import { ModalTests2 } from './ModalTests2'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { RequiresAuth } from './Components/RequiresAuth'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/home"
                    element={
                        <RequiresAuth>
                            <Home />
                        </RequiresAuth>
                    }
                />

                <Route
                    path="/explore"
                    element={
                        <RequiresAuth>
                            <Explore />
                        </RequiresAuth>
                    }
                />

                <Route
                    path="/bookmark"
                    element={
                        <RequiresAuth>
                            <Bookmark />
                        </RequiresAuth>
                    }
                />

                <Route
                    path="/profile"
                    element={
                        <RequiresAuth>
                            <Profile />
                        </RequiresAuth>
                    }
                />

                <Route
                    path="/profile/:username"
                    element={
                        <RequiresAuth>
                            <OtherProfile />
                        </RequiresAuth>
                    }
                />

                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/mockman" element={<Mockman />} />
                <Route path="/modals" element={<ModalTests />} />
                <Route path="/modals2" element={<ModalTests2 />} />
            </Routes>

            <ToastContainer />
        </div>
    )
}

export default App
