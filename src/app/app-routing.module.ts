import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./modules/home/home.component";


const routes: Routes=[
    {
        path:'home',
        component:HomeComponent,
    },
    {

        // esto se carga de manera lazy
        path:'games',
        loadChildren: () => import('./modules/games/games.module').then(m => m.GamesModule)
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full',
      },
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}

