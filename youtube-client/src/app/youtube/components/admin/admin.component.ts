import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { createCustomCard } from 'src/app/redux/actions/customCards.actions';

import ICustomCard from '../../models/custom-card.model';

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



  constructor(private store: Store) { }

  ngOnInit() {
    this.form = new FormGroup({
        title: new FormControl(''),
        discription: new FormControl(''),
        img: new FormControl(''),
        link: new FormControl('')
    })
  }

  submitAdminForm() {
      let date = new Date()
      console.log(date)
      console.log(typeof date)
    this.formValues = { ...this.form.value }
    let card: ICustomCard = {
        title: this.formValues.title,
        discription: this.formValues.discription,
        img: this.formValues.img,
        link: this.formValues.link,
        date: date
    }
    this.store.dispatch(createCustomCard(
        {
            newCustomCard: {
               ...card
              },}
    )
    )
    this.form.reset()

  }
}

