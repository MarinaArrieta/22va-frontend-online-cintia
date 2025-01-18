import { useState } from "react";

const Contrasena = () => {

    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
  
    const handlePass = (e) => {
      setPassword(e.target.value);
      // console.log(password);
      // console.log(e.target.value);
    };
    return (
      <>
        <div>Ejercicio 1-2</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log({ "tu contraseña es :": { password } }); // se devuelve el console.log en objeto solo para vista
          }}
        >
          <label htmlFor="password">Password</label>
          <input
          //   type="password"
           type={show?"text":"password"}
            id="password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={handlePass}
            placeholder="ingrese su contraseña"
          />
          {/* <button type="submit">Enviar</button> */}
          <button
            onClick={() => {
              setShow(!show);
              console.log(show)
            }}
            type="button"
          >
            {show ? "Ocultar Contraseña" : "Mostrar contraseña"}
          </button>
        </form>
      </>
    );
}

export default Contrasena