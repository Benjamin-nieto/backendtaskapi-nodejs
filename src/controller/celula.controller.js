import Celula from '../models/Celula.js';

export const getCelulas = async (req, res) => {

    try {
        const celulas = await Celula.findAll()
        res.json(celulas);
    } catch (error) {
        return res.status(500).json({ message: error })
    }

}


export const createCelula = async (req, res) => {
    try {
        //console.log(req.body)
        const { nombre, productOwner, proyecto } = req.body;

        const newCelula = await Celula.create({
            nombre,
            productOwner,
            proyecto
        })

        res.json({
            'msg': 'record created',
            'obj': newCelula
        });
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}


export const updateCelula = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, productOwner, proyecto } = req.body

        const celula = await Celula.findByPk(id)

        if (nombre !== undefined) {
            celula.nombre = nombre;
        }
        if (productOwner !== undefined) {
            celula.productOwner = productOwner;
        }
        if (proyecto !== undefined) {
            celula.proyecto = proyecto;
        }
        await celula.save()
        //  console.log(celula)

        res.json(celula)
    } catch (error) {
        return res.status(500).json({ message: error })

    }
}

export const deleteCelula = async (req, res) => {
    try {
        const { id } = req.params;
        //const celulaDeleted =
        await Celula.destroy({
            where: {
                id,
            }
        })

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error })

    }
}


export const getCelulaById = async (req, res) => {
    try {
        const { id } = req.params;
        //const celulaDeleted =
       const celulaRes =  await Celula.findOne({
        where: {
            id,
        }
       });
       if(!celulaRes) return res.status(404).json({message: "celula does not exists"})
    
       res.json(celulaRes);
    } catch (error) {
        return res.status(500).json({ message: error })

    }
}