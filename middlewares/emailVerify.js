const emailVerify = (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /^[a-z0-9._]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    const emailTest = emailRegex.test(email);

    if (!email || email === '') {
        return res.status(400).json({
            message: 'O campo "email" é obrigatório',
        });
    }

    if (!emailTest) {
        return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }

    next();
};

module.exports = emailVerify;
