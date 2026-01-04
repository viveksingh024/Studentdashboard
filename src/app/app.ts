
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  constructor(private router: Router) {} 
  onLogout(): void { 
    sessionStorage.clear();
    localStorage.clear(); 

    this.router.navigate(['/portal/come-soon']);
    console.log('Redirecting to Coming soon page...');
    this.router.navigate(['/login']); 
    console.log('Logged out of EduSmart'); 
  }
} 
