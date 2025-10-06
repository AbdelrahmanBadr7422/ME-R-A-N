import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../types';

@Component({
  selector: 'app-prd-form',
  imports: [ReactiveFormsModule],
  templateUrl: './prd-form.html',
  styleUrl: './prd-form.css',
})
export class PrdForm {
  @Output() onPrdAdded: EventEmitter<Product> = new EventEmitter<Product>();
  prdForm = new FormGroup({
    prdName: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
    rate: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    const formVals = this.prdForm.value;
    let name = formVals.prdName;
    let description = formVals.desc;
    let imageUrl = formVals.imageUrl;
    let rate = formVals.rate;
    if (
      typeof name === 'string' &&
      typeof description === 'string' &&
      typeof imageUrl === 'string' &&
      typeof rate === 'string'
    ) {
      this.onPrdAdded.emit({
        name: name,
        description: description,
        imageUrl: imageUrl,
        rate: parseInt(rate),
      });
    }
    this.prdForm.reset();
  }
}
