import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../common/common.service';
import {Alumini} from '../../../common/common.service';

@Component({
  templateUrl: './aluminiList.component.html',
  styleUrls: ['./aluminiList.component.css'],
})
export class AluminiListComponent implements OnInit {

  cols: any[];
  items: any[];
  selectedAlumini:Object;

  emailAlumini(alumini:Object) {
    console.dir(alumini);
  };

  public ngOnInit():void {
    this.userService.getAllAuminiList().then(responseData =>
    this.data = responseData.json()
  );

  this.items = [
    {label: 'Email', icon: 'fa-search', command: (event) => this.emailAlumini(this.selectedAlumini)},
    // {label: 'Delete', icon: 'fa-close', command: (event) => this.deleteCar(this.alumini)}
  ];
  this.cols = [
        {field: 'sno', header: 'S.No'},
        {field: 'idNo', header: 'Id No'},
        {field: 'regNoa', header: 'Register No'},
        {field: 'name', header: 'Name'},
        {field: 'academicYear', header: 'Acadamic Year'},
        {field: 'degree', header: 'Degree'}
    ];
  }
  public data:Alumini[];
  public constructor(private userService:UserService) {

  }
}