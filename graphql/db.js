let movies = [
    {
        id: 0,
        name: "Star Wars - The new one",
        score: 1
    },
    {
        id: 1,
        name: "Avengers - The new one",
        score: 8
    },
    {
        id: 2,
        name: "The Godfather I",
        score: 99
    },
    {
        id: 3,
        name: "Logan",
        score: 2
    }
];

export const getMovies = () => movies

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id)
        return filteredPeople[0];
   // 새로운 배열을 생성하는 함수라고 해서 map처럼 filter는 걸러주는 역할을 하는건가 새로운 배열을 생성해서????
   // 즉 내가 이해하기론 people이라는 함수를 filter를 해서 요소들이 같은 person이라는 새로운 함수를만들어서 그중에 person.name
   // 은 args으로 주는 name을 person.name과 같은 함수를 반환하여 filterPeople에 넣는것. 
}

export const deleteMovie = (id) =>{
    const cleanMovies = movies.filter(movie => movie.id !== id)
    if (movies.length > cleanMovies.length){
        movies = cleanMovies;
        return true;
    }else{
        return false;
    }
};


export const addMovie = (name, score) => {
    const newMovie ={
        id: parseInt(`${movies.length + 1}`),
        name,
        score
    }
    movies.push(newMovie);
    return newMovie;
    //여기서 스키마는 반환형식이 Movie! 이런형식을 
    //반환하면 결국 addMovie도 같은 형식을 return 해야한다 .
}
