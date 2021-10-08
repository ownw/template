import express, {Request, Response} from "express"

const router = express.Router()

router.use('/liveness', (_req: Request, res: Response) => res.status(200))
router.use('/readiness', (_req: Request, res: Response) => res.status(200))

export default router
//module.exports = {router}