import { people } from './db';

const resolvers = {
    Query: {
        people: () => people,
        person: () => smkim
    }
}

export default resolvers;