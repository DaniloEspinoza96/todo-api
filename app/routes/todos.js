const router = require('express').Router();

// aquí van todas las rutas de todo
router.get('/:name', (req, res) => {
  res.json({
    message: `Hola ${req.params.name}`
  })
})

module.exports = router;