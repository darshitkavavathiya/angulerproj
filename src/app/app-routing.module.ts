import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputoutputComponent } from './inputoutput/inputoutput.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParameterpassingpracticeComponent } from './parameterpassingpractice/parameterpassingpractice.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [ 
  {path:'',redirectTo:'/reactiveformcomponent',pathMatch:'full'},
  { path: 'testcomponent', component: TestComponent },
  { path: 'reactiveformcomponent', component: ReactiveformComponent },
  { path:'parameterpassing/:country',component:ParameterpassingpracticeComponent},
  {path:'inputoutput',component:InputoutputComponent},
  { path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[TestComponent,ReactiveformComponent ,PageNotFoundComponent,ParameterpassingpracticeComponent,InputoutputComponent]
