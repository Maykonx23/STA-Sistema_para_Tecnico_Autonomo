import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import TecnicoController from '../controllers/TecnicoController';

const tecnicosRouter = Router();
const tecnicoController = new TecnicoController();

tecnicosRouter.get('/', tecnicoController.index);

tecnicosRouter.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    tecnicoController.show,
);

tecnicosRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            descricao: Joi.string().required(),
            avaliacao: Joi.number(),
            cliente_id: Joi.required(),
        },
    }),
    tecnicoController.create,
);

tecnicosRouter.put(
    '/:id',
    celebrate({
        [Segments.BODY]: {
            descricao: Joi.string(),
            avaliacao: Joi.number(),
            cliente_id: Joi.string(),
        },
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    tecnicoController.update,
);

tecnicosRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    tecnicoController.delete,
);

export default tecnicosRouter;