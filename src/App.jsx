import Content from "./components/Content/Content"
import Navigation from "./components/Navigations/Navigation"
import Panel from "./components/Panel/Panel"
import './App.css';
import { Routes, Route } from "react-router-dom";
import Reg from "./components/registration/registration";
import Log from "./components/login/login";

function App(props) {
  return (
    <div className="wrapper">
      <Navigation />
      <div className="container">
        <Routes>

          <Route path='/register' element={<Reg />} />
          <Route path='/login' element={<Log />} />
          <Route path='/*' element={<Container post_data={props.post_data} />} />
        </Routes>
      </div>

    </div>
  )
}
export default App
function Container(props) {
  return (
    <div className="container_content">
      <Content post_data={props.post_data} />
      <Panel />
    </div>
  )
}