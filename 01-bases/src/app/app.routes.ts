import { heroPageComponent } from './pages/hero/hero-page.component';
import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';


export const routes: Routes = [

    {
        path: '',
        component: heroPageComponent
    }
];
