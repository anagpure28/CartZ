import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import Navbar1 from './Components/Navbar1';
import Footer from "../src/Footer/Footer";
import { AuthContextProvider } from './Context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        {/* <Navbar /> */}
        <Navbar1 />
        <AllRoutes/>
        {/* <SingleProductPage /> */}
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
