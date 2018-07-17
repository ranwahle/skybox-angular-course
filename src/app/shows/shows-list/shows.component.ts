import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {movieNameValidator, myMaxLengthValidator} from './custom-validator';
import {ShowsService} from '../shows.service';

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
  childActive = false;
  readonly QueryControlName = ControlName;

  constructor(private showsService: ShowsService,
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
      });
    this.searchShow();
  }

  youHaveChildren() {
    this.childActive = true;
  }

  searchShow() {

    console.log('form group', this.formGroup);

    if (!this.formGroup.valid) {
      return;
    }


    this.query = this.formGroup.get('query').value;
    this.showsService.getShows(this.query)
      .subscribe(data =>
        this.shows = data);
  }
}
