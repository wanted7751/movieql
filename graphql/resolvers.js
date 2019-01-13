const sex ={
    a:"b"
}
const nicolas = {
    name:"nicolas",
    age:18,
    gender:sex
}

const resolvers= {
    Query:{
        person: () => nicolas
    }
}

export default resolvers;