import Rol from '../models/rol';
export const index = async (req, res) => {
    console.log("LLEGA")
    const roles = await Rol.findAll({});
    res.json({ data: roles.map((rol) => rol.toJSON()) });

};

export const show = async (req, res) => {
    console.log("LLEGA")
    const rol = await Rol.findByPk(req.params.id);
    if (rol) {
        res.json({ data: rol.toJSON() });

    } else {
        res
            .status(404)
            .json({ messege: `No se encontro la carrera con el id ${req.param.id}` });

    }

};

export const create = async (req, res) => {
    try {


        if (req.body.name !== undefined) {
            const rol = await Rol.create({ name: req.body.name });
            res.status(200).send({ id: rol.id });



        }
        else {
            res.status(400).json('nombre no recibido');

        }
    } catch (err) {
        return res.status(500).send(err);
    }
};
export const update = async (req, res) => {
    try {
        if (req.body.name !== undefined) {
            const rol = await Rol.findByPk(req.params.id);
            rol.name = req.body.name;
            await rol.save();
            res.status(200).send({ id: rol.id });
        } else {
            res.status(400).json('nombre no recibido');

        }

    } catch (err) {
        return res.status(500).send(err);
    }
};
