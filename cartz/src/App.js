import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar1 from './Components/Navbar1';
import Footer from "../src/Footer/Footer";
import { AuthContextProvider } from './Context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar1 />
        <AllRoutes/>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
