import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';


@Component({
    templateUrl: './hero-page.component.html',
    imports: [UpperCasePipe],
})
export class HeroPageComponent {

    nameSignal = signal ('Ironman');
    ageSignal = signal (45);

    heroDescription = computed(() =>{
        const description = `${this.nameSignal() } - ${ this.ageSignal() }`;
        return description;
    })

    capitalizedName = computed (() => this.nameSignal().toUpperCase())

    changeHeroName(){
        this.nameSignal.set('Spiderman');
        this.ageSignal.set(22);
    }

    resetForm(){
        this.nameSignal.set('Ironman');
        this.ageSignal.set(45);
    }

    changeHeroAge(){
        this.ageSignal.set(60);
    }
}