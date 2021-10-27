const dateVerify = (req, res, next) => {
    const { talk } = req.body;
    const { watchedAt } = talk;
    const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

    if (!dateRegex.test(watchedAt)) {
        return res.status(400).json(
            { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' },
        );
    }
    // if (!talk || !watchedAt || rate) {
    //     return res.status(400).json(
    //         {
    //             message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    //         },
    //     );
    // }

    next();
};

module.exports = { dateVerify };
