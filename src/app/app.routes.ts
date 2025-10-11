import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PessoaLoginComponent } from './pages/pessoa-login/pessoa-login.component';
import { PessoasFormComponent } from './pages/pessoas-form/pessoas-form.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
    },
    {
        path: 'pessoas/login',
        component: PessoaLoginComponent,
        title: 'Login',
    },
    {path:'pessoas', component: PessoaLoginComponent},
    {path: 'pessoas/incluir', component: PessoasFormComponent}
];
