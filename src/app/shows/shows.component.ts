import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/internal/operators";
import {BaseUrlInterceptorService} from "../base-url-interceptor.service";

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css'],
})
export class ShowsComponent implements OnInit {

  constructor(private http: HttpClient) { }
query: string;
  shows: any;
  ngOnInit() {
    this.http.get(`singlesearch/shows?q=New`).pipe(map(data => [data]))
      .subscribe(data =>
    this.shows = data);
  }

}
