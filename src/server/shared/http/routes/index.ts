import clientesRouter from '@modules/clientes/routes/Clientes.routes';
import sessionsRouter from '@modules/clientes/routes/sessions.routes';
import enderecosRouter from '@modules/enderecos/routes/enderecos.routes';
import servicosRouter from '@modules/servicos/routes/Servicos.routes';
import tecnicosRouter from '@modules/tecnicos/routes/Tecnicos.routes';
import { Router } from 'express';

export const routes = Router();

routes.use('/enderecos', enderecosRouter);
routes.use('/clientes', clientesRouter);
routes.use('/tecnicos', tecnicosRouter);
routes.use('/servicos', servicosRouter);
routes.use('/sessions', sessionsRouter);
