import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  standalone: false,

  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'jose';
  public nameUpper: string = 'JOSE';
  public fullName: string = 'jOse cARloS';
  public customDate: Date = new Date();
}
