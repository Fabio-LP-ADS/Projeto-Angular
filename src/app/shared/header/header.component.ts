import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  exibirLogo: boolean = true;
  itensMenu = [
    { label: 'Home', link: '' },
    { label: 'Login', link: '/pessoas/login' },
    { label: 'Sobre', link: '/sobre' },
    { label: 'Ajuda', link: '/ajuda' }
  ]

}
