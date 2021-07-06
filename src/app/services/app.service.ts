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
  ticketSlowgun = 'HL-';
  projects = ['HomLuv', 'DREES', 'BROOKFIELD', 'PRO8', 'Kiosk', 'duda', 'WebArch'];

  currentData = new Date();

  newDate = this.currentData.getDate() + '-'
    + (this.currentData.getMonth() + 1)  + '-'
    + this.currentData.getFullYear() + '  '
    + this.currentData.getHours() + ':'
    + this.currentData.getMinutes() + ':'
    + this.currentData.getSeconds();

  constructor() { }

  // tslint:disable-next-line:typedef
  checkProject(event){
    // console.log('Project', event.target.value);
    if (event.target.value === 'HomLuv') {
      console.log('Project hl', event.target.value);
      this.ticketLink = 'https://builderhomesite.atlassian.net/browse/';
      this.ticketSlowgun = 'HL-';
    }
    else if (event.target.value === 'DREES') {
      console.log('Project dress', event.target.value);
      this.ticketLink = 'https://builderhomesite.atlassian.net/browse/';
      this.ticketSlowgun = 'DREES-';
    }
    else if (event.target.value === 'BROOKFIELD') {
      console.log('Project BROOKFIELD', event.target.value);
      this.ticketLink = 'https://builderhomesite.atlassian.net/browse/';
      this.ticketSlowgun = 'BROOKFIELD-';
    }
    else if (event.target.value === 'PRO8') {
      console.log('Project PRO8', event.target.value);
      this.ticketLink = 'https://builderhomesite.atlassian.net/browse/';
      this.ticketSlowgun = 'PRO8-';
    }
    else if (event.target.value === 'WebArch') {
      console.log('Project WebArch', event.target.value);
      this.ticketLink = 'https://builderhomesite.atlassian.net/browse/';
      this.ticketSlowgun = 'EX2PWEBAP-';
    }
    else if (event.target.value === 'Kiosk') {
      console.log('Project Kiosk', event.target.value);
      this.ticketLink = 'https://builderhomesite.atlassian.net/browse/';
      this.ticketSlowgun = 'EX2PWPK-';
    }
    else if (event.target.value === 'duda') {
      console.log('Project duda', event.target.value);
      this.ticketLink = 'https://builderhomesite.atlassian.net/browse/';
      this.ticketSlowgun = 'BHIDUDA-';
    }
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
    this.myObj = {name: this.ticketSlowgun + item1, desc: item2, other: item3,
     dueDate: item4, className: '', addDate: this.newDate,
     completeDate: '', remark: 'Add Comment', baseUrl: this.ticketLink};

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

