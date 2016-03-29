/**
 * Created by wu.hong on 2016/3/22.
 */
import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component({
    selector: 'my-hero-detail',
    template: `
      <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
      </div>
    `,
    inputs: ['hero']//声明hero是一个输入口，参考template里的' <my-hero-detail [hero]="selectedHero"></my-hero-detail>'
})

export class HeroDetailComponent{
    hero: Hero;
}