import { Product } from "./type";

export class data {
  private static prds: Product[] = [
    { id: '1', title: 'prd 1', description: 'this is prd 1' },
    { id: '2', title: 'prd 2', description: 'this is prd 2' },
    { id: '3', title: 'prd 3', description: 'this is prd 3' },
    { id: '4', title: 'prd 4', description: 'this is prd 4' },
    { id: '5', title: 'prd 5', description: 'this is prd 5' },
    { id: '6', title: 'prd 6', description: 'this is prd 6' },
    { id: '7', title: 'prd 7', description: 'this is prd 7' },
    { id: '8', title: 'prd 8', description: 'this is prd 8' },
  ];

  constructor() {}

  static getPrds() {
    return this.prds;
  }
}
