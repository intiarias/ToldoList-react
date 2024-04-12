const Tareas = ({ tareas, setTareas }) => {

    const deleteboton = (indice) =>{
    
        let borrar = tareas.filter((tarea, index)=>index!=indice)
        
        setTareas(borrar)

    
        
    }
    return (
        <>
            <div className="contenedorTareas">
                {
                    tareas.length > 0
                        ?
                        tareas.map((tarea, index) => {
                            return(

                            <p key={index}>
                                {index + 1}.-{tarea}<button className="delete text-end" 
                                onClick={()=>deleteboton(index)}>X</button>
                            </p>
                            )
                        })
                        :
                        "No hay tareas"
                }
                <p className="text-end">Tienes {tareas.length} Tareas Pendientes</p>
            </div>
        </>
    )
}





export default Tareas