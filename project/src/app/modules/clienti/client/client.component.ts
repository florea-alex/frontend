import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ClientiService } from 'src/app/services/clienti.service';
import { resourceUsage } from 'process';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public subscription: Subscription | undefined;
  public id: any;
  params: any;
  public client = {
    id: 0,
    nume: 'nume standard',
    prenume: 'prenume standard',
    cnp: 'cnp standard',
  };

  constructor(
    private route: ActivatedRoute,
    private clientiService: ClientiService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.params.subscribe((params: { id: number; }) => {
      this.id = +params.id;

      if (this.id) {
        this.getClient();
      }
    });
  }
  public getClient(): void {
    this.clientiService.getClientById(this.id).subscribe(
      (result) => {
        console.log(result);
        this.client = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
