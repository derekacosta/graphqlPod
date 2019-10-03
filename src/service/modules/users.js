import { getUserId } from './utils'

export const user = async (parent, { id }, ctx, info) => {
  const requestingUserId = getUserId(ctx)
  return ctx.db.query.user({ id })
}
