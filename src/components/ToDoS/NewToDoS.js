import { Box,Button,TextField } from "@material-ui/core"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewToDo } from "../store/toDoSlice";

const NewToDoS = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    return(
        <Box>
            <TextField 
                onChange={(e)=>setValue(e.target.value)}
                variant="outlined"
                value={value}>
            </TextField>
            <Button disabled={value.trim() === ""}
                 onClick = {() => {
                    dispatch(addNewToDo(value));
                    value("");
                 }

                 }>Add
            </Button>   
        </Box>
    );
};

export default NewToDoS;