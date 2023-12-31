import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { makeServer } from './server'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Context/auth-context'
import { PostProvider } from './Context/post-context'
import { InteractionProvider } from './Context/interaction-context'
import { ToastProvider } from './Context/toast-context'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

// Call make Server
makeServer()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ChakraProvider>
                <ToastProvider>
                    <AuthProvider>
                        <PostProvider>
                            <InteractionProvider>
                                <App />
                            </InteractionProvider>
                        </PostProvider>
                    </AuthProvider>
                </ToastProvider>
            </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
