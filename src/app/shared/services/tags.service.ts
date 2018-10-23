import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(
    private apiService: ApiService
  ) { }
  getTags(): Observable<[string]> {
    return this.apiService.get('/tags')
           .pipe(map(data => data.tags));
  }
}
