import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import Navbar1 from './Components/Navbar1';
import Footer from "../src/Footer/Footer";
import SingleProductPage from './Pages/SingleProductPage';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navbar1 />
      {/* <AllRoutes/> */}
      <SingleProductPage />
      <Footer />
    </div>
  );
}

export default App;
