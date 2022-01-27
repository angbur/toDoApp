
import { Button, Box } from "@material-ui/core";
import { useSelector,useDispatch } from "react-redux";
import { removeToDo } from "../store/toDoSlice";

const ToDoListS = (props) => {
    const list = useSelector((state)=>state.toDos.toDos);
    const dispatch = useDispatch();
   
    return (
        <Box>
            {list?.map((item, id)=>(
                <div key={`item-${id}`}>
                    {item}
                    <Button
                        onClick={()=>{
                            dispatch(removeToDo(id));
                        }}
                    >
                        Delete

                    </Button>


                </div>
            ))}
        </Box>
    )
}

export default ToDoListS;