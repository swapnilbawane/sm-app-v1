import { createContext, useContext } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastContext = createContext(); 

export function ToastProvider({children}) { 

  // Auth toasts 
    const showLoggedInToastMessage = () => { 
        toast.success('Logged in !', {
        position: toast.POSITION.TOP_RIGHT
    });
    }
  
  const emailNotFoundToastMessage = () => { 
      toast.warning('The email you entered is not Registered. Signup today!', {
      position: toast.POSITION.TOP_RIGHT
  });
  }
  
  const passwordWrongToastMessage = () => { 
    toast.error('The credentials you entered are invalid.', {
    position: toast.POSITION.TOP_RIGHT
  });
  }
  
  const emailExistsToastMessage = () => { 
    toast.warning('This email already exists.. Login today!', {
    position: toast.POSITION.TOP_RIGHT
  });
  }

// Wishlist toasts 
   const addedToWishListToast = () => { 
    toast.success('Item added to wishlist !', {
    position: toast.POSITION.BOTTOM_RIGHT
});

}

const removeFromWishListToast = () => { 
  toast.success('Item removed from wishlist !', {
  position: toast.POSITION.BOTTOM_RIGHT
});

}

// Cart toasts 
const addedToCartToast = () => { 
  toast.success('Item added to cart !', {
  position: toast.POSITION.BOTTOM_RIGHT
});

}

const removedFromCartToast = () => { 
  toast.success('Item removed from cart !', {
  position: toast.POSITION.BOTTOM_RIGHT
});

}

const placeOrder = () => { 
  toast.success('Feature not yet there. Thanks for shopping !', {
    position: toast.POSITION.TOP_RIGHT
  });
}

    return(
         <ToastContext.Provider value={{ showLoggedInToastMessage, emailNotFoundToastMessage, passwordWrongToastMessage,emailExistsToastMessage, addedToWishListToast, removeFromWishListToast, addedToCartToast, removedFromCartToast, placeOrder  }}>
            {children}
         </ToastContext.Provider>
    );
}

export const useToast = () => useContext(ToastContext);