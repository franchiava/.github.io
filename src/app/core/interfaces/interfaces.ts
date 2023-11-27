export interface LoginPayload {
    email: string | null,
    password: string | null,

}

export interface Category {
    id: number,
    name: string,
}

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

export interface user{
    id: number,
    name:  string,
    surname: string,
    email: string,
    password: string,
}