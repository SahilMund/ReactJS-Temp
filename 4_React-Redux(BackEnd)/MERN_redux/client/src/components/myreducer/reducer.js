const istate={
    text:'',
    mywishes:[{_id:1,wish:"loading"}] 
}


const reducer =(state=istate,action) =>{

    if (action.type === 'UPDATE_INPUT'){
    return {
        ...state,
        text:action.payload
    }
}}

export default reducer;
