import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent
  },
];

export const StudentsRoutes = RouterModule.forChild(routes);
