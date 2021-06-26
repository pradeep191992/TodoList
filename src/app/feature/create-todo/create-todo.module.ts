import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTodoRoutingModule } from './create-todo-routing.module';
import { CreateTodoComponent } from './create-todo.component';


@NgModule({
  declarations: [CreateTodoComponent],
  imports: [
    CommonModule,
    CreateTodoRoutingModule,
    FormsModule
  ]
})
export class CreateTodoModule { }
