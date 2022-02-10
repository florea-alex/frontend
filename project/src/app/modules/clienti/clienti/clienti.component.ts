import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClientiService } from 'src/app/services/clienti.service';
import { DataService } from 'src/app/services/data.service';
import { AddEditAngajatComponent } from '../../shared/add-edit-angajat/add-edit-angajat.component';
import { AddEditClientComponent } from '../../shared/add-edit-client/add-edit-client.component';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.scss']
})
export class ClientiComponent implements OnInit {

  public subscription: Subscription | undefined;
  public loggedUser: { email: string; password: string; } | undefined;
  public parentMessage = 'message from parent';
  public clienti = [];
  public displayedColumns = ['id', 'nume', 'prenume', 'cnp', 'profile', 'delete', 'edit'];


  constructor(
    private router: Router,
    private dataService: DataService,
    private clientiService: ClientiService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.subscription = this.dataService.currentUser.subscribe(user => this.loggedUser = user);
    this.clientiService.GetFemei().subscribe(
      (result) => {
        console.log(result);
        this.clienti = result;
      },
      (error) => {
        console.error(error);
      }
    );

    this.clientiService.GetBarbati().subscribe(
      (result) => {
        console.log(result);
        this.clienti = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public logout(): void {
    localStorage.setItem('Role', 'Anonim');
    this.router.navigate(['/login']);
  }

  public receiveMesage(event: any): void{
    console.log(event);
  }

  public deleteClient(client: any): void {
    this.clientiService.deleteClient(client).subscribe(
      (result) => {
        console.log(result);
      },

      (error) => {
        console.error(error);
      }
    );
  }

  public openModal(client?: any): void {
    const data = {
      client
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(AddEditClientComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.clienti = result;
      }
    });
  }


  public addNewClient(): void{
    this.openModal();
  }

  public EditClient(client: any): void {
    this.openModal(client);
  }

  public goToClientProfile(id: any): void {
    this.router.navigate(['/client', id]);
  }
}
