import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // property/variable
  header="Welcome to our bank....."
  accPlaceholder="Account please"
  // accno
  accno=""
  // psw
  pswd=""
  //database
  database:any={
    1000:{accno:1000,username:'Neer',password:1000,balance:5000},
    1001:{accno:1001,username:'Lasha',password:1000,balance:5000},
    1002:{accno:1002,username:'Sasha',password:1000,balance:5000}
  } 
  constructor() { }

  ngOnInit(): void {
  }
  // user define function
  accChange(event:any){
    this.accno=event.target.value
  }
  pswChange(event:any){
    this.pswd=event.target.value
  }
  login(){
    // fetch accnovar 
    var accno = this.accno 
    var pswd =this.pswd
    
    let userdetails = this.database
    if(accno in userdetails){
      if (pswd == userdetails[accno]['password']) {
        alert('login successsful')
      }
      else{
        alert('incorrect password')
      }
    }
    else{
      alert('user does not exist')
    }
  }
}
