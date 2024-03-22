const Tareas = ({tareas}) => {
    return (
        <>
            <div className="contenedorTareas">
                {
                    tareas.length > 0
                    ?
                    tareas.map((tarea, index) => {
                         return  <p key={index}>{index+1}.-{tarea}
                         <button className="text-end" >X</button> </p>
                            
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