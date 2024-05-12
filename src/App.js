import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Routes/Login";
import {routeObject} from "./components/Routes/routeObject";
import NotFound from "./components/Routes/NotFound";
import Navbar from "./components/layout/Navbar";
import {useState} from "react";


function App() {
    const [log, setLog] = useState(false)
    return (
        <>
            <Router>
                {log && <Navbar />}
                <Routes>
                    <Route path="/" element={<Login setLog={setLog} />}/>
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
