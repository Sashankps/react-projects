import { useState } from 'react'

function ToggleItem(defaultValue = true) {
    const [item, setItem] = useState(defaultValue); 

    function toggle() { 
        setItem(!item); 
    }

    return [item, toggle]; 
}

export default ToggleItem;