import { useState } from 'react';

const Buttons3EjAda = () => {
  const [estado, setEstado] = useState({ numero: 0, texto: "Cero" });

  const Convertir = (nuevoNumero) => {
    const palabras = ["Cero", "Uno", "Dos", "Tres"];
    setEstado({ numero: nuevoNumero, texto: palabras[nuevoNumero] });
  };

  return (
    <div>
      <h2>Estado Actual</h2>
      <p>{estado.numero} - {estado.texto}</p>
      <button onClick={() => Convertir(1)}>Convertir a Uno</button>
      <button onClick={() => Convertir(2)}>Convertir a Dos</button>
      <button onClick={() => Convertir(3)}>Convertir a Tres</button>
    </div>
  );
}

export default Buttons3EjAda;