import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Product } from "./product";
import { Observable } from "rxjs";

@Injectable()
export class ProductService {

    constructor(private http: HttpClient){}

    protected urlServiceV1: String = "http://localhost:3000/";

    getProducts(): Observable<Product[]>{
        return this.http
        .get<Product[]>(this.urlServiceV1 + "products")
    }
}
