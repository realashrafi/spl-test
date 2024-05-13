import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Routes/Login";
import {routeObject} from "./components/Routes/objects/routeObject";
import NotFound from "./components/Routes/NotFound";
import Navbar from "./components/layout/navbar/Navbar";
import {useState} from "react";
import LoginTest from "./components/Routes/LoginTest";


function App() {
    const [log, setLog] = useState(false)
    return (
        <>
            <Router>
                {log && <Navbar />}
                <Routes>
                    <Route path="/" element={<Login setLog={setLog} />}/>
                    {/*<Route path="/login" element={<LoginTest/>}/>*/}
                    {routeObject.map((item) => (
                        <Route key={item.id} path={item.path} element={item.element}/>
                    ))}
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
