import Persona from '../models/Persona.js';

export const getPersonas = async (req, res) => {

    try {
        const persona = await Persona.findAll()
        res.json(persona);
    } catch (error) {
        return res.status(500).json({ message: error })
    }

}


export const createPersona = async (req, res) => {
    try {
         const { nombre, numeroIdentificacion, email, nickName,idRol} = req.body;

        const newPersona = await Persona.create({
            nombre,
            numeroIdentificacion,
            email,
            nickName,
            idRol
        })

        res.json({
            'msg': 'record created',
            'obj': newPersona
        });
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}


export const updatePersona = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, numeroIdentificacion, email, nickName,idRol } = req.body

        const persona = await Persona.findByPk(id)

        if (nombre !== undefined) {
            persona.nombre = nombre;
        }
        if (numeroIdentificacion !== undefined) {
            persona.numeroIdentificacion = numeroIdentificacion;
        }
        if (email !== undefined) {
            persona.email = email;
        }
        if (nickName !== undefined) {
            persona.nickName = nickName;
        }
        if (idRol !== undefined) {
            persona.idRol = idRol;
        }
        await persona.save()
 
        res.json(persona)
    } catch (error) {
        return res.status(500).json({ message: error })

    }
}

export const deletePersona = async (req, res) => {
    try {
        const { id } = req.params;
        await Persona.destroy({
            where: {
                id,
            }
        })

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error })

    }
}


export const getPersonaById = async (req, res) => {
    try {
        const { id } = req.params;
        const personaRes =  await Persona.findOne({
        where: {
            id,
        }
       });
       if(!personaRes) return res.status(404).json({message: "persona does not exists"})
    
       res.json(personaRes);
    } catch (error) {
        return res.status(500).json({ message: error })

    }
}