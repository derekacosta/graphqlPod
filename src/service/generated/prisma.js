const { makePrismaBindingClass } = require('prisma-binding')


/**
 * Type Defs
*/

const typeDefs = `type AggregateChat {
  count: Int!
}

type AggregateComment {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateS3Object {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVote {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Chat implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  message: String!
  author: User
}

"""A connection to a list of items."""
type ChatConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ChatEdge]!
  aggregate: AggregateChat!
}

input ChatCreateInput {
  id: ID
  message: String!
  author: UserCreateOneInput
}

"""An edge in a connection."""
type ChatEdge {
  """The item at the end of the edge."""
  node: Chat!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ChatOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  message_ASC
  message_DESC
}

type ChatPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  message: String!
}

type ChatSubscriptionPayload {
  mutation: MutationType!
  node: Chat
  updatedFields: [String!]
  previousValues: ChatPreviousValues
}

input ChatSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ChatSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ChatWhereInput
}

input ChatUpdateInput {
  message: String
  author: UserUpdateOneInput
}

input ChatUpdateManyMutationInput {
  message: String
}

input ChatWhereInput {
  """Logical AND on all given filters."""
  AND: [ChatWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  message: String

  """All values that are not equal to given value."""
  message_not: String

  """All values that are contained in given list."""
  message_in: [String!]

  """All values that are not contained in given list."""
  message_not_in: [String!]

  """All values less than the given value."""
  message_lt: String

  """All values less than or equal the given value."""
  message_lte: String

  """All values greater than the given value."""
  message_gt: String

  """All values greater than or equal the given value."""
  message_gte: String

  """All values containing the given string."""
  message_contains: String

  """All values not containing the given string."""
  message_not_contains: String

  """All values starting with the given string."""
  message_starts_with: String

  """All values not starting with the given string."""
  message_not_starts_with: String

  """All values ending with the given string."""
  message_ends_with: String

  """All values not ending with the given string."""
  message_not_ends_with: String
  author: UserWhereInput
}

input ChatWhereUniqueInput {
  id: ID
}

type Comment implements Node {
  id: ID!
  text: String!
  author: String!
  votes: Int
  post: Post!
}

"""A connection to a list of items."""
type CommentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  id: ID
  text: String!
  author: String!
  votes: Int
  post: PostCreateOneWithoutCommentsInput!
}

input CommentCreateManyWithoutPostInput {
  create: [CommentCreateWithoutPostInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateWithoutPostInput {
  id: ID
  text: String!
  author: String!
  votes: Int
}

"""An edge in a connection."""
type CommentEdge {
  """The item at the end of the edge."""
  node: Comment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  author_ASC
  author_DESC
  votes_ASC
  votes_DESC
}

type CommentPreviousValues {
  id: ID!
  text: String!
  author: String!
  votes: Int
}

input CommentScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  author: String

  """All values that are not equal to given value."""
  author_not: String

  """All values that are contained in given list."""
  author_in: [String!]

  """All values that are not contained in given list."""
  author_not_in: [String!]

  """All values less than the given value."""
  author_lt: String

  """All values less than or equal the given value."""
  author_lte: String

  """All values greater than the given value."""
  author_gt: String

  """All values greater than or equal the given value."""
  author_gte: String

  """All values containing the given string."""
  author_contains: String

  """All values not containing the given string."""
  author_not_contains: String

  """All values starting with the given string."""
  author_starts_with: String

  """All values not starting with the given string."""
  author_not_starts_with: String

  """All values ending with the given string."""
  author_ends_with: String

  """All values not ending with the given string."""
  author_not_ends_with: String
  votes: Int

  """All values that are not equal to given value."""
  votes_not: Int

  """All values that are contained in given list."""
  votes_in: [Int!]

  """All values that are not contained in given list."""
  votes_not_in: [Int!]

  """All values less than the given value."""
  votes_lt: Int

  """All values less than or equal the given value."""
  votes_lte: Int

  """All values greater than the given value."""
  votes_gt: Int

  """All values greater than or equal the given value."""
  votes_gte: Int
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
}

input CommentUpdateInput {
  text: String
  author: String
  votes: Int
  post: PostUpdateOneRequiredWithoutCommentsInput
}

input CommentUpdateManyDataInput {
  text: String
  author: String
  votes: Int
}

input CommentUpdateManyMutationInput {
  text: String
  author: String
  votes: Int
}

input CommentUpdateManyWithoutPostInput {
  create: [CommentCreateWithoutPostInput!]
  connect: [CommentWhereUniqueInput!]
  set: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  delete: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutPostInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
  deleteMany: [CommentScalarWhereInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutPostInput!]
}

input CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput!
  data: CommentUpdateManyDataInput!
}

input CommentUpdateWithoutPostDataInput {
  text: String
  author: String
  votes: Int
}

input CommentUpdateWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutPostDataInput!
}

input CommentUpsertWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutPostDataInput!
  create: CommentCreateWithoutPostInput!
}

input CommentWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  author: String

  """All values that are not equal to given value."""
  author_not: String

  """All values that are contained in given list."""
  author_in: [String!]

  """All values that are not contained in given list."""
  author_not_in: [String!]

  """All values less than the given value."""
  author_lt: String

  """All values less than or equal the given value."""
  author_lte: String

  """All values greater than the given value."""
  author_gt: String

  """All values greater than or equal the given value."""
  author_gte: String

  """All values containing the given string."""
  author_contains: String

  """All values not containing the given string."""
  author_not_contains: String

  """All values starting with the given string."""
  author_starts_with: String

  """All values not starting with the given string."""
  author_not_starts_with: String

  """All values ending with the given string."""
  author_ends_with: String

  """All values not ending with the given string."""
  author_not_ends_with: String
  votes: Int

  """All values that are not equal to given value."""
  votes_not: Int

  """All values that are contained in given list."""
  votes_in: [Int!]

  """All values that are not contained in given list."""
  votes_not_in: [Int!]

  """All values less than the given value."""
  votes_lt: Int

  """All values less than or equal the given value."""
  votes_lte: Int

  """All values greater than the given value."""
  votes_gt: Int

  """All values greater than or equal the given value."""
  votes_gte: Int
  post: PostWhereInput
}

input CommentWhereUniqueInput {
  id: ID
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createPost(data: PostCreateInput!): Post!
  createComment(data: CommentCreateInput!): Comment!
  createVote(data: VoteCreateInput!): Vote!
  createChat(data: ChatCreateInput!): Chat!
  createUser(data: UserCreateInput!): User!
  createS3Object(data: S3ObjectCreateInput!): S3Object!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateVote(data: VoteUpdateInput!, where: VoteWhereUniqueInput!): Vote
  updateChat(data: ChatUpdateInput!, where: ChatWhereUniqueInput!): Chat
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateS3Object(data: S3ObjectUpdateInput!, where: S3ObjectWhereUniqueInput!): S3Object
  deletePost(where: PostWhereUniqueInput!): Post
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteVote(where: VoteWhereUniqueInput!): Vote
  deleteChat(where: ChatWhereUniqueInput!): Chat
  deleteUser(where: UserWhereUniqueInput!): User
  deleteS3Object(where: S3ObjectWhereUniqueInput!): S3Object
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  upsertVote(where: VoteWhereUniqueInput!, create: VoteCreateInput!, update: VoteUpdateInput!): Vote!
  upsertChat(where: ChatWhereUniqueInput!, create: ChatCreateInput!, update: ChatUpdateInput!): Chat!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertS3Object(where: S3ObjectWhereUniqueInput!, create: S3ObjectCreateInput!, update: S3ObjectUpdateInput!): S3Object!
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  updateManyVotes(data: VoteUpdateManyMutationInput!, where: VoteWhereInput): BatchPayload!
  updateManyChats(data: ChatUpdateManyMutationInput!, where: ChatWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyS3Objects(data: S3ObjectUpdateManyMutationInput!, where: S3ObjectWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  deleteManyVotes(where: VoteWhereInput): BatchPayload!
  deleteManyChats(where: ChatWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyS3Objects(where: S3ObjectWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Post implements Node {
  id: ID!
  isPublished: Boolean!
  title: String!
  text: String!
  nameFile: String!
  author: User
  postContent: String
  postImage: S3Object
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  votes: Int
}

"""A connection to a list of items."""
type PostConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  id: ID
  isPublished: Boolean
  title: String!
  text: String!
  nameFile: String!
  postContent: String
  votes: Int
  author: UserCreateOneWithoutPostsInput
  postImage: S3ObjectCreateOneInput
  comments: CommentCreateManyWithoutPostInput
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateOneWithoutCommentsInput {
  create: PostCreateWithoutCommentsInput
  connect: PostWhereUniqueInput
}

input PostCreateWithoutAuthorInput {
  id: ID
  isPublished: Boolean
  title: String!
  text: String!
  nameFile: String!
  postContent: String
  votes: Int
  postImage: S3ObjectCreateOneInput
  comments: CommentCreateManyWithoutPostInput
}

input PostCreateWithoutCommentsInput {
  id: ID
  isPublished: Boolean
  title: String!
  text: String!
  nameFile: String!
  postContent: String
  votes: Int
  author: UserCreateOneWithoutPostsInput
  postImage: S3ObjectCreateOneInput
}

"""An edge in a connection."""
type PostEdge {
  """The item at the end of the edge."""
  node: Post!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  isPublished_ASC
  isPublished_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
  nameFile_ASC
  nameFile_DESC
  postContent_ASC
  postContent_DESC
  votes_ASC
  votes_DESC
}

type PostPreviousValues {
  id: ID!
  isPublished: Boolean!
  title: String!
  text: String!
  nameFile: String!
  postContent: String
  votes: Int
}

input PostScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [PostScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  isPublished: Boolean

  """All values that are not equal to given value."""
  isPublished_not: Boolean
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  nameFile: String

  """All values that are not equal to given value."""
  nameFile_not: String

  """All values that are contained in given list."""
  nameFile_in: [String!]

  """All values that are not contained in given list."""
  nameFile_not_in: [String!]

  """All values less than the given value."""
  nameFile_lt: String

  """All values less than or equal the given value."""
  nameFile_lte: String

  """All values greater than the given value."""
  nameFile_gt: String

  """All values greater than or equal the given value."""
  nameFile_gte: String

  """All values containing the given string."""
  nameFile_contains: String

  """All values not containing the given string."""
  nameFile_not_contains: String

  """All values starting with the given string."""
  nameFile_starts_with: String

  """All values not starting with the given string."""
  nameFile_not_starts_with: String

  """All values ending with the given string."""
  nameFile_ends_with: String

  """All values not ending with the given string."""
  nameFile_not_ends_with: String
  postContent: String

  """All values that are not equal to given value."""
  postContent_not: String

  """All values that are contained in given list."""
  postContent_in: [String!]

  """All values that are not contained in given list."""
  postContent_not_in: [String!]

  """All values less than the given value."""
  postContent_lt: String

  """All values less than or equal the given value."""
  postContent_lte: String

  """All values greater than the given value."""
  postContent_gt: String

  """All values greater than or equal the given value."""
  postContent_gte: String

  """All values containing the given string."""
  postContent_contains: String

  """All values not containing the given string."""
  postContent_not_contains: String

  """All values starting with the given string."""
  postContent_starts_with: String

  """All values not starting with the given string."""
  postContent_not_starts_with: String

  """All values ending with the given string."""
  postContent_ends_with: String

  """All values not ending with the given string."""
  postContent_not_ends_with: String
  votes: Int

  """All values that are not equal to given value."""
  votes_not: Int

  """All values that are contained in given list."""
  votes_in: [Int!]

  """All values that are not contained in given list."""
  votes_not_in: [Int!]

  """All values less than the given value."""
  votes_lt: Int

  """All values less than or equal the given value."""
  votes_lte: Int

  """All values greater than the given value."""
  votes_gt: Int

  """All values greater than or equal the given value."""
  votes_gte: Int
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostWhereInput
}

input PostUpdateInput {
  isPublished: Boolean
  title: String
  text: String
  nameFile: String
  postContent: String
  votes: Int
  author: UserUpdateOneWithoutPostsInput
  postImage: S3ObjectUpdateOneInput
  comments: CommentUpdateManyWithoutPostInput
}

input PostUpdateManyDataInput {
  isPublished: Boolean
  title: String
  text: String
  nameFile: String
  postContent: String
  votes: Int
}

input PostUpdateManyMutationInput {
  isPublished: Boolean
  title: String
  text: String
  nameFile: String
  postContent: String
  votes: Int
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  delete: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
  deleteMany: [PostScalarWhereInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateOneRequiredWithoutCommentsInput {
  create: PostCreateWithoutCommentsInput
  connect: PostWhereUniqueInput
  update: PostUpdateWithoutCommentsDataInput
  upsert: PostUpsertWithoutCommentsInput
}

input PostUpdateWithoutAuthorDataInput {
  isPublished: Boolean
  title: String
  text: String
  nameFile: String
  postContent: String
  votes: Int
  postImage: S3ObjectUpdateOneInput
  comments: CommentUpdateManyWithoutPostInput
}

input PostUpdateWithoutCommentsDataInput {
  isPublished: Boolean
  title: String
  text: String
  nameFile: String
  postContent: String
  votes: Int
  author: UserUpdateOneWithoutPostsInput
  postImage: S3ObjectUpdateOneInput
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithoutCommentsInput {
  update: PostUpdateWithoutCommentsDataInput!
  create: PostCreateWithoutCommentsInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  """Logical AND on all given filters."""
  AND: [PostWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  isPublished: Boolean

  """All values that are not equal to given value."""
  isPublished_not: Boolean
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  nameFile: String

  """All values that are not equal to given value."""
  nameFile_not: String

  """All values that are contained in given list."""
  nameFile_in: [String!]

  """All values that are not contained in given list."""
  nameFile_not_in: [String!]

  """All values less than the given value."""
  nameFile_lt: String

  """All values less than or equal the given value."""
  nameFile_lte: String

  """All values greater than the given value."""
  nameFile_gt: String

  """All values greater than or equal the given value."""
  nameFile_gte: String

  """All values containing the given string."""
  nameFile_contains: String

  """All values not containing the given string."""
  nameFile_not_contains: String

  """All values starting with the given string."""
  nameFile_starts_with: String

  """All values not starting with the given string."""
  nameFile_not_starts_with: String

  """All values ending with the given string."""
  nameFile_ends_with: String

  """All values not ending with the given string."""
  nameFile_not_ends_with: String
  postContent: String

  """All values that are not equal to given value."""
  postContent_not: String

  """All values that are contained in given list."""
  postContent_in: [String!]

  """All values that are not contained in given list."""
  postContent_not_in: [String!]

  """All values less than the given value."""
  postContent_lt: String

  """All values less than or equal the given value."""
  postContent_lte: String

  """All values greater than the given value."""
  postContent_gt: String

  """All values greater than or equal the given value."""
  postContent_gte: String

  """All values containing the given string."""
  postContent_contains: String

  """All values not containing the given string."""
  postContent_not_contains: String

  """All values starting with the given string."""
  postContent_starts_with: String

  """All values not starting with the given string."""
  postContent_not_starts_with: String

  """All values ending with the given string."""
  postContent_ends_with: String

  """All values not ending with the given string."""
  postContent_not_ends_with: String
  votes: Int

  """All values that are not equal to given value."""
  votes_not: Int

  """All values that are contained in given list."""
  votes_in: [Int!]

  """All values that are not contained in given list."""
  votes_not_in: [Int!]

  """All values less than the given value."""
  votes_lt: Int

  """All values less than or equal the given value."""
  votes_lte: Int

  """All values greater than the given value."""
  votes_gt: Int

  """All values greater than or equal the given value."""
  votes_gte: Int
  author: UserWhereInput
  postImage: S3ObjectWhereInput
  comments_some: CommentWhereInput
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote]!
  chats(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chat]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  s3Objects(where: S3ObjectWhereInput, orderBy: S3ObjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [S3Object]!
  post(where: PostWhereUniqueInput!): Post
  comment(where: CommentWhereUniqueInput!): Comment
  vote(where: VoteWhereUniqueInput!): Vote
  chat(where: ChatWhereUniqueInput!): Chat
  user(where: UserWhereUniqueInput!): User
  s3Object(where: S3ObjectWhereUniqueInput!): S3Object
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  votesConnection(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VoteConnection!
  chatsConnection(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChatConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  s3ObjectsConnection(where: S3ObjectWhereInput, orderBy: S3ObjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): S3ObjectConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

enum Role {
  ADMIN
  CUSTOMER
}

type S3Object implements Node {
  id: ID!
  bucket: String!
  region: String!
  key: String!
}

"""A connection to a list of items."""
type S3ObjectConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [S3ObjectEdge]!
  aggregate: AggregateS3Object!
}

input S3ObjectCreateInput {
  id: ID
  bucket: String!
  region: String!
  key: String!
}

input S3ObjectCreateOneInput {
  create: S3ObjectCreateInput
  connect: S3ObjectWhereUniqueInput
}

"""An edge in a connection."""
type S3ObjectEdge {
  """The item at the end of the edge."""
  node: S3Object!

  """A cursor for use in pagination."""
  cursor: String!
}

enum S3ObjectOrderByInput {
  id_ASC
  id_DESC
  bucket_ASC
  bucket_DESC
  region_ASC
  region_DESC
  key_ASC
  key_DESC
}

type S3ObjectPreviousValues {
  id: ID!
  bucket: String!
  region: String!
  key: String!
}

type S3ObjectSubscriptionPayload {
  mutation: MutationType!
  node: S3Object
  updatedFields: [String!]
  previousValues: S3ObjectPreviousValues
}

input S3ObjectSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [S3ObjectSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: S3ObjectWhereInput
}

input S3ObjectUpdateDataInput {
  bucket: String
  region: String
  key: String
}

input S3ObjectUpdateInput {
  bucket: String
  region: String
  key: String
}

input S3ObjectUpdateManyMutationInput {
  bucket: String
  region: String
  key: String
}

input S3ObjectUpdateOneInput {
  create: S3ObjectCreateInput
  connect: S3ObjectWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: S3ObjectUpdateDataInput
  upsert: S3ObjectUpsertNestedInput
}

input S3ObjectUpsertNestedInput {
  update: S3ObjectUpdateDataInput!
  create: S3ObjectCreateInput!
}

input S3ObjectWhereInput {
  """Logical AND on all given filters."""
  AND: [S3ObjectWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  bucket: String

  """All values that are not equal to given value."""
  bucket_not: String

  """All values that are contained in given list."""
  bucket_in: [String!]

  """All values that are not contained in given list."""
  bucket_not_in: [String!]

  """All values less than the given value."""
  bucket_lt: String

  """All values less than or equal the given value."""
  bucket_lte: String

  """All values greater than the given value."""
  bucket_gt: String

  """All values greater than or equal the given value."""
  bucket_gte: String

  """All values containing the given string."""
  bucket_contains: String

  """All values not containing the given string."""
  bucket_not_contains: String

  """All values starting with the given string."""
  bucket_starts_with: String

  """All values not starting with the given string."""
  bucket_not_starts_with: String

  """All values ending with the given string."""
  bucket_ends_with: String

  """All values not ending with the given string."""
  bucket_not_ends_with: String
  region: String

  """All values that are not equal to given value."""
  region_not: String

  """All values that are contained in given list."""
  region_in: [String!]

  """All values that are not contained in given list."""
  region_not_in: [String!]

  """All values less than the given value."""
  region_lt: String

  """All values less than or equal the given value."""
  region_lte: String

  """All values greater than the given value."""
  region_gt: String

  """All values greater than or equal the given value."""
  region_gte: String

  """All values containing the given string."""
  region_contains: String

  """All values not containing the given string."""
  region_not_contains: String

  """All values starting with the given string."""
  region_starts_with: String

  """All values not starting with the given string."""
  region_not_starts_with: String

  """All values ending with the given string."""
  region_ends_with: String

  """All values not ending with the given string."""
  region_not_ends_with: String
  key: String

  """All values that are not equal to given value."""
  key_not: String

  """All values that are contained in given list."""
  key_in: [String!]

  """All values that are not contained in given list."""
  key_not_in: [String!]

  """All values less than the given value."""
  key_lt: String

  """All values less than or equal the given value."""
  key_lte: String

  """All values greater than the given value."""
  key_gt: String

  """All values greater than or equal the given value."""
  key_gte: String

  """All values containing the given string."""
  key_contains: String

  """All values not containing the given string."""
  key_not_contains: String

  """All values starting with the given string."""
  key_starts_with: String

  """All values not starting with the given string."""
  key_not_starts_with: String

  """All values ending with the given string."""
  key_ends_with: String

  """All values not ending with the given string."""
  key_not_ends_with: String
}

input S3ObjectWhereUniqueInput {
  id: ID
}

type Subscription {
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  vote(where: VoteSubscriptionWhereInput): VoteSubscriptionPayload
  chat(where: ChatSubscriptionWhereInput): ChatSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  s3Object(where: S3ObjectSubscriptionWhereInput): S3ObjectSubscriptionPayload
}

type User implements Node {
  id: ID!
  email: String!
  emailvalidated: Boolean!
  validateEmailToken: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  password: String!
  nameFile: String!
  resetPasswordToken: String!
  resetPasswordExpires: Float
  name: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  role: Role!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  emailvalidated: Boolean
  validateEmailToken: String!
  password: String!
  nameFile: String!
  resetPasswordToken: String!
  resetPasswordExpires: Float
  name: String!
  role: Role
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutPostsInput {
  id: ID
  email: String!
  emailvalidated: Boolean
  validateEmailToken: String!
  password: String!
  nameFile: String!
  resetPasswordToken: String!
  resetPasswordExpires: Float
  name: String!
  role: Role
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  emailvalidated_ASC
  emailvalidated_DESC
  validateEmailToken_ASC
  validateEmailToken_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  password_ASC
  password_DESC
  nameFile_ASC
  nameFile_DESC
  resetPasswordToken_ASC
  resetPasswordToken_DESC
  resetPasswordExpires_ASC
  resetPasswordExpires_DESC
  name_ASC
  name_DESC
  role_ASC
  role_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  emailvalidated: Boolean!
  validateEmailToken: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  password: String!
  nameFile: String!
  resetPasswordToken: String!
  resetPasswordExpires: Float
  name: String!
  role: Role!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  email: String
  emailvalidated: Boolean
  validateEmailToken: String
  password: String
  nameFile: String
  resetPasswordToken: String
  resetPasswordExpires: Float
  name: String
  role: Role
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateInput {
  email: String
  emailvalidated: Boolean
  validateEmailToken: String
  password: String
  nameFile: String
  resetPasswordToken: String
  resetPasswordExpires: Float
  name: String
  role: Role
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  email: String
  emailvalidated: Boolean
  validateEmailToken: String
  password: String
  nameFile: String
  resetPasswordToken: String
  resetPasswordExpires: Float
  name: String
  role: Role
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
}

input UserUpdateWithoutPostsDataInput {
  email: String
  emailvalidated: Boolean
  validateEmailToken: String
  password: String
  nameFile: String
  resetPasswordToken: String
  resetPasswordExpires: Float
  name: String
  role: Role
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  emailvalidated: Boolean

  """All values that are not equal to given value."""
  emailvalidated_not: Boolean
  validateEmailToken: String

  """All values that are not equal to given value."""
  validateEmailToken_not: String

  """All values that are contained in given list."""
  validateEmailToken_in: [String!]

  """All values that are not contained in given list."""
  validateEmailToken_not_in: [String!]

  """All values less than the given value."""
  validateEmailToken_lt: String

  """All values less than or equal the given value."""
  validateEmailToken_lte: String

  """All values greater than the given value."""
  validateEmailToken_gt: String

  """All values greater than or equal the given value."""
  validateEmailToken_gte: String

  """All values containing the given string."""
  validateEmailToken_contains: String

  """All values not containing the given string."""
  validateEmailToken_not_contains: String

  """All values starting with the given string."""
  validateEmailToken_starts_with: String

  """All values not starting with the given string."""
  validateEmailToken_not_starts_with: String

  """All values ending with the given string."""
  validateEmailToken_ends_with: String

  """All values not ending with the given string."""
  validateEmailToken_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  nameFile: String

  """All values that are not equal to given value."""
  nameFile_not: String

  """All values that are contained in given list."""
  nameFile_in: [String!]

  """All values that are not contained in given list."""
  nameFile_not_in: [String!]

  """All values less than the given value."""
  nameFile_lt: String

  """All values less than or equal the given value."""
  nameFile_lte: String

  """All values greater than the given value."""
  nameFile_gt: String

  """All values greater than or equal the given value."""
  nameFile_gte: String

  """All values containing the given string."""
  nameFile_contains: String

  """All values not containing the given string."""
  nameFile_not_contains: String

  """All values starting with the given string."""
  nameFile_starts_with: String

  """All values not starting with the given string."""
  nameFile_not_starts_with: String

  """All values ending with the given string."""
  nameFile_ends_with: String

  """All values not ending with the given string."""
  nameFile_not_ends_with: String
  resetPasswordToken: String

  """All values that are not equal to given value."""
  resetPasswordToken_not: String

  """All values that are contained in given list."""
  resetPasswordToken_in: [String!]

  """All values that are not contained in given list."""
  resetPasswordToken_not_in: [String!]

  """All values less than the given value."""
  resetPasswordToken_lt: String

  """All values less than or equal the given value."""
  resetPasswordToken_lte: String

  """All values greater than the given value."""
  resetPasswordToken_gt: String

  """All values greater than or equal the given value."""
  resetPasswordToken_gte: String

  """All values containing the given string."""
  resetPasswordToken_contains: String

  """All values not containing the given string."""
  resetPasswordToken_not_contains: String

  """All values starting with the given string."""
  resetPasswordToken_starts_with: String

  """All values not starting with the given string."""
  resetPasswordToken_not_starts_with: String

  """All values ending with the given string."""
  resetPasswordToken_ends_with: String

  """All values not ending with the given string."""
  resetPasswordToken_not_ends_with: String
  resetPasswordExpires: Float

  """All values that are not equal to given value."""
  resetPasswordExpires_not: Float

  """All values that are contained in given list."""
  resetPasswordExpires_in: [Float!]

  """All values that are not contained in given list."""
  resetPasswordExpires_not_in: [Float!]

  """All values less than the given value."""
  resetPasswordExpires_lt: Float

  """All values less than or equal the given value."""
  resetPasswordExpires_lte: Float

  """All values greater than the given value."""
  resetPasswordExpires_gt: Float

  """All values greater than or equal the given value."""
  resetPasswordExpires_gte: Float
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  role: Role

  """All values that are not equal to given value."""
  role_not: Role

  """All values that are contained in given list."""
  role_in: [Role!]

  """All values that are not contained in given list."""
  role_not_in: [Role!]
  posts_some: PostWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
  validateEmailToken: String
  resetPasswordToken: String
}

type Vote implements Node {
  id: ID!
  postId: ID!
  createdBy: ID!
  createdAt: DateTime!
  vote: VoteType
}

"""A connection to a list of items."""
type VoteConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [VoteEdge]!
  aggregate: AggregateVote!
}

input VoteCreateInput {
  id: ID
  postId: ID
  createdBy: ID
  vote: VoteType
}

"""An edge in a connection."""
type VoteEdge {
  """The item at the end of the edge."""
  node: Vote!

  """A cursor for use in pagination."""
  cursor: String!
}

enum VoteOrderByInput {
  id_ASC
  id_DESC
  postId_ASC
  postId_DESC
  createdBy_ASC
  createdBy_DESC
  createdAt_ASC
  createdAt_DESC
  vote_ASC
  vote_DESC
}

type VotePreviousValues {
  id: ID!
  postId: ID!
  createdBy: ID!
  createdAt: DateTime!
  vote: VoteType
}

type VoteSubscriptionPayload {
  mutation: MutationType!
  node: Vote
  updatedFields: [String!]
  previousValues: VotePreviousValues
}

input VoteSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [VoteSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: VoteWhereInput
}

enum VoteType {
  UP
  DOWN
}

input VoteUpdateInput {
  vote: VoteType
}

input VoteUpdateManyMutationInput {
  vote: VoteType
}

input VoteWhereInput {
  """Logical AND on all given filters."""
  AND: [VoteWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  postId: ID

  """All values that are not equal to given value."""
  postId_not: ID

  """All values that are contained in given list."""
  postId_in: [ID!]

  """All values that are not contained in given list."""
  postId_not_in: [ID!]

  """All values less than the given value."""
  postId_lt: ID

  """All values less than or equal the given value."""
  postId_lte: ID

  """All values greater than the given value."""
  postId_gt: ID

  """All values greater than or equal the given value."""
  postId_gte: ID

  """All values containing the given string."""
  postId_contains: ID

  """All values not containing the given string."""
  postId_not_contains: ID

  """All values starting with the given string."""
  postId_starts_with: ID

  """All values not starting with the given string."""
  postId_not_starts_with: ID

  """All values ending with the given string."""
  postId_ends_with: ID

  """All values not ending with the given string."""
  postId_not_ends_with: ID
  createdBy: ID

  """All values that are not equal to given value."""
  createdBy_not: ID

  """All values that are contained in given list."""
  createdBy_in: [ID!]

  """All values that are not contained in given list."""
  createdBy_not_in: [ID!]

  """All values less than the given value."""
  createdBy_lt: ID

  """All values less than or equal the given value."""
  createdBy_lte: ID

  """All values greater than the given value."""
  createdBy_gt: ID

  """All values greater than or equal the given value."""
  createdBy_gte: ID

  """All values containing the given string."""
  createdBy_contains: ID

  """All values not containing the given string."""
  createdBy_not_contains: ID

  """All values starting with the given string."""
  createdBy_starts_with: ID

  """All values not starting with the given string."""
  createdBy_not_starts_with: ID

  """All values ending with the given string."""
  createdBy_ends_with: ID

  """All values not ending with the given string."""
  createdBy_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  vote: VoteType

  """All values that are not equal to given value."""
  vote_not: VoteType

  """All values that are contained in given list."""
  vote_in: [VoteType!]

  """All values that are not contained in given list."""
  vote_not_in: [VoteType!]
}

input VoteWhereUniqueInput {
  id: ID
  postId: ID
  createdBy: ID
}
`

const Prisma = makePrismaBindingClass({ typeDefs })
module.exports = { Prisma }
