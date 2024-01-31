const { router } = require('../config/imports');
const clientesRoutes = require('./clientes');

router.use('/clientes', clientesRoutes);

module.exports = router;