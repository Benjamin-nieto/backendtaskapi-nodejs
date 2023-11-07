import Usuario from '../models/Usuario.js';

export const getUsuarios = async (req, res) => {

    try {
        const usuario = await Usuario.findAll()
        res.json(usuario);
    } catch (error) {
        return res.status(500).json({ message: error })
    }

}


export const createUsuario = async (req, res) => {
    try {
        //console.log(req.body)
        const { nombre, user, password, celulaId } = req.body;

        const newUser= await Usuario.create({
            nombre,
            user,
            password,
            celulaId
        })

        res.json({
            'msg': 'record created',
            'obj': newUser
        });
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}


export const updateUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, user, password, celulaId } = req.body;

        const usuario = await Usuario.findByPk(id)

        if (nombre !== undefined) {
            usuario.nombre = nombre;
        }
        if (user !== undefined) {
            usuario.user = user;
        }
        if (password !== undefined) {
            usuario.password = password;
        }
        if (celulaId !== undefined) {
            usuario.celulaId = celulaId;
        }
        await usuario.save()
        //  console.log(celula)

        res.json(usuario)
    } catch (error) {
        return res.status(500).json({ message: error })

    }
}

export const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        await Usuario.destroy({
            where: {
                id,
            }
        })

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error })

    }
}


export const getUsuarioById = async (req, res) => {
    try {
        const { id } = req.params;
        const userRes = await Usuario.findOne({
            where: {
                id,
            }
        });
        if (!userRes) return res.status(404).json({ message: "usuario does not exists" })

        res.json(userRes);
    } catch (error) {
        return res.status(500).json({ message: error })

    }
}