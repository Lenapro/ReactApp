import Banner from "./Banner";
import logo from '../Images/logo.png'
// import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
 // 
function App() {
  return (
    <div>
      <Banner >
        <img src={logo} alt='Mon Magasin' className='img-logo' />
        <h1 className='img-title'>Mon Magasin</h1>
      </Banner>
    {/*<Cart />*/}
      <ShoppingList /> 
    

    </div>
  )
}
export default App 
