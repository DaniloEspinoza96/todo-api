import { Router } from 'express';
import packageJson from '../../package.json' assert {type: 'json'};
import todos from './todos.js';

const router = Router();

router.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        name: packageJson.name,
        version: packageJson.version,
    });
});

router.use('/', todos);

export default router;