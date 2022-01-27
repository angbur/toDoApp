
import { Button, Box } from "@material-ui/core";
import { memo } from 'react';
import * as _ from "lodash";

const ToDoList = (props) => {
    const{list, setList} = props;
    return (
        <Box>
            {list?.map((item, id)=>(
                <div key={`item-${id}`}>
                    {item}
                    <Button
                        onClick={()=>{
                            const tempList = [...list];
                            tempList.splice(id,1);
                            setList(tempList);
                        }}
                    >
                        Delete

                    </Button>


                </div>
            ))}
        </Box>
    )
}

export default memo(ToDoList,(prevProps,nextProps)=>
    _.isEqual(prevProps.list, nextProps.list)
);