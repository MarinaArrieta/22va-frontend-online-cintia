import { useState } from "react"

const NinoOninaEjAda = () => {

    const [estado, setEstado] = useState({ nino: true, texto: 'Es niño', background: 'blue' });

    const Convertir = (esNino) => {
        const color = ['blue', 'pink']
        const es = ['Es niño', 'Es niña'];
        setEstado({ nino: esNino, texto: es[esNino ? 0 : 1], background: color[esNino ? 0 : 1] });
    };

    return (
        <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
            <h3>Es Niño o Niña</h3>
            <div style={{display:'flex'}}>
                <input type="radio" value="nino" onClick={() => Convertir(true)} />
                <label>Niño</label>
                <input type="radio" value="nina" onClick={() => Convertir(false)} />
                <label>Niña</label>
            </div>
            <div style={{ width: '50px', height: '50px', background: estado.background }}></div>
            <p>{estado.texto}</p>
        </div>
    );
}

export default NinoOninaEjAda
