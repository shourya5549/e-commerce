import React from 'react'
import { useProduct } from '../context/ProductContext'
import { useCart } from '../context/CartContext'

function Products() {
    const { product } = useProduct()
    const { cartItems, setCartItems } = useCart()
    const handelCart = (id) => {
        const cartProduct = product.find(prod => prod.id === id)
        const alreadyAdded = cartItems.find(cart => cart.id === id)

        if (alreadyAdded) {
            const updatedCart = cartItems.map(cart => {
                if (cart.id == id) {
                    cart.count = cart.count + 1
                }
                return cart
            })
            setCartItems(updatedCart)
        }
        else {
            setCartItems([...cartItems, { ...cartProduct, count: 1 }])
        }
    }
    return (
        <>
          <div className="flex flex-wrap gap-4 w-full px-4 md:px-8 lg:px-16 mx-auto">
      {product.map((prod) => {
        return (
          <div
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-sm ml-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={prod.id}
          >
            <a href="#">
              <img
                className="p-4 sm:p-6 rounded-t-lg h-40 sm:h-52 lg:h-60 object-cover w-full"
                src={prod.images[0]}
                alt="product"
              />
            </a>
            <div className="px-4 sm:px-5 pb-4 sm:pb-5">
              <a href="#">
                <h5 className="text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {prod.title}
                </h5>
              </a>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                  ${prod.price}
                </span>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 sm:px-5 sm:py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => handelCart(prod.id)}
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    
        </>
      )
}

export default Products