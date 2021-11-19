import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { StudentDashBoardComponent } from './student-dash-board/student-dash-board.component';

const routes: Routes = [
  {path:'parent', component: ParentComponent},
  {path:'student', component: StudentDashBoardComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
