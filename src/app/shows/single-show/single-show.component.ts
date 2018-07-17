import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ShowsService} from '../shows.service';

@Component({
  selector: 'app-single-show',
  templateUrl: './single-show.component.html',
  styleUrls: ['./single-show.component.css']
})
export class SingleShowComponent implements OnInit {

  show: any;
  constructor(private activeRoute: ActivatedRoute, private showService: ShowsService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: any) => {
      console.log('show id', params.id)
      this.showService.getShowById(params.id).subscribe(show => {
        this.show = show;
      })
    })
  }

}
