import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReadComponent} from './read/read.component';
import {CreateComponent} from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ReviewComponent } from './review/review.component';
import { AdventureComponent } from './adventure/adventure.component';



const routes: Routes = [
  {
    path: 'read',
    component: ReadComponent
  },
  {
  path: 'create',
  component: CreateComponent
  },

  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'review',
    component: ReviewComponent
    },
    {
      path: 'adventure',
      component: AdventureComponent
      },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
