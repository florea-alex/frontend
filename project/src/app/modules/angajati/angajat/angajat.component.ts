import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AngajatService } from 'src/app/services_ang/angajat.service';

@Component({
  selector: 'app-angajat',
  templateUrl: './angajat.component.html',
  styleUrls: ['./angajat.component.scss']
})
export class AngajatComponent implements OnInit {

  public subscription: Subscription | undefined;
  public id: any;
  params: any;
  public angajat = {
    id: 0,
    nume: 'nume standard',
    prenume: 'prenume standard',
    job: 'job standard',
  };

  constructor(
    private route: ActivatedRoute,
    private angajatiService: AngajatService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.params.subscribe((params: { id: number; }) => {
      this.id = +params.id;

      if (this.id) {
        this.getAngajat();
      }
    });
  }

  public getAngajat(): void {
    this.angajatiService.getAngajatById(this.id).subscribe(
      (result) => {
        console.log(result);
        this.angajat = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
