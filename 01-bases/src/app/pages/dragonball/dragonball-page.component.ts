import { Component, signal} from '@angular/core';

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
    { id: 4, name: 'Yamcha', power: 500},
    { id: 3, name: 'Picoro', power: 3000},
  ]);

  addCharacter(){
    if(!this.name() || !this.power() || this.power() <= 0){
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length +1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((list) => [... list, newCharacter]);
    this.resetFields();

  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }


}
