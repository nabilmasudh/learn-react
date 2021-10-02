import React, {useState} from 'react'

function Count() {
    const [count, setCount] = useState(0)

    let i = 0;
    const addFive = () =>{
        while(i < 5){
            setCount((prevItem)=> prevItem + 1);
            i += 1;
        }
    }
    return (
        <div>
            {count}
            <p>
                <button type='button' onClick={()=> setCount((prevItem)=>prevItem + 1)}>add 1</button>
            </p>
            <p>
                <button type='button' onClick={addFive}>add 5</button>
            </p>
        </div>
    )
}

export default Count
