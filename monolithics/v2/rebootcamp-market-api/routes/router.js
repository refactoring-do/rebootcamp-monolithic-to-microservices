const apiRoute = require('express').Router();
const router = require('express').Router();
const cors = require('cors');

const { NotFoundMiddleware, ErrorHandlerMiddleware } = require('../middlewares');
const { ProductRoutes, HomeRoutes } = require('./');

apiRoute.use(cors());

apiRoute.use('/', HomeRoutes);
apiRoute.use('/product', ProductRoutes);

router.use('/api/v1', apiRoute);
router.use(NotFoundMiddleware);
router.use(ErrorHandlerMiddleware);

module.exports = router;
