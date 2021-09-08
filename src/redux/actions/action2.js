import { Add, DELETE, EDIT,TOGGLE_COMPLETE } from "./Actions-type";

export const add = (newTodo)=> {
    return {
        type: Add,
        payload:newTodo
    }
};
export const dlete =(id)=> {
    return {
        type: DELETE,
        payload:id,
    }
};
export const edit =({id,title})=> {
    return {
        type:EDIT,
        payload:{id,title},
    }
};
export const complete =(id)=> {
    return {
        type:TOGGLE_COMPLETE ,
        payload:id
      
    }
};

export const search =(x)=> {
    return {
        type:'SEARCH' ,
        payload:x
      
    }
};
export const find =(status)=> {
    return {
        type:'FIND' ,
       payload:status
      
    }
};
