/**
 * Created by wu.hong on 2016/3/22.
 */
import {Injectable} from 'angular2/core';

import {Hero} from './hero';
import  {HEROES} from './mock-heroes';

@Injectable()

export class HeroService{
    getHeroes(){
        return Promise.resolve(HEROES);
    }
    getHeroesSlowly(){
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES),2000)
        );
    }
    getHero(id: number){
        return Promise.resolve(HEROES).then(
                heroes => heroes.filter(hero => hero.id ===id)[0]
                //.filter() returns a filtered array
        );
    }
}