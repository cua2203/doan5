import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {
  IAddLaptop,
  IGetLaptop,
  IGetVariant,
  IVariant,
  IgetPagination,
} from '../model/laptop.model';
import { Observable } from 'rxjs';
import { constant } from '../config';

@Injectable({
  providedIn: 'root',
})
export class LaptopService {
  constructor(private http: HttpClient, private cookie: CookieService) {}
  token = this.cookie.get('token');
  baseUrl = constant.API_URL ;

  private createHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }

  getAll(query: any): Observable<IgetPagination> {
    const searchString = query.searchString
      ? `&searchString=${query.searchString}`
      : '';
    const pageIndex = query.pageIndex ? `&pageIndex=${query.pageIndex}` : '';
    const pageSize = query.pageSize ? `&pageSize=${query.pageSize}` : '';
    const sort = `&sort=${query.sort}`;
    const isActive = `&isActive=${query.isActive}`;

    const httpOptions = {
      headers: this.createHeaders(this.token),
    };

    return this.http.get<IgetPagination>(
      `${this.baseUrl}product/getAll?${searchString}${pageIndex}${pageSize}${sort}${isActive}`,
      httpOptions
    );
  }

  getWithVariant(): Observable<any[]> {
    const httpOptions = {
      headers: this.createHeaders(this.token),
    };

    return this.http.get<any[]>(
      `${this.baseUrl}product/getWithVariant`,
      httpOptions
    );
  }

  getAllVariantNoneParam(): Observable<any[]> {
    const httpOptions = {
      headers: this.createHeaders(this.token),
    };

    return this.http.get<any[]>(
      `${this.baseUrl}variant/getAllVariant`,
      httpOptions
    );
  }

  getAllVariantWithoutPrice(): Observable<any[]> {
    const httpOptions = {
      headers: this.createHeaders(this.token),
    };

    return this.http.get<any[]>(
      `${this.baseUrl}variant/getAllWithoutPrice`,
      httpOptions
    );
  }

  getVariant(id: number): Observable<IGetVariant[]> {
    const httpOptions = {
      headers: this.createHeaders(this.token),
    };

    return this.http.get<IGetVariant[]>(
      `${this.baseUrl}variant/getByLaptopId/` + id,
      httpOptions
    );
  }

  delete(id: number) {
    const httpOptions = {
      headers: this.createHeaders(this.token),
    };
    return this.http.delete(
      `${this.baseUrl}product/delete/` + id,
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
      '${this.baseUrl}product/getById/' + id,
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
      '${this.baseUrl}product/update',
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
      '${this.baseUrl}product/add',
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
      '${this.baseUrl}variant/add',
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
      '${this.baseUrl}variant/update',
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
      '${this.baseUrl}variant/delete/' + id,
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
      '${this.baseUrl}variant/getById/' + id,
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
      '${this.baseUrl}variant/getByLaptopId/' + id,
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
      `${this.baseUrl}variant/getAll?+${searchString}${pageIndex}${pageSize}${sort}${brand_ids}${category_ids}`
    );
  }
}
