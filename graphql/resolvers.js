const smkim = {
    name: "KimSeungMin",
    age: 25,
    gender: "male"
}

const resolvers = {
    Query: {
        person: () => smkim
    }
}

export default resolvers;