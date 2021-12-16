import "./App.css";
import { UserProvider } from "./context/userContext";
import Routes from "./routes";
import { ProductProvider } from "./context/productContext";
import { CartProvider } from "./context/cartContext";
function App() {
  return (
    <>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <Routes />
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </>
  );
}

export default App;
