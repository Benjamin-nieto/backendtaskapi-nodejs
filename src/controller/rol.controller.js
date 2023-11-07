import Rol from '../models/Rol.js';

export const getRoles = async (req, res) => {

    try {
        const rol = await Rol.findAll()
        res.json(rol);
    } catch (error) {
        return res.status(500).json({ message: error })
    }

}


export const createRol = async (req, res) => {
    try {
        //console.log(req.body)
        const { nombreRol, descripcion } = req.body;

        const newRol = await Rol.create({
            nombreRol,
            descripcion,
            
        })

        res.json({
            'msg': 'record created',
            'obj': newRol
        });
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}


export const updateRol = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombreRol, descripcion } = req.body

        const rol = await Rol.findByPk(id)

        if (nombreRol !== undefined) {
            rol.nombreRol = nombreRol;
        }
        if (descripcion !== undefined) {
            rol.descripcion = descripcion;
        }
       
        await rol.save()

        res.json(rol)
    } catch (error) {
        return res.status(500).json({ message: error })

    }
}

export const deleteRol = async (req, res) => {
    try {
        const { id } = req.params;
         await Rol.destroy({
            where: {
                id,
            }
        })

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error })

    }
}


export const getRolById = async (req, res) => {
    try {
        const { id } = req.params;
        const rolRes =  await Rol.findOne({
        where: {
            id,
        }
       });
       if(!rolRes) return res.status(404).json({message: "rol does not exists"})
    
       res.json(rolRes);
    } catch (error) {
        return res.status(500).json({ message: error })

    }
}