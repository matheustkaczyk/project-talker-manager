const express = require('express');

const router = express.Router();

const {
    getAll, getById, postNew, updateById, deleteById, searchByQuery,
} = require('../controllers/talkerController');

const {
    ageVerify,
    dateVerify,
    rateVerify,
    tokenVerify,
    nameVerify,
    talkVerify,
} = require('../middlewares');

router.get(
    '/search',
    tokenVerify,
    searchByQuery,
);

router.get(
    '/',
    getAll,
);

router.get(
    '/:id',
    getById,
);

router.post(
    '/',
    tokenVerify,
    nameVerify,
    ageVerify,
    talkVerify,
    dateVerify,
    rateVerify,
    postNew,
);

router.put(
    '/:id',
    tokenVerify,
    nameVerify,
    ageVerify,
    rateVerify,
    dateVerify,
    updateById,
);

router.delete(
    '/:id',
    tokenVerify,
    deleteById,
);

module.exports = router;