import { Component, OnInit } from '@angular/core';
import { CheckList } from '../checklist';

import { ClService } from '../cl.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cllist: CheckList[] = [];

  constructor(private clservice: ClService) { }

  ngOnInit() {
    this.getCllist();
  }

  getCllist(): void{
    this.clservice.getCllist().subscribe(cllist => this.cllist = cllist);
  }
}
