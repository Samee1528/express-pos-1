import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
        <Routes>
        <Route index element={<Login/>}/>
    <Route path='user' element={<UserRegister/>}/>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path='product' element={<ProductManage/>}/>
    <Route path='cart' element={<CartManage/>}/>
    </Routes>
    </div>
);
}

export default App;
