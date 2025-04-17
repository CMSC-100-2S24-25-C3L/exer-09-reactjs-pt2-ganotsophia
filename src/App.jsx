import { useState } from 'react'
import './App.css'
import NavButton from './components/menu'; 
  
function App() {
  const [cart, setCart] = useState({});

  const menus = [
    { code: "Appliances",  id: 1 },
    { code: "Groceries",  id: 2 },
    { code: "Clothing", id: 3 },
  ];

  const addToCart = (item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [item]: (prevCart[item] || 0) + 1,
    }));
  };
  
  const removeFromCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[item];
      return updatedCart;
    });
  };

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  

  
  return (
    <>
  <div className="header">
    <h1>Lazado</h1>
    <div className="nav-menu">
      {menus.map((menu) => (
        <NavButton 
          key={menu.id} 
          name={menu.code} 
          onClick={() => addToCart(menu.code)} 
        />
      ))}
    </div>
  </div>

  <div className="main">
    <div className="body">
      <div className="Appliances">
        <img src="https://www.reliant.co.uk/blog/wp-content/uploads/2023/09/Airfryer.jpg" />
        
        <h3>Air Fryer</h3>

        <button onClick={() => addToCart("Air Fryer")}>Add to Cart</button>
      </div>

      <div className="groceries">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVCsPJmXFCpDoNFpO-DXBv5B_3mPpC2RUwA&s" />
        <h3>Datu Puti</h3>
        <button onClick={() => addToCart("Datu Puti")}>Add to Cart</button>
      </div>

      <div className="gadget">
        <img src="https://img.drz.lazcdn.com/static/bd/p/373805cd97649602785d9504ed85c404.jpg_720x720q80.jpg" />
        <h3>Iphone Barbie</h3>

        <button onClick={() => addToCart("Iphone Barbie")}>Add to Cart</button>
      </div>

      <div className="clothing">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIOBIxbKKRaCuau5BymjOjsfFLPyEA4JZhag&s" />
        <h3>Nike Original</h3>

        <button onClick={() => addToCart("Nike Original")}>Add to Cart</button>
      </div>
    </div>

    <div className="cart">
          <h2>Cart ({totalItems} item{totalItems !== 1 && "s"})</h2>

          {Object.keys(cart).length === 0 ? (
            <p>No items yet.</p>
          ) : (
            <ul>
              {Object.entries(cart).map(([item, quantity]) => (
                <li key={item}>
                  {item} — {quantity} 
                  <button 
                    style={{ marginLeft: '10px' }}
                    onClick={() => removeFromCart(item)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
  </div>
</>



  )
}

export default App
