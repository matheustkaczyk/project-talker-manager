const rateVerify = (req, res, next) => {
    const { talk } = req.body;
    const { rate } = talk;

    if (parseInt(rate, 10) < 1 || parseInt(rate, 10) > 5) {
        return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }

    next();
};

module.exports = { rateVerify };
