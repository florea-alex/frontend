import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AngajatService } from 'src/app/services_ang/angajat.service';
import { DataService } from 'src/app/services_ang/data.service';
import { AddEditAngajatComponent } from '../../shared/add-edit-angajat/add-edit-angajat.component';

@Component({
  selector: 'app-angajati',
  templateUrl: './angajati.component.html',
  styleUrls: ['./angajati.component.scss']
})
export class AngajatiComponent implements OnInit {

  //public subscription: Subscription | undefined;
  //public loggedUser: { email: string; password: string; } | undefined;
  public parentMessage = 'message from parent';
  public angajati = [];
  public displayedColumns = ['id', 'nume', 'prenume', 'job', 'profile', 'delete', 'edit'];

  constructor(
    private router: Router,
    private dataService: DataService,
    private angajatiService: AngajatService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    //this.subscription = this.dataService.currentUser.subscribe(user => this.loggedUser = user);
    this.angajatiService.GetAll().subscribe(
      (result) => {
        console.log(result);
        this.angajati = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public DeleteAngajat(angajat: any): void {
    this.angajatiService.DeleteAngajat(angajat).subscribe(
      (result) => {
        console.log(result);
      },

      (error) => {
        console.error(error);
      }
    );
  }

  public openModal(angajat?: any): void {
    const data = {
      angajat
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(AddEditAngajatComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.angajati = result;
      }
    });
  }

  public addNewAngajat(angajat: any): void{
    this.openModal();
  }

  public EditAngajat(angajat: any): void {
    this.openModal(angajat);
  }

  public goToAngajatProfile(id: any): void {
    this.router.navigate(['/angajat', id]);
  }
}



