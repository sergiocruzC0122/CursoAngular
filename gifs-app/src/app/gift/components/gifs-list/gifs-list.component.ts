import { Component, input } from '@angular/core';
import { ListItemComponent } from "./list-item/list-item.component";


interface gifsOption {
  url: string;
}

@Component({
  selector: 'app-gifs-list',
  imports: [ListItemComponent],
  templateUrl: './gifs-list.component.html',
})
export class GifsListComponent { 
  gifs = input.required<string[]>();
}
