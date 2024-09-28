import React, { useEffect ,useRef} from 'react';
import { useNavigate } from 'react-router-dom';

function Kamel(props) {
    const navigate = useNavigate();
    const [count, setCount] = React.useState(0);
    const [firstname, setFirstname] = React.useState("Melek Tekup");

    const handleClick = () => {
        navigate('/about');
    };

    useEffect(() => {
        console.log("welcome home");
    }); 
    useEffect(() => {
        console.log("welcome tek-up");
    });
const first=useRef()
    return (
        <div>
            <input ref={first}></input>
            <button onClick={()=>console.log(first.current.value)}>Click me</button>
            {/* Access props if needed */}
            <h1>Kamel Gomriaa</h1>
            <h1>{count}</h1>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <h1>My first name: {firstname}</h1>
            <button onClick={() => setFirstname("Boussidi w idi fi zebi")}>Change name</button>
            <button onClick={handleClick}>Click</button><br />
        </div>
    );
}

export default Kamel;
