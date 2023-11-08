export interface Product {
    id: number,
    name: string,
    price: string,
    place: 'AVIN ICE' | 'FUC SOLAR' | 'TODO VENTANAS',
    detail: string,
    category: number,
}

export interface ProductCreate {
    name: string,
    price: string,
    place: 'AVIN ICE' | 'FUC SOLAR' | 'TODO VENTANAS',
    detail: string,
    category: number,
}