import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {
  IAddLaptop,
  IGetLaptop,
  IGetVariant,
  IVariant,
} from '../model/laptop.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LaptopService {
  constructor(private http: HttpClient, private cookie: CookieService) {}
  token = this.cookie.get('token');

  private createHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }

  getAll(query: any): Observable<IGetLaptop[]> {
    const searchString = query.searchString
      ? `&searchString=${query.searchString}`
      : '';
    const pageIndex = query.pageIndex ? `&pageIndex=${query.pageIndex}` : '';
    const pageSize = query.pageSize ? `&pageSize=${query.pageSize}` : '';
    const sort = `&sort=${query.sort}`;

    const httpOptions = {
      headers: this.createHeaders(this.token),
    };

    return this.http.get<IGetLaptop[]>(
      `http://localhost:3001/api/product/getAll?${searchString}${pageIndex}${pageSize}${sort}`,
      httpOptions
    );
  }

  getWithVariant(): Observable<any[]> {
    const httpOptions = {
      headers: this.createHeaders(this.token),
    };

    return this.http.get<any[]>(
      `http://localhost:3001/api/product/getWithVariant`,
      httpOptions
    );
  }

  getVariant(id: number): Observable<IGetVariant[]> {
    const httpOptions = {
      headers: this.createHeaders(this.token),
    };

    return this.http.get<IGetVariant[]>(
      `http://localhost:3001/api/variant/getByLaptopId/` + id,
      httpOptions
    );
  }

  delete(id: number) {
    const httpOptions = {
      headers: this.createHeaders(this.token),
    };
    return this.http.delete(
      `http://localhost:3001/api/product/delete/` + id,
      httpOptions
    );
  }

  GetById(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    };

    return this.http.get<any>(
      'http://localhost:3001/api/product/getById/' + id,
      httpOptions
    );
  }

  update(product: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    };

    return this.http.put(
      'http://localhost:3001/api/product/update',
      product,
      httpOptions
    );
  }

  add(product: IAddLaptop): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    };

    return this.http.post(
      'http://localhost:3001/api/product/add',
      product,
      httpOptions
    );
  }

  addVariant(variant: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    };

    return this.http.post(
      'http://localhost:3001/api/variant/add',
      variant,
      httpOptions
    );
  }
  updateVariant(variant: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    };

    return this.http.put(
      'http://localhost:3001/api/variant/update',
      variant,
      httpOptions
    );
  }

  deleteVariant(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    };

    return this.http.delete(
      'http://localhost:3001/api/variant/delete/' + id,
      httpOptions
    );
  }

  GetOneVariant(id: number): Observable<IVariant> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    };

    return this.http.get<IVariant>(
      'http://localhost:3001/api/variant/getById/' + id,
      httpOptions
    );
  }

  GetVariantByLaptopId(id: number): Observable<IGetVariant> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    };

    return this.http.get<IGetVariant>(
      'http://localhost:3001/api/variant/getByLaptopId/' + id,
      httpOptions
    );
  }
  GetAllVariant(query: any): Observable<any> {
    const searchString = query.searchString
      ? `&searchString=${query.searchString}`
      : '';
    const pageIndex = query.pageIndex ? `&pageIndex=${query.pageIndex}` : '';
    const pageSize = query.pageSize ? `&pageSize=${query.pageSize}` : '';
    const sort = `&sort=${query.sort}`;
    const brand_ids =query.brand_ids? `&brand_ids=${query.brand_ids}`:[];
    const category_ids =query.category_ids? `&category_ids=${query.category_ids}`:[];

    return this.http.get<any>(
      `http://localhost:3001/api/variant/getAll?+${searchString}${pageIndex}${pageSize}${sort}${brand_ids}${category_ids}`
    );
  }
}
