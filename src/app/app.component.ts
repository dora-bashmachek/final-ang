import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  names:string[] = ['dora', 'alina', 'kamilla'] 
  nameTmp: string = "" 
  flag:boolean = false 
  number:number = 0 
  constructor() { } 
 
  ngOnInit(): void { 
  } 
 
  addName() { 
    this.names.push(this.nameTmp) 
    this.nameTmp="" 
  } 
  deleteName(idx:number){ 
    this.names.splice(idx,1) 
} 
}

