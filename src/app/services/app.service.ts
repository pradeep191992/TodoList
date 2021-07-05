import { Injectable } from '@angular/core';
import { formModal } from '../feature/create-todo/modal/form-modal';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  formData = new formModal();
  arrayItem = [];
  public myObj = {};
  ticketLink = 'https://builderhomesite.atlassian.net/browse/';

  constructor() { }

  // tslint:disable-next-line:typedef
  checkProject(){
    console.log('Project', );
  }

  // tslint:disable-next-line:typedef
  getData() {
    if (localStorage.getItem('itemJson') !== null) {
      this.arrayItem = JSON.parse(localStorage.getItem('itemJson'));
    }else{
      this.arrayItem = []
    }
  }

  // tslint:disable-next-line:typedef
  checkAndSaveData() {
    const item1 = this.formData.firstField;
    const item2 = this.formData.secondField;
    const item3 = this.formData.thirdField;
    const item4 = this.formData.date;
    this.myObj = {name: 'HL-' + item1, desc: item2, other: item3, dueDate: item4, className: '', addDate: '', completeDate: '', remark: ''};

    if (localStorage.getItem('itemJson') == null){
      this.arrayItem.push(this.myObj);
      localStorage.setItem('itemJson', JSON.stringify(this.arrayItem));
    }
    else {
      this.arrayItem = JSON.parse(localStorage.getItem('itemJson'));
      if (item1 !== '' && item2 !== '' && item3 !== '') {
        this.arrayItem.unshift(this.myObj);
      }
      else{
        console.log('please enter values')
      }
      localStorage.setItem('itemJson', JSON.stringify(this.arrayItem));
    }
    this.getData();
  }

  // tslint:disable-next-line:typedef
  removeTask(i) {
    this.arrayItem = JSON.parse(localStorage.getItem('itemJson'));
    this.arrayItem.splice(i, 1);
    localStorage.setItem('itemJson', JSON.stringify(this.arrayItem));
    this.getData();
  }

  // tslint:disable-next-line:typedef
  taskComplete(i) {
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

  // tslint:disable-next-line:typedef
  clearStorage() {
    if (confirm('Do You Want To clear All data?')) {
      localStorage.clear();
      this.getData();
    }
  }

}

