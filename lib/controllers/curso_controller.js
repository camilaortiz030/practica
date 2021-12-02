import Curso from '../models/curso';
export const index = async (req, res) => {
    console.log("LLEGA")
    const cursos = await Curso.findAll({});
    res.json({ data: cursos.map((curso) => curso.toJSON()) });

};

export const show = async (req, res) => {
    console.log("LLEGA")
    const curso = await Curso.findByPk(req.params.id);
    if (curso) {
        res.json({ data: curso.toJSON() });

    } else {
        res
            .status(404)
            .json({ messege: `No se encontro la carrera con el id ${req.param.id}` });

    }

};

export const create = async (req, res) => {
    try {


        if (req.body.name !== undefined) {
            const curso = await Curso.create({ name: req.body.name });
            res.status(200).send({ id: curso.id });



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
            const curso = await Curso.findByPk(req.params.id);
            curso.name = req.body.name;
            await curso.save();
            res.status(200).send({ id: curso.id });
        } else {
            res.status(400).json('nombre no recibido');

        }

    } catch (err) {
        return res.status(500).send(err);
    }
};
