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
    const { name, age, talk } = req.body;

    const data = fs.readFileSync(talkersJSON);
    const personJson = JSON.parse(data);

    const newPerson = {
        id: (personJson.length + 1),
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

    const readFile = fs.readFileSync(talkersJSON, 'utf8');
    const personJson = JSON.parse(readFile);
    const personIndex = personJson.findIndex((p) => parseInt(p.id, 10) === parseInt(id, 10));

    personJson[personIndex] = { ...personJson[personIndex], name, age, talk };

    fs.writeFileSync(talkersJSON, JSON.stringify(personJson));

    res.status(200).json(personJson[personIndex]);
};

const deleteById = (req, res) => {
    const { id } = req.params;

    const readFile = fs.readFileSync(talkersJSON);
    const personJson = JSON.parse(readFile);

    const deletePerson = personJson.filter((p) => parseInt(p.id, 10) !== parseInt(id, 10));

    fs.writeFileSync(talkersJSON, JSON.stringify(deletePerson));

    res.status(200).json({ message: 'Pessoa palestrante deletada com sucesso' });
};

const searchByQuery = (req, res) => {
    const { q } = req.query;

    const readFile = fs.readFileSync(talkersJSON);
    const personJson = JSON.parse(readFile);

    if (!req.query) return res.status(200).json(personJson);

    const filteredName = personJson.filter((p) => p.name.includes(q));

    res.status(200).json(filteredName);
};

module.exports = { getAll, getById, postNew, updateById, deleteById, searchByQuery };
