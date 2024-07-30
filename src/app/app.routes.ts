import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

export const routes: Routes = [
    {
        path: '',component: HomeComponent,
    },
    {
        path: 'Profile',component: ProfileComponent
    },
    {
        path: 'game',component: ColorGameComponent
    },
    {
        path: 'Movies',component: MovieListComponent
    },
    {
        path: 'Movies/:id',component: MovieDetailsComponent
    },
    {
        path: 'Movies/add',component: AddmovieComponent
    },
    {
        path: '**',component: PageNotFoundComponent
    }
];
