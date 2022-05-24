const router = require('express').Router();

// aquí van todas las rutas de todo
// router.get('/:name', (req, res) => {
//   res.json({
//     message: `Hola ${req.params.name}`
//   })
// })

// insertar un TODO
router.post('/addtodo', (req, res) => {
  // responder con el id del todo que se ha creado
})

// obtener todos los TODO

// modificar un TODO

// eliminar un TODO

// conseguir TODOS por fecha y orden que se pueda elegir ASC o DESC

// eliminar todos los TODO


module.exports = router;