function postedBy(parent, args, context) {
  return context.prisma.link({ id: parent.id }).postedBy()
}

function votes(parent, args, context) {
  return context.prisma.link({ id: parent.id }).votes()
}

function createdAt(parent, args, context) {
  return context.prisma.link({id: parent.id }).createdAt()
}

module.exports = {
  postedBy,
  votes,
  createdAt
}