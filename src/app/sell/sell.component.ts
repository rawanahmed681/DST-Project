import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.scss'
})
export class SellComponent {
  clientform:FormGroup;
constructor(private tostr:ToastrService, private cf:FormBuilder){
 this.clientform=this.cf.group({
  cname:['',[Validators.required,Validators.pattern('^[A-Za-z ]+$')]],
   phonenumber:['',Validators.required],
   location:[''],
   Compound:[''],
   PropertyType:[''],
   PropertyDescription:['']
 })

  
  // this.clientform=new FormGroup({
  //   cname:new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]')]),
  //   phonenumber:new FormControl('',[Validators.required]),
  //   location:new FormControl(''),
  //   Compound:new FormControl(''),
  //   PropertyType:new FormControl(''),
  //   PropertyDescription:new FormControl('')
  // });


}
get cname(){
  return this.clientform.get('cname')
}
showSuccess(){
  this.tostr.success("Registraion has been completed successfully")
}

}

