import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss']
})
export class MagazineComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

}
