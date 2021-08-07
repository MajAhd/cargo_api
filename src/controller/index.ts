import * as express from 'express';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(
        {
            home: 'success'
        }
    );
});

export default router;