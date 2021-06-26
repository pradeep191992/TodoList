import { formModal } from './modal/form-modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  formData = new formModal();
  arrayItem = [];

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
    const myObj = {name: "HL-"+item1, desc: item2, other: item3, dueDate: item4};

    if(localStorage.getItem('itemJson') == null){
      this.arrayItem.push(myObj);
      localStorage.setItem('itemJson', JSON.stringify(this.arrayItem));
    }
    else{
      this.arrayItem = JSON.parse(localStorage.getItem('itemJson'));
      if (item1 !== '' && item2 !== '' && item3 !== '') {
        this.arrayItem.push(myObj);
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

  clearStorage(){
    if (confirm('Do You Want To clear All data?')) {
      localStorage.clear();
      this.getData();
    }
  }

}
