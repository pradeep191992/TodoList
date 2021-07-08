import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { formModal } from '../feature/create-todo/modal/form-modal';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  formData = new formModal();
  arrayItem = [];
  public myObj = {};
  formValid = false;
  ticketLink = 'https://builderhomesite.atlassian.net/browse/';
  ticketSlowgun = 'HL-';
  projects = ['HL', 'DREES', 'BROOKFIELD', 'PRO8', 'EX2PWPK', 'BHIDUDA', 'EX2PWEBAP', 'BDXDW'];

  currentData = new Date();

  newDate = this.currentData.getDate() + '-'
    + (this.currentData.getMonth() + 1)  + '-'
    + this.currentData.getFullYear() ;

  constructor() { }

  // tslint:disable-next-line:typedef
  checkProject(event){
    const val = event.target.value;
    this.projects.forEach(data => {
      if (val === data) {
        this.ticketSlowgun = val + '-';
        console.log(this.ticketSlowgun);
      }
    });
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
    const item1 = this.formData?.firstField;
    const item2 = this.formData?.secondField ? this.formData?.secondField : 'To Do';
    const item3 = this.formData?.thirdField ? this.formData?.thirdField : '4';
    const item4 = this.formData?.date;
    this.myObj = {name: this.ticketSlowgun + item1, desc: item2, other: item3,
     dueDate: item4, className: '', addDate: this.newDate,
     completeDate: '', remark: 'add your comments', baseUrl: this.ticketLink};

    if (localStorage.getItem('itemJson') == null){
      this.arrayItem.push(this.myObj);
      localStorage.setItem('itemJson', JSON.stringify(this.arrayItem));
    }
    else {
      this.arrayItem = JSON.parse(localStorage.getItem('itemJson'));
      if (item1 !== '' && item1 !== undefined) {
        this.formValid = false;
        this.arrayItem.unshift(this.myObj);
      }
      else{
        console.log('please enter values');
        this.formValid = true;
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
    if (this.arrayItem[i].className === 'task-complete') {
      this.arrayItem[i].className = 'task-pending';
      this.arrayItem[i].desc = 'Pending';
      this.arrayItem[i].other = 4;
      this.arrayItem[i].completeDate = '';
    } else {
      this.arrayItem[i].className = 'task-complete';
      this.arrayItem[i].desc = 'Done';
      this.arrayItem[i].completeDate = this.newDate;
      this.arrayItem[i].other = 0;
    }
    localStorage.setItem('itemJson', JSON.stringify(this.arrayItem));
    this.getData();
  }

  // tslint:disable-next-line:typedef
  remarkUpdate(i, event) {
    const remark = event.target.innerText;
    this.arrayItem = JSON.parse(localStorage.getItem('itemJson'));
    this.arrayItem[i].remark = remark;
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

