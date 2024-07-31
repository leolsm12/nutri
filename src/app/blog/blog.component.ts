import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, HttpClientModule ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  private apiUrl = 'assets/data.json';
  receitas: any[] = [];

  constructor(private http: HttpClient) { }
  
  getReceitas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  ngOnInit(): void {
    this.getReceitas().subscribe(data => {
      this.receitas = data;
    });
  }

}
