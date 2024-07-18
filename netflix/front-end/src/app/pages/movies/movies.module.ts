// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';
// import { MatIconModule } from '@angular/material/icon';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatButtonModule } from '@angular/material/button';
// import { YouTubePlayerModule, YOUTUBE_PLAYER_CONFIG } from '@angular/youtube-player';
// import { ScrollingModule } from '@angular/cdk/scrolling';
// import { SharedModule } from '../../shared/shared.module';
// import { MoviesComponent } from './movies.component';
// import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
// import { MovielistComponent } from './components/movielist/movielist.component';
// import { MovieitemComponent } from './components/movieitem/movieitem.component';
// import { MoviedialogComponent } from './components/moviedetails/components/moviedialog/moviedialog.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: MovielistComponent,
//   },
//   {
//     path: 'details/:id',
//     component: MoviedetailsComponent,
//   },
// ];

// @NgModule({
//   declarations: [
//     MoviesComponent,
//     MoviedetailsComponent,
//     MovielistComponent,
//     MovieitemComponent,
//     MoviedialogComponent,
//   ],
//   imports: [
//     CommonModule,
//     RouterModule.forChild(routes),
//     MatDialogModule,
//     MatIconModule,
//     MatButtonModule,
//     YouTubePlayerModule,
//     ScrollingModule,
//     SharedModule,
//   ],
//   providers: [
//     {
//       provide: YOUTUBE_PLAYER_CONFIG,
//       useValue: {
//         loadApi: true,
//       },
//     },
//   ],
//   exports: [RouterModule],
// })
// export class MoviesModule { }
