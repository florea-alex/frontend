import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carti',
  templateUrl: './carti.component.html',
  styleUrls: ['./carti.component.scss']
})
export class CartiComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

}
