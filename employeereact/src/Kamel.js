import React from 'react';
import { useNavigate } from 'react-router-dom';

function Kamel(props) {  // Add 'props' as a parameter
    const navigate = useNavigate();
   const [count,setCount]=React.useState(0);
   const [firstname,setfirstname]=React.useState("melek tekup")

    const handleClick = () => {
        navigate('/about');
    };
   

    return (
        <div>
          {/* Access props directly */}
            <h1>Kamel Gomriaa</h1>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <h1>My first name:{firstname}</h1>
            <button onClick={()=>setfirstname("boussidi w idi fi zebi")}> change name</button>
            
            <button onClick={handleClick}>click</button><br />
        </div>
    );
}

export default Kamel;
