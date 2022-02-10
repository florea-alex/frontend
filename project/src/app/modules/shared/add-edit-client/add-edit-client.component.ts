import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientiService } from 'src/app/services/clienti.service';
import { AddEditAngajatComponent } from '../add-edit-angajat/add-edit-angajat.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-client',
  templateUrl: './add-edit-client.component.html',
  styleUrls: ['./add-edit-client.component.scss']
})
export class AddEditClientComponent implements OnInit {

  public clientForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    nume: new FormControl(''),
    prenume: new FormControl(''),
    cnp: new FormControl('')
  });

  public title: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientiService: ClientiService,
    public dialogRef: MatDialogRef<AddEditClientComponent>,
  ) { 
    console.log(this.data);
    if (data.client) {
      this.title = 'Edit Client';
      this.clientForm.patchValue(this.data.client);
    }

    else {
      this.title = 'Add Client';
    }
  }

  get id(): AbstractControl | null{
    return this.clientForm.get('id');
  }

  get nume(): AbstractControl | null {
    return this.clientForm.get('nume');
  }

  get prenume(): AbstractControl | null {
    return this.clientForm.get('prenume');
  }

  get cnp(): AbstractControl | null {
    return this.clientForm.get('cnp');
  }
  ngOnInit(): void {
    
  }

  public AddClient(): void {
    this.clientiService.AddClient(this.clientForm.value).subscribe(
      (result) => {
        console.log(result);
        this.dialogRef.close(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public EditClient(): void {
    this.clientiService.EditClient(this.clientForm.value).subscribe(
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
