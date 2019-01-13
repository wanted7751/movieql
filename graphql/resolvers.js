import {people, getById} from "./db";



const resolvers ={
    Query:{
        people: () => people,
        person:(_,{id}) => getById(id)
        
    }
}
// 먼저 graphql은 person의 정의와 타입을 볼것이고


export default resolvers;