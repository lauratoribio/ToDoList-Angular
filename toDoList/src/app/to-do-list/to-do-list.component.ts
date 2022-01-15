import { taskModel } from './../models/task.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  public taskList: taskModel[] = [];
  public taskName: string = '';

  constructor() { }

  ngOnInit(): void {

  }


  addTask(taskName: string): void {

    const task: taskModel = {
      name: this.taskName,
      isDone: false
    }
    this.taskList.push(task);
    //Para limpiar el input despues de crear una tarea
    this.taskName = "";

  }

  taskDone(task: taskModel): void {
    task.isDone = true;
  }

  deleteTask(indice: number): void {
    //creamos una alerta de si el usuario quiere eliminarla de verdad
    const alert = confirm("¿Seguro que quiere eliminar la tarea?")
    if (!confirm) {
      return
    }
    //Eliminamos la tarea
    this.taskList.splice(indice, 1)

  }

}
