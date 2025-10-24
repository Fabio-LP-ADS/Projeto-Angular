import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PessoaLoginComponent } from './pages/pessoa-login/pessoa-login.component';
import { PessoaFormComponent } from './pages/pessoas-form/pessoas-form.component';
import { PessoaListagemComponent } from './pages/pessoa-listagem/pessoa-listagem.component';

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

    { path: 'pessoas', component: PessoaListagemComponent },
    { path: 'pessoas/incluir', component: PessoaFormComponent }
];
