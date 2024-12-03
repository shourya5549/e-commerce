import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductContextWrapper } from './context/ProductContext.jsx'
import { CartContextWrapper } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContextWrapper>
      <ProductContextWrapper>
        <App />
      </ProductContextWrapper>
    </CartContextWrapper>
  </StrictMode>,
)
