
import Cartcontainer from "./components/Cartcontainer";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux"
import { cartTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from './components/modal.js'
import { store } from "./store";
function App() {
  const {cartItems,isLoading} = useSelector((store) => store.cart)
  const {isOpen} =  useSelector((store) => store.modal)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartTotals()); 
  } , [cartItems])

  useEffect(()=>{
    dispatch(getCartItems())
  },[])
  
  if (isLoading){
    return <div className="loading">
      <h1>Loading....</h1>
    </div>

    
  }
  return (<main>
    {isOpen && <Modal />}
    <Navbar />
    <Cartcontainer/>
  </main>
);}
export default App;
  