import { Request, Response, NextFunction, Router } from 'express'
import { userStatus } from '../common'
// import { authRouter } from './auth'
// import { sellerRouter } from './seller'
// import { userRouter } from './user'

const router = Router()
const accessContorl = (req: Request, res: Response, next: NextFunction) => {
    req.headers.userType = userStatus[req.originalUrl.split('/')[1]]
    next()
}

// router.use('/auth', authRouter)
// router.use('/seller', accessContorl, sellerRouter)
// router.use('/user', accessContorl, userRouter)

export { router }