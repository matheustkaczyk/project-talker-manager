const fs = require('fs');

const talkersJSON = 'talker.json';

const getAll = (_req, res) => {
    const data = fs.readFileSync(talkersJSON);
    const jsonFile = JSON.parse(data);

    if (!data) return res.status(200).json([]);

    res.status(200).json(jsonFile);
};

const getById = (req, res) => {
    const { id } = req.params;
    const data = fs.readFileSync(talkersJSON);
    const personJson = JSON.parse(data);

    const findPerson = personJson.find((person) => parseInt(person.id, 10) === parseInt(id, 10));

    if (!findPerson) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

    res.status(200).json(findPerson);
};

const postNew = (req, res) => {
    const { name, age, id, talk } = req.body;

    const data = fs.readFileSync(talkersJSON);
    const personJson = JSON.parse(data);

    const newPerson = {
        id,
        name,
        age,
        talk,
    };

    personJson.push(newPerson);

    fs.writeFileSync(talkersJSON, JSON.stringify(personJson));

    res.status(201).json(personJson[personJson.length - 1]);
};

const updateById = (req, res) => {
    const { id } = req.params;
    const { name, age, talk } = req.body;

    const readFile = fs.readFileSync(talkersJSON);
    const personJson = JSON.parse(readFile);
    const personIndex = personJson.findIndex((p) => parseInt(p.id, 10) === parseInt(id, 10));

    personJson[personIndex] = { name, age, id: parseInt(id, 10), talk };

    res.status(200).json(personJson[personIndex]);
};

module.exports = { getAll, getById, postNew, updateById };
