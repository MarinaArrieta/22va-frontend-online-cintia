import { useState } from 'react';

const Accordion = ()=> {
    const [show, setShow] = useState(true);

    return(
        <div>
            <h3>Accordion</h3>
            {show && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, dolores.</p>}
            <button onClick={()=> setShow(!show)}>{show ? 'Ocultar Lorem' : 'Mostrar Lorem'}</button>
        </div>
    )
}

export default Accordion;