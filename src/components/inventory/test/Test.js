import { useState } from "react";

const Test = () => {
    
    const [numero, setNumero] = useState(0);
    // console.log(numero);

    function update(newNumber) {
        setNumero(newNumber);
    }


    return (
        <div>
            <h1>The number is {numero}</h1>
            <button type="submit" onClick={() => update(numero+1)}>Change</button>
        </div>
    );
};

export default Test;
