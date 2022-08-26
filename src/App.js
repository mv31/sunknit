import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import { LandingPage } from "./pages/LandingPage";

function App() {
  return (
    <>
    <Header/>
    <NavBar/>
     <Routes>
      <Route path="/"element={<LandingPage />}></Route>
      {/* <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      /> */}
    </Routes>
    </>
   
  );
}

export default App;
