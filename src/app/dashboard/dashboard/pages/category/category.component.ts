import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Category } from 'src/app/core/interfaces/interfaces';
import { CategoryService } from 'src/app/core/services/category.sevice';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public displayedColumns = ['id','name','actions'];
  public dataSource : Category[] = [];
  public dataza$ : Observable<Category[]>;

  constructor(private CategoryService: CategoryService) { 
    this.dataza$ = this.CategoryService.getCategory();
   }

   ngOnInit(): void {
     this.CategoryService.loadCategory();
     this.CategoryService.
     getCategory()
     .pipe(take(1))
     .subscribe({
      next: (data) => (data)
     })

   }

}
