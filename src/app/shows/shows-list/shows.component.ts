import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {movieNameValidator, myIpValidator, myMaxLengthValidator} from './custom-validator';

const ControlName = 'query';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css'],
})
export class ShowsComponent implements OnInit {

  query: string;
  shows: any;
  formGroup: FormGroup;
  readonly QueryControlName = ControlName;

  constructor(private http: HttpClient,
              private formBuilder: FormBuilder) {
  }

  get queryError() {
    return this.formGroup.get('query').errors;
  }

  ngOnInit() {
    this.formGroup =
      this.formBuilder.group({
        'query':
          ['Skybox', Validators.compose(
            [Validators.required,
              movieNameValidator,
              myMaxLengthValidator(10)])]
        , 'ip': ['', Validators.compose([
          myIpValidator
        ])]
      });
    this.searchShow();
  }

  searchShow() {

    console.log('form group', this.formGroup);

    if (!this.formGroup.valid) {
      return;
    }


    this.query = this.formGroup.get('query').value;
    this.http.get(`search/shows?q=${this.query}`).pipe(map(
      (data: any[]) => data.map(item => item.show)))
      .subscribe(data =>
        this.shows = data);
  }
}
