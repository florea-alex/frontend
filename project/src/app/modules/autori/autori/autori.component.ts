import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autori',
  templateUrl: './autori.component.html',
  styleUrls: ['./autori.component.scss']
})
export class AutoriComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

}
