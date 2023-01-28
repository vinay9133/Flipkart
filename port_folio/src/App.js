import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CategoriesList from "./components/CategoriesList/CategoriesList";
import Carousel from "./components/Carousel/Carousel";
import BankImage from "./components/BankImage/BankImage";
import ProductCards from "./components/ProductCards/ProductCards";
import Welcome from "./Concepts/Welcome";
import LifeCycleMethods from "./Concepts/Lifecyclemethod";
import ConditionalOperators from "./Concepts/ConditionalOperators";
import Events from "./Concepts/Events";
import ApiCalling from "./Concepts/apiCalling";

function App() {

  // 1. Navbar
  // 2. List of categories
  // 3. carousel
  // 4. Top Offers and side by side boat product
  // 5. Cards component

  return (
    <div className="app">
     <Navbar />
    <CategoriesList/>
    <Carousel />
    <BankImage /> 
    <ApiCalling />
    { /* <Welcome /> 
       <LifeCycleMethods /> 
     <ConditionalOperators /> */}
    </div>
  );
}

export default App;