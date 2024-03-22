import Tareas from "./tareas"

const Input = ({ handleChange, handleKeyDown, tarea}) => {
    return (
        <>
            <input type="text"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={tarea}
                className="inputComponent"
                placeholder="Agrega tu tarea"
                name="Tarea" id="Task" />

            <button type="submit"  className="botonAdd">Agregar tarea</button>
        </>
    )
}

export default Input