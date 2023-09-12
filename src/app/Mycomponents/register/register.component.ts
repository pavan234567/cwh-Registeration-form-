import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
repeatPass: string = 'none';
title='localStorage';
  constructor() {
    }
  ngOnInit():void{
    localStorage.setItem("Pavan","Kumar");
    localStorage.setItem("email","pavan@gmail.com");
    localStorage.setItem("mobile","1234567890");
    localStorage.setItem("gender","m");
    localStorage.setItem("hobbies","Singing");
    localStorage.setItem("Aboutme","Good Evening");
    localStorage.setItem("pwd","121212");
    localStorage.setItem("rpwd","121212");
   
    // registerSubmited(){
    //   localStorage.setItem("formdata",JSON.stringify(this.registerForm));
    // }

      
  }

  registerForm = new FormGroup({
    Firstname: new FormControl("" ,[Validators.required ,Validators.minLength(4),Validators.pattern("[a-zA-Z].*")]),
    Lastname: new FormControl(""),
    email: new FormControl("",[Validators.required,Validators.email]),
    mobile: new FormControl("",[Validators.required,Validators.pattern("[0-9]*") 
    ,Validators.minLength(10),Validators.maxLength(10)]),
    gender: new FormControl("",Validators.required),
    pwd: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
    rpwd: new FormControl(""),
    hobbies: new FormControl(""),
    Aboutme: new FormControl(""),
    
    

  });
   
  registerSubmited(){
    if(this.pwd.value== this.rpwd.value){
      console.log(this.registerForm.valid);
      this.repeatPass='none'
      console.log(this.registerForm.value)
    }else{
      this.repeatPass= 'inline'
    }

    // localStorage.setItem("registerSubmited",JSON.stringify(this.registerSubmited));
  }
  

  resetForm():void{
    this.registerForm.reset();
    console.log(this.registerForm.value);
  }

  get  Firstname(): FormControl{
    return this.registerForm.get("Firstname") as FormControl;
  }
  get  email(): FormControl{
    return this.registerForm.get("email") as FormControl;
  }
  get  mobile(): FormControl{
    return this.registerForm.get("mobile") as FormControl;
  }
  get  gender(): FormControl{
    return this.registerForm.get("gender") as FormControl;
  }
  get  pwd(): FormControl{
    return this.registerForm.get("pwd") as FormControl;
  }
  get  rpwd(): FormControl{
    return this.registerForm.get("rpwd") as FormControl;
  }
}
