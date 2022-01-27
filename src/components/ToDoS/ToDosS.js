import { Box } from "@material-ui/core";
import { useState } from "react";
import NewToDoS from "./NewToDo";
import ToDoListS from "./ToDoList";

const ToDosS = () => {

    const [value,setValue] = useState("");
    const [list,setList]= useState([]);

    return(
        <Box 
            display={"flex"}
            flexDirection={"column"} 
            alignItems={"center"}>
            <NewToDoS setValue={setValue} setList={setList} value={value}/>
            <ToDoListS setList={setList} list={list}/>
        </Box>
    );
};

export default ToDosS;