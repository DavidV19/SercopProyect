import { Component, inject, signal, OnInit } from '@angular/core';

import { Health } from './core/services/health';
import type { HealthResponse } from './core/services/health-response';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  private readonly healthService = inject(Health);

  protected readonly healthData =
    signal<HealthResponse | null>(null);

  protected readonly loading = signal(true);

  protected readonly error = signal('');

  ngOnInit(): void {
    this.checkHealth();
  }

  protected checkHealth(): void {

    this.loading.set(true);
    this.error.set('');
    this.healthData.set(null);
    
    this.healthService.getHealth().subscribe({
      next: (response) => {
        this.healthData.set(response);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No se pudo conectar con el backend');
        this.loading.set(false);
      }
    });

  }
}