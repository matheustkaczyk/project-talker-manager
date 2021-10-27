const randomToken = require('random-token');

const loginPost = (_req, res) => {
    const token = randomToken(16);

    res.status(200).json({ token });
};

module.exports = { loginPost };
