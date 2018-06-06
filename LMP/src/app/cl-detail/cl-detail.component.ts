import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CheckList } from '../checklist';
import { ClService } from '../cl.service';

@Component({
  selector: 'app-cl-detail',
  templateUrl: './cl-detail.component.html',
  styleUrls: ['./cl-detail.component.css']
})
export class ClDetailComponent implements OnInit {
  @Input() cl: CheckList;

  id: string;
  constructor(
    private route: ActivatedRoute,
    private clservice: ClService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void{
    this.id = this.route.snapshot.paramMap.get('id');
    this.clservice.getCl(this.id).subscribe(cl => this.cl = cl);
  }

}
