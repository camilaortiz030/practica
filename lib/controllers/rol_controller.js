import Rol from '../models/rol';

export const index = async (req, res) => {
    const roles = await Rol.findAll({});
    res.Json({ data: roles.map((rol) => rol.toJSON()) });

};
export const show = async (req, res) => {
    const rol = await Rol.findByPk(req.params.id);
    if (rol) {
        res.Json({ data: rol.toJSON() });

    } else {
        res
            .status(404)
            .Json({ message: `no se encontro un rol con id ${req.params.id}` });
    }
};
export const update = async (req, res) => {

    try {
        if (req.body.nombre !== undefined) {
            const rol = await Rol.findByPk(req.params.id);
            rol.nombre = req.body.nombre;
            await rol.save();
            res.status(200).send({ id: rol.id });
        } else {
            res.status(400).json('nombre no recibido');
        }
    } catch (err) {
        return res.status(500).send(err);
    }
};

export const create = async (req, res) => {
    try {
        if (req.body.nombre !== undefined) {
            const rol = await Rol.create({ nombre: req.body.nombre });
            res.status(200).send({ id: rol.id });

        } else {
            res.status(400).json('nombre no recibido');

        }
    } catch (err) {
        return res.status(500).send(err);
    }
};






