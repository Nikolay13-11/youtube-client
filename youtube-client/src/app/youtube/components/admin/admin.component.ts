import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit{
    form!: FormGroup;
    title: string = '';
    discription: string = '';
    img: string = '';
    link: string = '';
    formValues?:any;


  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
        title: new FormControl(''),
        discription: new FormControl(''),
        img: new FormControl(''),
        link: new FormControl('')
    })
  }



  submitAdminForm() {
    this.formValues = { ...this.form.value }
    this.form.reset()
  }


}
