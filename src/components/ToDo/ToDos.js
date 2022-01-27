import { Box } from "@material-ui/core";
import { useState } from "react";
import NewToDo from "./NewToDo";
import ToDoList from "./ToDoList";

const ToDos = () => {

    const [value,setValue] = useState("");
    const [list,setList]= useState([]);

    return(
        <Box 
            display={"flex"}
            flexDirection={"column"} 
            alignItems={"center"}>
            <NewToDo setValue={setValue} setList={setList} value={value}/>
            <ToDoList setList={setList} list={list}/>
        </Box>
    );
};

export default ToDos;