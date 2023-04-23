import { BrowserRouter, Navigage, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage/loginPage";
import ProfilePage from "scenes/profilePage/profilePage";


function App() {
  const mode = useState
  return (
    <div className="app">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile/:userId" element={<Profi lePage />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
