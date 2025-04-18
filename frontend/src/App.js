import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Frontpage from "./screens/Frontpage";
import Loginpage from "./screens/Loginpage";
import Registerpage from "./screens/Registerpage";
import Mynotes from "./screens/Mynotes/Mynotes";
import { BrowserRouter, Route ,Routes } from "react-router-dom";
import CreateNote from "./screens/CreateNote";
import SingleNote from "./screens/SingleNote";

const App = () => (
<BrowserRouter>
  < Header />
  <main>
    {/* <Frontpage/> */}
    <Routes>
          <Route path="/" element = { <Frontpage/>} exact/>
          <Route path="/login" element = { <Loginpage/>} exact/>
          <Route path="/signup" element = { <Registerpage/>} exact/>
          <Route path="/mynotes" element= { <Mynotes/>} />
          <Route path="/createNote" element= { <CreateNote/>} />
          <Route path="/note/:id" element= { <SingleNote/>} />
    </Routes>
  </main>
  <Footer />
  </BrowserRouter>
)
 
export default App;
