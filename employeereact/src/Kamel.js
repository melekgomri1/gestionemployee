import React from 'react';
import { useNavigate } from 'react-router-dom';

function Kamel(props) {  // Add 'props' as a parameter
    const navigate = useNavigate();
   

    const handleClick = () => {
        navigate('/about');
    };
   

    return (
        <div>
          {/* Access props directly */}
            <h1>Kamel Gomriaa</h1>
            
            <button onClick={handleClick}>click</button><br />
        </div>
    );
}

export default Kamel;
