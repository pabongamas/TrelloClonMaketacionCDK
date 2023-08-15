import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {Dialog} from '@angular/cdk/dialog';
import {TodoDialogComponent} from './../../components/todo-dialog/todo-dialog.component';

import { toDo } from '../../models/todo.model';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `
  ]
})
export class BoardComponent implements OnInit {


  todos: toDo[] = [
    {
      id: '1',
      title: 'tarea 1'
    },
    {
      id: '2',
      title: 'Task 2'
    },
    {
      id: '3',
      title: 'Task 3'
    }
  ];

  doing: toDo[] = [
    {
      id: '3',
      title: 'Task 4'
    }
  ];

  done: toDo[] = [
    {
      id: '3',
      title: 'Task 5'
    }
  ];

  constructor(
    private dialog:Dialog
  ) { }

  ngOnInit(): void {
  }


  drop(event: CdkDragDrop<toDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

  }
  openDialog(todo:toDo){
    const dialogRef=this.dialog.open(TodoDialogComponent,{
      minWidth:'300px',
      maxWidth:'50%',
      autoFocus:false,
      data:{
        todo:todo,
      }
    });
    dialogRef.closed.subscribe(output=>{
      console.log(output);
    })
  }

}
