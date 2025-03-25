import { ChangeDetectionStrategy, Component, signal } from '@angular/core';



@Component({
    templateUrl: './hero-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class heroPageComponent {

    nameSignal = signal ('Ironman');
    ageSignal = signal (45);

    getHeroDescription(){
        return `${this.nameSignal() } - ${ this.ageSignal() }`;
    }

    heroDescriptionUpperCase(){
        return `${ this.nameSignal().toUpperCase() } - ${ this.ageSignal() }`;
    }


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