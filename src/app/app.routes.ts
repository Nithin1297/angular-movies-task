import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
        path: '**',component: PageNotFoundComponent
    }
];
