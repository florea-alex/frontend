import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AngajatService } from 'src/app/services_ang/angajat.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { Injectable } from '@angular/core';


@Component({
  selector: 'app-add-edit-angajat',
  templateUrl: './add-edit-angajat.component.html',
  styleUrls: ['./add-edit-angajat.component.scss']
})
export class AddEditAngajatComponent implements OnInit {

  public angajatForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    nume: new FormControl(''),
    prenume: new FormControl(''),
    job: new FormControl('')
  });

  public title: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private angajatiService: AngajatService, 
    public dialogRef: MatDialogRef<AddEditAngajatComponent>,
  ) { 
    console.log(this.data);
    if (data.client) {
      this.title = 'Edit Angajat';
      this.angajatForm.patchValue(this.data.angajat);
    }

    else {
      this.title = 'Add Angajat';
    }
  }

  get id(): AbstractControl | null{
    return this.angajatForm.get('id');
  }

  get nume(): AbstractControl | null {
    return this.angajatForm.get('nume');
  }

  get prenume(): AbstractControl | null {
    return this.angajatForm.get('prenume');
  }

  get job(): AbstractControl | null {
    return this.angajatForm.get('job');
  }


  ngOnInit(): void {
  }

  public AddAngajat(): void {
    this.angajatiService.AddAngajat(this.angajatForm.value).subscribe(
      (result) => {
        console.log(result);
        this.dialogRef.close(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public EditAngajat(): void {
    this.angajatiService.EditAngajat(this.angajatForm.value).subscribe(
      (result) => {
        console.log(result);
        this.dialogRef.close(result);
      },
      (error) => {
        console.log(error);
      }
    ); 
  }

}
