import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {

  public items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'textos y fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink:'numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'Uncommon'
          }
        ]
      },
        {
          label: 'Pipes personalizados',
          icon: 'pi pi-cog',
          items: [
            {
              label: 'Otro elemento',
              icon: 'pi pi-globe',
            }
          ]
        }

  ];
  }
}
