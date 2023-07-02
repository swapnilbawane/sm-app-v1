import { createContext, useContext } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ToastContext = createContext()

export function ToastProvider({ children }) {
    // Auth toasts

    // Signup: 201 logged in & Login 200: logged in
    const showLoggedInToastMessage = () => {
        toast.success('Logged in !', {
            position: toast.POSITION.TOP_RIGHT,
        })
    }

    // Signup: 422 if username already exists
    const usernameExistsToastMessage = () => {
        toast.warning('This username already exists.. Login with the same or enter new username!', {
            position: toast.POSITION.TOP_RIGHT,
        })
    }

    // Signup: 500 Error
    const errorSignupToastMessage = () => {
        toast.error('Error while signup!', {
            position: toast.POSITION.BOTTOM_RIGHT,
        })
    }

    // Login: 404 username not registered
    const usernameNotFoundToastMessage = () => {
        toast.warning(
            'The username you entered is not Registered. Signup today!',
            {
                position: toast.POSITION.TOP_RIGHT,
            }
        )
    }

    // Login: 401 credentials invalid
    const passwordWrongToastMessage = () => {
        toast.error('The credentials you entered are invalid. Try again', {
            position: toast.POSITION.TOP_RIGHT,
        })
    }

    // Login: 500 Error
    const errorLoginToastMessage = () => {
        toast.error('Error while login!', {
            position: toast.POSITION.BOTTOM_RIGHT,
        })
    }

    // Post: 201 Deleted post
    const deletedPostToastMessage = () => {
        toast.info('Successfully deleted post !', {
            position: toast.POSITION.BOTTOM_RIGHT,
        })
    }

    // Edit Profile: 201 Edited user details
    const savedUserDetailsToastMessage = () => {
        toast.success('Your details are saved successfully !', {
            position: toast.POSITION.TOP_RIGHT,
        })
    }

    // Edit Profile: 404 Edited user details
    const editUserDetailsErrorToastMessage = () => {
        toast.success('Username is not registered or cannot be changed !', {
            position: toast.POSITION.TOP_RIGHT,
        })
    }

   // Edit profile: 500 Error message
    const editUserErrorToastMessage = () => {
        toast.error('Error while editing user details !', {
            position: toast.POSITION.TOP_RIGHT,
        })
    }

    // Bookmark toasts
    // Add to bookmark: 200
    const addedToBookmarkToastMessage = () => {
        toast.success('Added to bookmarks !', {
            position: toast.POSITION.BOTTOM_RIGHT,
        })
    }

    // Already in bookmarks: 400 
    const alreadyBookmarkedToastMessage = () => {
        toast.success('This post is already added to bookmarks !', {
            position: toast.POSITION.BOTTOM_RIGHT,
        })
    }


   // Bookmark: Username is not registered: 404
   const bookmarkUsernameErrorToastMessage = () => {
    toast.success('The username you entered is not Registered. Not Found error !', {
        position: toast.POSITION.BOTTOM_RIGHT,
    })
} 

    // Bookmark: 500 Error
    const bookmarkErrorToastMessage = () => {
        toast.error('Error 500: while adding bookmarks !', {
            position: toast.POSITION.TOP_RIGHT,
        })
    }

    // Removed from bookmark: 200
    const removedFromBookmarksToastMessage = () => {
        toast.success('Removed from bookmarks !', {
            position: toast.POSITION.BOTTOM_RIGHT,
        })
    }

     // Not bookmarked: 400 
     const notBookmarkedToastMessage = () => {
        toast.success('Post not bookmarked yet !', {
            position: toast.POSITION.BOTTOM_RIGHT,
        })
    }

    // Remove Bookmark: 500 Error
    const removeBookmarkErrorToastMessage = () => {
        toast.error('Error 500: while removing bookmarks !', {
            position: toast.POSITION.TOP_RIGHT,
        })
    }

    // Unfollow user successful 200
    const unFollowUserToastMessage = () => {
        toast.success('Unfollowed !', {
            position: toast.POSITION.TOP_RIGHT,
        })
    }

    // Unfollow user 404 error username not registered, not found
    const unFollowUserErrorToastMessage = () => {
        toast.success('The username you entered is not Registered. Not Found error !', {
            position: toast.POSITION.TOP_RIGHT,
        })
    }

     // Unfollow user 400 error user not following
     const notFollowingUserErrorToastMessage = () => {
        toast.success('User already not following !', {
            position: toast.POSITION.TOP_RIGHT,
        })
    }

     // Unfollow user: 500 Error
     const unfollowUserErrorToastMessage = () => {
        toast.error('Error 500: while unfollowing user !', {
            position: toast.POSITION.TOP_RIGHT,
        })
    }

    // Logout
    const loggedOutToastMessage = () => {
        toast.success('Logged Out !', {
            position: toast.POSITION.TOP_RIGHT,
        })
    }

    return (
        <ToastContext.Provider
            value={{
                showLoggedInToastMessage,
                usernameNotFoundToastMessage,
                passwordWrongToastMessage,
                usernameExistsToastMessage,
                errorSignupToastMessage,
                errorLoginToastMessage,
                deletedPostToastMessage,
                savedUserDetailsToastMessage,
                addedToBookmarkToastMessage,
                removedFromBookmarksToastMessage,
                unFollowUserToastMessage,
                loggedOutToastMessage,
                editUserDetailsErrorToastMessage,
                editUserErrorToastMessage,
                alreadyBookmarkedToastMessage,
                bookmarkUsernameErrorToastMessage,
                bookmarkErrorToastMessage,
                notBookmarkedToastMessage,
                removeBookmarkErrorToastMessage,
                unFollowUserErrorToastMessage,
                notFollowingUserErrorToastMessage,
                unfollowUserErrorToastMessage
            }}
        >
            {children}
        </ToastContext.Provider>
    )
}

export const useToast = () => useContext(ToastContext)
