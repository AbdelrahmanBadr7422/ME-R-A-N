import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../type';
import { data } from '../../shared';

@Component({
  selector: 'app-prd-list',
  imports: [RouterLink],
  templateUrl: './prd-list.html',
  styleUrl: './prd-list.css',
})
export class PrdList {
  prds = data.getPrds()
}
