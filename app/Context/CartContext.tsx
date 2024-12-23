'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
  image?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  updateSize: (id: string, size: string) => void;
  getItemCount: () => number;
  getTotalPrice: () => number;
  clearCart: () => void;
}

// Create the CartContext with an initial value of undefined
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component to wrap around the app
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (cartItem) => cartItem.id === item.id && cartItem.size === item.size
      );
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id && cartItem.size === item.size
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prev, item];
    });
 
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity > 0) {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const updateSize = (id: string, size: string) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, size } : item))
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const getItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

 const clearCart = ()=>{
  setCartItems([]);
 }

  const value: CartContextType = {
    cartItems,
    addToCart,
    updateQuantity,
    removeItem,
    updateSize,
    getItemCount,
    getTotalPrice,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};


// 'use client';
// import React, { createContext, useContext, useState } from 'react';

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
//   size?: string;
//   image?: string;
// }

// interface CartContextType {
//   cartItems: CartItem[];
//   addToCart: (item: CartItem) => void;
//   updateQuantity: (id: string, quantity: number) => void;
//   removeItem: (id: string) => void;
//   updateSize: (id: string, size: string) => void;
//   getItemCount: () => number;
//   clearCart: () => void; // Added

// }


// // Create the CartContext with an initial value of undefined
// const CartContext = createContext<CartContextType | undefined>(undefined);

// // CartProvider component to wrap around the app
// export const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const addToCart = (item: CartItem) => {
//     setCartItems((prev) => {
//       const existingItem = prev.find(
//         (cartItem) => cartItem.id === item.id && cartItem.size === item.size
//       );
//       if (existingItem) {
//         return prev.map((cartItem) =>
//           cartItem.id === item.id && cartItem.size === item.size
//             ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
//             : cartItem
//         );
//       }
//       return [...prev, item];
//     });
//   };

//   const updateQuantity = (id: string, quantity: number) => {
//     setCartItems((prev) =>
//       prev.map((item) => (item.id === id ? { ...item, quantity } : item))
//     );
//   };

//   const updateSize = (id: string, size: string) => {
//     setCartItems((prev) =>
//       prev.map((item) => (item.id === id ? { ...item, size } : item))
//     );
//   };

//   const removeItem = (id: string) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   const getItemCount = () => {
//     return cartItems.reduce((total, item) => total + item.quantity, 0);
//   };
//   const clearCart = () => {
//     setCartItems([]);
//   };

//   const value: CartContextType = {
//     cartItems,
//     clearCart,
//     addToCart,
//     updateQuantity,
//     removeItem,
//     updateSize,
//     getItemCount,
//   };

//   return (
//     <CartContext.Provider value={value}>
//       {children}  
//     </CartContext.Provider>
//   );
  
// };


// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };


