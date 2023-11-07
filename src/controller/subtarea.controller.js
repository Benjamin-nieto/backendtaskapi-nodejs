import SubTarea from '../models/SubTarea.js';

export const getSubtareas = async (req, res) => {

    try {
        const subTarea = await SubTarea.findAll()
        res.json(subTarea);
    } catch (error) {
        return res.status(500).json({ message: error })
    }

}


export const createSubtarea = async (req, res) => {
    try {
        //console.log(req.body)
        const { nombre, horas, estado, porcentaje, tareaId } = req.body;

        const newSubtarea = await SubTarea.create({
            nombre, 
            horas, 
            estado, 
            porcentaje, 
            tareaId
        })

        res.json({
            'msg': 'record created',
            'obj': newSubtarea
        });
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}


export const updateSubtarea = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, horas, estado, porcentaje, tareaId } = req.body

        const subTarea = await SubTarea.findByPk(id)

        if (nombre !== undefined) {
            subTarea.nombre = nombre;
        }
        if (horas !== undefined) {
            subTarea.horas = horas;
        }
        if (estado !== undefined) {
            subTarea.estado = estado;
        }
        if (porcentaje !== undefined) {
            subTarea.porcentaje = porcentaje;
        }
        if (tareaId !== undefined) {
            subTarea.tareaId = tareaId;
        }
        await subTarea.save()
        //  console.log(celula)

        res.json(subTarea)
    } catch (error) {
        return res.status(500).json({ message: error })

    }
}

export const deleteSubtarea = async (req, res) => {
    try {
        const { id } = req.params;
         await SubTarea.destroy({
            where: {
                id,
            }
        })

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error })

    }
}


export const getSubtareaById = async (req, res) => {
    try {
        const { id } = req.params;
        const subTarea = await SubTarea.findOne({
            where: {
                id,
            }
        });
        if (!subTarea) return res.status(404).json({ message: "sub tarea does not exists" })

        res.json(subTarea);
    } catch (error) {
        return res.status(500).json({ message: error })

    }
}