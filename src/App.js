import { Routes, Route } from 'react-router-dom'
import { Login } from './Pages/Login/Login'
import { Signup } from './Pages/Signup/Signup'
import { Home } from './Pages/Home/Home'
import { Explore } from './Pages/Explore/Explore'
import { Bookmark } from './Pages/Bookmark/Bookmark'
import { Profile } from './Pages/Profile/Profile'

import Mockman from 'mockman-js'
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

                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/mockman" element={<Mockman />} />
            </Routes>
        </div>
    )
}

export default App
