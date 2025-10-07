import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../type';
import { data } from '../../shared';

@Component({
  selector: 'app-prd-info',
  imports: [],
  templateUrl: './prd-info.html',
  styleUrl: './prd-info.css',
})
export class PrdInfo {
  private route = inject(ActivatedRoute)
  currenPrd!:Product;
  ngOnInit(): void {
    const currentId = this.route.snapshot.paramMap.get('id');
    const recivedData = data.getPrds().find(p => p.id === currentId);
    if(currentId !== null && recivedData) {
      this.currenPrd = recivedData;
    }
  }
}
