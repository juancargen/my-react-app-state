import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>El contador está en: {count} </div>
    )
}

export default Counter;