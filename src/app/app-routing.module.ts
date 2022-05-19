import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { DirectivesNgSwitchComponent } from './directives-ng-switch/directives-ng-switch.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputoutputComponent } from './inputoutput/inputoutput.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParameterpassingpracticeComponent } from './parameterpassingpractice/parameterpassingpractice.component';
import { PipeComponent } from './pipe/pipe.component';
import { PropercasePipe } from './propercase.pipe';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [ 
  { path:'',redirectTo:'/testcomponent',pathMatch:'full'},
  { path: 'testcomponent', component: TestComponent },
  { path: 'reactiveformcomponent', component: ReactiveformComponent },
  { path:'parameterpassing/:country',component:ParameterpassingpracticeComponent},
  { path:'inputoutput',component:InputoutputComponent},
  { path:'directivecomponent',component:DirectivesComponent},
  { path:'directivecomponent/ng-switch',component:DirectivesNgSwitchComponent},
  { path:'pipecomponenet',component:PipeComponent},
  { path:'custompipe',component:CustompipeComponent},
  { path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
                                  TestComponent
                                  ,ReactiveformComponent 
                                  ,PageNotFoundComponent
                                  ,ParameterpassingpracticeComponent
                                  ,InputoutputComponent
                                  ,DirectivesComponent
                                  ,DirectivesNgSwitchComponent
                                  ,PipeComponent
                                  ,PropercasePipe
                                  ,CustompipeComponent
                                  
                                ]
