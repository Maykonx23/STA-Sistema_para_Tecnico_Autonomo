import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import ChatController from "../controllers/ChatController";

const chatsRouter = Router();
const chatsController = new ChatController();

chatsRouter.get("/", chatsController.index);

chatsRouter.get(
    "/:id",
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    chatsController.show
);

chatsRouter.post(
    "/",
    celebrate({
        [Segments.BODY]: {
            descricao: Joi.string().required(),
            cliente: Joi.string().required(),
            tecnico: Joi.string().required(),
            solicitacaoServico_id: Joi.string().required(),
        },
    }),
    chatsController.create
);

chatsRouter.put(
    "/:id",
    celebrate({
        [Segments.BODY]: {
            descricao: Joi.string(),
            cliente: Joi.string(),
            tecnico: Joi.string(),
            solicitacaoServico_id: Joi.string(),
        },
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    chatsController.update
);

chatsRouter.delete(
    "/:id",
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    chatsController.delete
);

export default chatsRouter;
