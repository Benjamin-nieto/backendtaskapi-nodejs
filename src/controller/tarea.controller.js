import Tarea from '../models/Tarea.js';

export const getTareas = async (req, res) => {

    try {
        const tareas = await Tarea.findAll()
        res.json(tareas);
    } catch (error) {
        return res.status(500).json({ message: error })
    }

}


export const createTarea = async (req, res) => {
    try {
        //console.log(req.body)
        const { nombre, sprint, porcentaje,estado, personaId, celulaId } = req.body;

        const newTarea = await Tarea.create({
            nombre,
            sprint,
            porcentaje,
            estado,
            personaId,
            celulaId
        })

        res.json({
            'msg': 'record created',
            'obj': newTarea
        });
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}


export const updateTarea = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, sprint, porcentaje,estado, personaId, celulaId } = req.body;

        const tarea = await Tarea.findByPk(id)

        if (nombre !== undefined) {
            tarea.nombre = nombre;
        }
        if (sprint !== undefined) {
            tarea.sprint = sprint;
        }
        if (porcentaje !== undefined) {
            tarea.porcentaje = porcentaje;
        }
        if (estado !== undefined) {
            tarea.estado = estado;
        }
        if (personaId !== undefined) {
            tarea.personaId = personaId;
        }
        if (celulaId !== undefined) {
            tarea.celulaId = celulaId;
        }
        await tarea.save()
        //  console.log(celula)

        res.json(tarea)
    } catch (error) {
        return res.status(500).json({ message: error })

    }
}

export const deleteTarea = async (req, res) => {
    try {
        const { id } = req.params;
        await Tarea.destroy({
            where: {
                id,
            }
        })

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error })

    }
}


export const getTareaById = async (req, res) => {
    try {
        const { id } = req.params;
        const tareaRes =  await Tarea.findOne({
        where: {
            id,
        }
       });
       if(!tareaRes) return res.status(404).json({message: "tarea does not exists"})
    
       res.json(tareaRes);
    } catch (error) {
        return res.status(500).json({ message: error })

    }
}