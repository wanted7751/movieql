

export const people = [
    {
        id: 1,
        name: "nicolas",
        age: 24,
        gender: "femail"
    },
    {
        id: 1,
        name:"minho",
        age: 25,
        gender: "femail"
    },
    {
        id: 3,
        name: "dayoung",
        age: 26,
        gender: "femail"
    },
    {
        id: 4,
        name: "seunghye",
        age: 27,
        gender: "femail"
    },
    {
        id: 5,
        name: "jungyoon",
        age: 28,
        gender: "femail"
    },
    {
        id: 6,
        name: "yoonjung",
        age: 29,
        gender: "femail"
    }

];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id)
        return filteredPeople;
   // 새로운 배열을 생성하는 함수라고 해서 map처럼 filter는 걸러주는 역할을 하는건가 새로운 배열을 생성해서????
   // 즉 내가 이해하기론 people이라는 함수를 filter를 해서 요소들이 같은 person이라는 새로운 함수를만들어서 그중에 person.name
   // 은 args으로 주는 name을 person.name과 같은 함수를 반환하여 filterPeople에 넣는것. 
}