import { Injectable } from '@angular/core';
import { Pessoa } from '../types/types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly API ='http://localhost:3000/pessoas';

  constructor(private httpsClient: HttpClient) { }

  // TODO: Preparar Método para API
  listar(): Observable<Pessoa[]>{
    return this.httpsClient.get<Pessoa[]>(this.API);
  }
  
buscarPorId(id: number): Observable<Pessoa | undefined> {
    return this.httpsClient.get<Pessoa>(this.API + `/${id}`);
  }
  incluir(pessoa: Pessoa): Observable<Pessoa> {
    return this.httpsClient.post<Pessoa>(this.API, pessoa)
  }
  editar(pessoa: Pessoa): Observable<Pessoa> {
    const url = `${this.API}/${pessoa.id}`
    return this.httpsClient.put<Pessoa>(url, pessoa)
  }

  excluir(id: number): Observable<Pessoa> {
    return this.httpsClient.delete<Pessoa>(this.API + `/${id}`);
  }
}
