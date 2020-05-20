import { Router } from 'express';

const appointmentsRouter = Router();

appointmentsRouter.get('/', (request, response) => {
  return response.json({ message: 'tst' });
});

export default appointmentsRouter;
