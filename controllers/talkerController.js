const fs = require('fs');

const getAll = (_req, res) => {
    const data = fs.readFileSync('talker.json');
    const jsonFile = JSON.parse(data);

    if (!data) return res.status(200).json([]);

    res.status(200).json(jsonFile);
};

const getById = (req, res) => {
    const { id } = req.params;
    const data = fs.readFileSync('talker.json');
    const personJson = JSON.parse(data);

    const findPerson = personJson.find((person) => person.id === parseInt(id, 10));

    if (!findPerson) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

    res.status(200).json(findPerson);
};

module.exports = { getAll, getById };
