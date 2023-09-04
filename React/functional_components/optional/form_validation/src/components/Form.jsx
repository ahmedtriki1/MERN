import React,{useReducer} from 'react'
    const initialState = {
            firstName: {
                value: '',
                error: null
            },
            lastName: {
                value: '',
                error: null
            },
            email: {
                value: '',
                error: null
            }
        };
        function reducer(state, action) {
            switch (action.type){
                case 'First_Name':
                    return{
                        ...state,firstName:{value:action.payload,error:action.payload.length>2 ?false :true}
                    };
                case 'Last_Name':
                    return{
                        ...state,lastName:{value:action.payload,error:action.payload.length>2 ?false :true}
                    };
                case 'Email':
                    return{
                        ...state,email:{value:action.payload,error:(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.email.value) )?false :true}
                    }; 
                    default:
                return ""
            }
        }
function Form() {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }
        
    return (
    <div>
        <form >
            <div>
                <label >First_Name</label>
                <input onChange={(e)=>{handleChange(e);}}  name='First_Name' value={state.firstName.value}/> <br />
                {state.firstName.error ?  <p style={{color:"red"}}>That field must be least than 2!</p>: ""}
            </div>
            <div>
                <label>Last_Name: </label> 
                <input onChange={(e)=>{handleChange(e);}}  name='Last_Name' value={state.lastName.value}/> <br />
                {state.lastName.error ?  <p style={{color:"red"}}>That field must be least than 2!</p>: ""}
            </div>
            <div>
                <label>Email: </label> 
                <input onChange={(e)=>{handleChange(e);}}  name='Email' value={state.email.value}/> <br />
                {state.email.error ?  <p style={{color:"red"}}>Invalide email!</p>: ""}
            </div>
        </form>
    </div>
    )
}

export default Form