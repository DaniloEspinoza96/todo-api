const router = require('express').Router();
const packageJson = require('../../package.json');

const todos = require('./todos');

router.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        name: packageJson.name,
        version: packageJson.version,
    });
});

// agregar todos los endpoints aqui
router.use('/', todos);

module.exports = router;