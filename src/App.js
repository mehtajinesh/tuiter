import "./App.css";
import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/bootstrap/css/cyborg.bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HelloWorld from "./components/hello-world";
import Labs from "./components/Labs";
import Todo from "./components/Labs/todo";
import HomeScreen from "./components/Tuiter/HomeScreen";
import ExploreScreen from "./components/Tuiter/ExploreScreen";
import ProfileScreen from "./components/Tuiter/ProfileScreen"
import EditProfileScreen from "./components/Tuiter/EditProfileScreen"
import Tuiter from "./components/Tuiter";

function App() {
    return (<BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="/">
                    <Route index element={<Labs/>}/>
                    <Route path="labs" exact={true} element={<Labs/>}/>
                    <Route path="hello" exact={true} element={<HelloWorld/>}/>
                    <Route path="todo" exact={true} element={<Todo/>}/>
                    <Route path="tuiter" element={<Tuiter/>}>
                        <Route index element={<HomeScreen/>}/>
                        <Route path="home" exact={true} element={<HomeScreen/>}/>
                        <Route path="explore" exact={true} element={<ExploreScreen/>}/>
                        <Route path="profile" exact={true} element={<ProfileScreen/>}/>
                        <Route path="editprofile" exact={true} element={<EditProfileScreen/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    </BrowserRouter>);
}

export default App;
