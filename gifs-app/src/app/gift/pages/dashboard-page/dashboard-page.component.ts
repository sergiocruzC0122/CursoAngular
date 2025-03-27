import { RouterOutlet } from '@angular/router';
import {Component } from '@angular/core';
import GifsSideMenuComponent  from "../../components/gifs-side-menu/gifs-side-menu.component";



@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, GifsSideMenuComponent],
  templateUrl: './dashboard-page.component.html',
})
export default class DashboardPageComponent { }
