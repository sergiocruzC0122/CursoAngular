import { NgClass } from '@angular/common';
import { Component, signal,computed } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.component.html',
  // imports: [NgClass],
})

export class DragonballPageComponent {

  name = signal('Gohan');
  power= signal(100);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001},
    { id: 2, name: 'Vegeta', power: 8000},
    { id: 3, name: 'Picoro', power: 3000},
    { id: 4, name: 'Yamcha', power: 500},
  ]);

  addCharacter(){
    console.log(this.name(), this.power());
  };


  // powerClasses = computed(() =>{
  //   return{
  //     'text-danger':true,
  //   };
  // });

}
