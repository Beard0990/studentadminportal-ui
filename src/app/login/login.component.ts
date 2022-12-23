import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snackbar: MatSnackBar,
  private router: Router) { }


  @ViewChild('loginForm') loginForm?: NgForm;

  ngOnInit(): void {
  }

  onLogin(): void {
    this.snackbar.open('Login successfully', undefined, {
      duration:2000
    });

    this.router.navigateByUrl('students');
  }


}
