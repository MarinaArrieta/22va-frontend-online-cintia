import useForm from "../../hooks/useForm"


const Register = () => {

    const {values, handleChange} = useForm({
        name: '',
        lastname: '',
        password: '',
        repeat_password: '',
    })

    return (
        <form>
            <label htmlFor='name'>Nombre</label>
            <input
                type="text"
                value={values.name}
                id="name"
                name="name"
                onChange={handleChange}
                placeholder="Ingrese su usuario"
            ></input>
            <label htmlFor='lastname'>Apellido</label>
            <input
                type="text"
                value={values.lastname}
                id="lastname"
                name="lastname"
                onChange={handleChange}
                placeholder="Ingrese su usuario"
            ></input>
            <label htmlFor='password'>Contrasena</label>
            <input
                type="password"
                value={values.password}
                id="password"
                name="password"
                onChange={handleChange}
                placeholder="Ingrese su contrasena"
            ></input>
            <label htmlFor='repeat_password'>Repetir contrasena</label>
            <input
                type="repeat_password"
                value={values.repeat_password}
                id="repeat_password"
                name="repeat_password"
                onChange={handleChange}
                placeholder="Ingrese su contrasena"
            ></input>
        </form>
    )
}

export default Register
