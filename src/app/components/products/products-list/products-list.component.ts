import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Products[] = [];
  categories: [] = [];

  constructor(public productsServices: ProductsService, private route: ActivatedRoute,
    private router: Router) {}


  ngOnInit(): void {
    this.productsServices.getAll().subscribe((response) => {
      this.products = response;
      console.log('Productos ', this.products);
    });

    this.productsServices.getAllCategories().subscribe((response) => {
      this.categories = response;
      console.log('Categories ', this.categories);
    });

  }

}
