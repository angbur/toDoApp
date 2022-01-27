import { Box,Button,TextField } from "@material-ui/core"

const NewToDo = (props) => {
    const {setValue, setList, value} = props;

    return(
        <Box>
            <TextField 
                onChange={(e)=>setValue(e.target.value)}
                variant="outlined"
                value={value}>
            </TextField>
            <Button disabled={value.trim() === ""}
                 onClick = {() => {
                    setList((prev)=>[...prev,value]);
                    setValue("");
                 }

                 }>Add
            </Button>   
        </Box>
    );
};

export default NewToDo;