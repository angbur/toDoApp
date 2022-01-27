import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import {AppBar, Box, Toolbar,Button} from "@material-ui/core";
import HomePage from '../HomePage/HomePage';
import ToDos from '../ToDo/ToDos';

function App() {
  return (
    <Box height={"100%"} display={"flex"} flexDirection={"column"}>
      <AppBar position='static'>
        <Toolbar>
          <Button>
            <Link to={"/"}> Home</Link>
          </Button>
          <Button>
            <Link to={"/toDos"}>To Dos</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Box padding={2} flex={1} overflow={"auto"}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/toDos" element={<ToDos/>} />
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </Box>
      <Box 
        display={"flex"}
        justifyContent={"center"} 
        alignItems={"center"} 
        height={"50px"} 
        bgcolor={"black"}
        color={"white"}
        flex-shrink={"0"}>
        Footer
      </Box>
    </Box>
  );
}

export default App;
