import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Data } from '../model/Data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private httpClient = inject(HttpClient);

  constructor() { }

  public getData() {
    return this.httpClient.get<Data>("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
  }
}
