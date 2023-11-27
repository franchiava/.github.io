import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, mergeMap, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/enviroments.prod';
import { Product, ProductCreate } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products$ = new BehaviorSubject<Product[]>([]);

  constructor(private httpClient: HttpClient) { }
  
  getProduct(): Observable<Product[]>{
    return this._products$.asObservable();
  }
  
  loadProduct():void{
    this.httpClient.get<Product[]>('http://localhost:3000/Products')
    .subscribe({
      next: (response) => 
      this._products$.next(response)
  })
}

  submit(): void {

  }

  deleteById(id: number) :void {
    // this._products$.pipe(take(1)).subscribe({
    //   next: (arrayActual) => {
    //   this._products$.next(arrayActual.filter((v) => v.id !== id))
    // }})
    this.httpClient.delete(environment.baseApiUrl + '/Products/' + id).pipe().subscribe({
      next: (Array) => this.loadProduct()
    })
  }
  
  
  createProduct(payload: ProductCreate) :void {
    this.httpClient.post<Product>('http://localhost:3000/Products', payload)
    .pipe(
      mergeMap((ProductCreated) => this._products$.pipe
      (take(1),
      map((arrayActual) => [...arrayActual, ProductCreated]))
    ))
    .subscribe({
      next: (arratActualizado) => (this._products$.next(arratActualizado))
    })

  }
}