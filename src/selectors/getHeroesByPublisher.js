import { heroes } from "../data/heroes"

 export const getHeroesByPublisher = (publisher) =>{

    const validpublisher = ['DC Comics','Marvel Comics'];
    if(!validpublisher.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`);
    }

    return heroes.filter(hero => hero.publisher === publisher)



}