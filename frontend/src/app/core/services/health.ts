import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HealthResponse } from './health-response';

@Injectable({
  providedIn: 'root',
})
export class Health {
  private readonly http = inject(HttpClient);

  getHealth(): Observable<HealthResponse> {
    return this.http.get<HealthResponse>(
      '/api/v1/health'  
    );
  }
}
