
import Curso from '../models/curso';

export const index = async (req, res) => {
    const cursos = await curso.findAll({});
    res.json({ data: cursos.map((curso) => curso.toJSON()) });
};
export const show = async (req, res) => {
    const curso = await Curso.findByPk(req.params.id);
    if (curso) {

        res.json({ data: curso.toJSON() });
    }
    else {
        res
            .status(404)
            .json({ message: `No se encontro el curso con la id ${req.param.id}` });
    }
}
export const create = async (req, res) => {
    try {
        if (req.body.name !== undefined) {
            const curso = await Carrera.create({ name: req.body.name });
            res.status(200).send({ id: curso.id })
        }
        else {
            res.status(400).json(`nombre no recibido`);
        }
    }
    catch (err) {
        return res.status(500).send(err);
    }
};
export const update = async (req, res) => {
    try {
        if (req.body.name !== undefined) {
            const curso = await Curso.findByPk(req.params.id);
            curso.name = req.body.name;
            await curso.save();
            res.status(200).send({ id: curso.id })
        }
        else {
            res.status(400).json(`nombre no recibido`);
        }
    }
    catch (err) {
        return res.status(500).send(err);
    }
};