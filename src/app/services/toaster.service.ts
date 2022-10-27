import { Injectable } from '@angular/core';
import { Toaster } from '../models/Toaster';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  toasts: Toaster[] = []

  show(header: string, body: string, delay?: number) {
    this.toasts.push({ header, body, delay });
  }

  remove(toast: Toaster) {
    this.toasts = this.toasts.filter(t => t != toast);
  }
}
