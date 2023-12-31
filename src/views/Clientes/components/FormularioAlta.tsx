import { useState } from "react"
import { Cliente } from "../../../models"
import CustomButton from "../../../components/CustomButton/CustomButton"
import { clientsInstance } from "../../../assets/axiosInstances"

const FormularioAlta = () => {
    const [nuevoCliente, setNuevoCliente] = useState<Cliente>({
        id: 0,
        nombre: "",
        email: "",
        age: 0
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNuevoCliente((cliente) => ({
            ...cliente,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()

        clientsInstance
            .post("/clients", {
                action: "create",
                client: nuevoCliente
            })
            .then(console.log)
            .catch(console.error)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="nombre"
                type="text"
                placeholder="Nombre"
                value={nuevoCliente.nombre}
                onChange={handleChange}
            ></input>
            <input
                name="age"
                type="number"
                placeholder="Edad"
                value={nuevoCliente.age}
                onChange={handleChange}
            ></input>
            <input
                name="email"
                type="email"
                placeholder="Email"
                value={nuevoCliente.email}
                onChange={handleChange}
            ></input>
            <CustomButton onClick={() => null}>Enviar</CustomButton>
        </form>
    )
}

export default FormularioAlta
