import * as jwt from 'jsonwebtoken'
import { Prisma } from 'prisma-binding'

export const APP_SECRET = process.env.APP_SECRET

export const getUserId = ctx => {
  const Authorization = ctx.request.get('Authorization')
  // console.log(Authorization)
  if (Authorization && Authorization !== 'null') {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, APP_SECRET) 
    return userId
  } else {
    throw new AuthError()
  }
}

export default class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}
