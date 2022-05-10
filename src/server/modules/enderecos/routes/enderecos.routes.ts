import { Router } from 'express';
import EnderecoController from '../controllers/EnderecoController';
import { celebrate, Joi, Segments } from 'celebrate';

const enderecosRouter = Router();
const enderecosController = new EnderecoController();

enderecosRouter.get('/', enderecosController.index);

enderecosRouter.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    enderecosController.show,
);

enderecosRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            cep: Joi.number().required(),
            rua: Joi.string().required(),
            bairro: Joi.string().required(),
            cidade: Joi.string().required(),
            uf: Joi.string().required(),
            numero: Joi.number(),
            complemento: Joi.string(),
        },
    }),
    enderecosController.create,
);

enderecosRouter.put(
    '/:id',
    celebrate({
        [Segments.BODY]: {
            cep: Joi.number().required(),
            rua: Joi.string().required(),
            bairro: Joi.string().required(),
            cidade: Joi.string().required(),
            uf: Joi.string().required(),
            numero: Joi.number(),
            complemento: Joi.string(),
        },
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    enderecosController.update,
);

enderecosRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    enderecosController.delete,
);

export default enderecosRouter;
