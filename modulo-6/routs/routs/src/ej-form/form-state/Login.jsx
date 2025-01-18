import useForm from "../../hooks/useForm"

const Login = () => {

    const {values, handleChange} = useForm({
        username: '',
        password: '',
    })

    return (
        <form>
            <label htmlFor='username'>Usuario</label>
            <input
                type="text"
                value={values.username}
                id="username"
                name="username"
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
        </form>
    )
}

export default Login
