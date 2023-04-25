import React from "react";
import Homecrud from "./Components/Homecrud";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Createusers from "./Components/Createusers";
import Users from "./Components/Users";
import Editusers from "./Components/Editusers";

const App=()=>{
    return(
        <div>
        <BrowserRouter>
            <Homecrud/>
            <Routes>
                <Route path="/createusers" element={<Createusers/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/edit/:index" element={<Editusers/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    )
}
export default App