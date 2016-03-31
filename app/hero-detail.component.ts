/**
 * Created by wu.hong on 2016/3/22.
 */
//import {Component, Input, OnInit} from 'angular2/core';
import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {RouteParams} from 'angular2/router';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
    //inputs: ['hero']//声明hero是一个输入口，参考template里的' <my-hero-detail [hero]="selectedHero"></my-hero-detail>'
})

export class HeroDetailComponent implements OnInit{
    //@Input() hero: Hero;//替代Component下的input: ['hero']，与template里的绑定关联，现在用route了所以不需要input
    hero: Hero;
    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams
    ){}
    ngOnInit(){
        let id = +this._routeParams.get('id');//?
        this._heroService.getHero(id)
            .then(hero => this.hero =hero);
    }
    goBack(){
        window.history.back();
    }
}