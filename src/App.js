import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from "./Redux/Actions/Index";
import NotFound from './Components/404NotFound/404NotFound';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    var notes = JSON.parse(localStorage.getItem('notes'));
    var todolist = JSON.parse(localStorage.getItem('todolist'));
    if(!notes){
      notes = []
    }
    if(!todolist){
      todolist = []
    } else {
      var date = new Date();
      var time = parseInt(localStorage.getItem('time'));
      console.log(time)
      if(date.getDate() - time >= 1){
        todolist.map(item => item.state = false)
      }
    }
    dispatch(getData({notes: notes, todolist: todolist}))
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
