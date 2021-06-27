import { Component, OnInit } from '@angular/core';
import { formModal } from './modal/form-modal';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  formData = new formModal();
  arrayItem = [];
  public myObj = {};
  constructor() { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    if (localStorage.getItem('itemJson') !== null) {
      this.arrayItem = JSON.parse(localStorage.getItem('itemJson'));
    }else{
      this.arrayItem = []
    }
  }

  checkAndSaveData(){
    const item1 = this.formData.firstField;
    const item2 = this.formData.secondField;
    const item3 = this.formData.thirdField;
    const item4 = this.formData.date;
    this.myObj = {name: "HL-"+item1, desc: item2, other: item3, dueDate: item4, className: ''};

    if(localStorage.getItem('itemJson') == null){
      this.arrayItem.push(this.myObj);
      localStorage.setItem('itemJson', JSON.stringify(this.arrayItem));
    }
    else{
      this.arrayItem = JSON.parse(localStorage.getItem('itemJson'));
      if (item1 !== '' && item2 !== '' && item3 !== '') {
        this.arrayItem.push(this.myObj);
      }
      else{
        console.log('please enter values')
      }
      localStorage.setItem('itemJson', JSON.stringify(this.arrayItem));
    }
    this.getData();
  }

  removeTask(i){
    this.arrayItem = JSON.parse(localStorage.getItem('itemJson'));
    this.arrayItem.splice(i, 1);
    localStorage.setItem('itemJson', JSON.stringify(this.arrayItem));
    this.getData();
  }

  taskComplete(i){
    this.arrayItem = JSON.parse(localStorage.getItem('itemJson'));
    if (this.arrayItem[i].className == 'task-complete') {
      this.arrayItem[i].className = 'task-pending';
      this.arrayItem[i].desc = 'Pending';
    } else {
      this.arrayItem[i].className = 'task-complete';
      this.arrayItem[i].desc = 'Done';
    }
    localStorage.setItem('itemJson', JSON.stringify(this.arrayItem));
    this.getData();
  }

  clearStorage(){
    if (confirm('Do You Want To clear All data?')) {
      localStorage.clear();
      this.getData();
    }
  }
}
