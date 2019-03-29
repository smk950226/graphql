const people = [
    {
        name: "KimSeungMin",
        age: 25,
        gender: "male"
    },
    {
        name: "John",
        age: 20,
        gender: "male"
    },
    {
        name: "Harry",
        age: 35,
        gender: "female"
    },
    {
        name: "Natasah",
        age: 25,
        gender: "female"
    },
    {
        name: "Mellow",
        age: 15,
        gender: "male"
    },
    {
        name: "Bong",
        age: 25,
        gender: "male"
    }
]

const resolvers = {
    Query: {
        people: () => people,
        person: () => smkim
    }
}

export default resolvers;