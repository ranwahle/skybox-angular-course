import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/internal/operators';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shows-template',
  templateUrl: './shows-template.component.html',
  styleUrls: ['./shows-template.component.css']
})
export class ShowsTemplateComponent implements OnInit {

  query: string;
  shows: any[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  searchShows(form: NgForm
  ) {

    if (!form.valid) {
      return;
    }
    console.log('form', form.value)

    this.query = form.value.query;
    this.http.get(`search/shows?q=${this.query}`).pipe(map(
      (data: any[]) => data.map(item => item.show)))
      .subscribe(data =>
        this.shows = data);
  }

}
