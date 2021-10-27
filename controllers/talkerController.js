const fs = require('fs');

const getAll = (_req, res) => {
    const data = fs.readFileSync('talker.json');
    const jsonFile = JSON.parse(data);

    if (!data) return res.status(200).json([]);

    res.status(200).json(jsonFile);
};

module.exports = { getAll };
