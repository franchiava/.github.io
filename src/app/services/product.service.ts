import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, mergeMap, take } from 'rxjs';
import { Product, ProductCreate } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/enviroments.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products$ = new BehaviorSubject<Product[]>([]);

  Products= [
    {
      "id": 1,
      "name": "Panel",
      "price": "U$S 625",
      "place": "Fuc solar",
      "detail": "Panel solar monocristalino de 400w",
      "category": 1
    },
    {
      "id": 2,
      "name": "Panel",
      "price": "$147..000",
      "place": "Avin ice",
      "detail": "Panel solar monocristalino de 370w",
      "category": 1
    },
    {
      "id": 3,
      "name": "Panel",
      "price": "$102.200",
      "place": "Avin ice",
      "detail": "Panel solar monocristalino de 185w",
      "category": 1
    },
    {
      "id": 4,
      "name": "Bateria",
      "price": "U$S 1575",
      "place": "Fuc solar",
      "detail": "Bateria de gel de 200ah",
      "category": 1
    },
    {
      "id": 5,
      "name": "Bateria",
      "price": "U$S 577",
      "place": "Fuc solar",
      "detail": "Bateria plomo acido 125ah",
      "category": 1
    },
    {
      "id": 6,
      "name": "Bateria",
      "price": "$441..900",
      "place": "Avin ice",
      "detail": "Bateria de gel de 200ah",
      "category": 1
    },
    {
      "id": 7,
      "name": "Regulador",
      "price": "U$S 478",
      "place": "Fuc solar",
      "detail": "Regulador mppt 30 ah",
      "category": 1
    },
    {
      "id": 8,
      "name": "Regulador",
      "price": "$167..800",
      "place": "Avin ice",
      "detail": "Regulador mppt 30ah",
      "category": 1
    },
    {
      "id": 9,
      "name": "Regulador",
      "price": "$189..100",
      "place": "Avin ice",
      "detail": "Regulador mppt 30ah c/ bluethoot",
      "category": 1
    },
    {
      "id": 10,
      "name": "Inversor",
      "price": "U$S 835",
      "place": "Fuc solar",
      "detail": "Inversor 1500w OP",
      "category": 1
    },
    {
      "id": 11,
      "name": "Inversor",
      "price": "$326.700",
      "place": "Avin ice",
      "detail": "Inversor 1500w OP",
      "category": 1
    },
    {
      "id": 12,
      "name": "Inversor",
      "price": "$215.000",
      "place": "Avin ice",
      "detail": "Inversor 1000w OP 12V",
      "category": 1
    },
    {
      "id": 13,
      "name": "Inversor",
      "price": "$228.000",
      "place": "Avin ice",
      "detail": "Inversor 1000w OP 24V",
      "category": 1
    },
    {
      "id": 14,
      "name": "Ventana",
      "price": "$58.496",
      "place": "Todo ventana",
      "detail": "60x30.Corrediza",
      "category": 2
    },
    {
      "id": 15,
      "name": "Ventana",
      "price": "$120.927",
      "place": "Todo ventana",
      "detail": "60x30 sistema duo.Corrediza",
      "category": 2
    },
    {
      "id": 16,
      "name": "Ventana",
      "price": "$63.091",
      "place": "Todo ventana",
      "detail": "40x30. Con mosquitero.Corrediza",
      "category": 2
    },
    {
      "id": 17,
      "name": "Claraboya",
      "price": "$171.717",
      "place": "Todo ventana",
      "detail": "50,5x 50,5. Expulsable 90°",
      "category": 1
    }]

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