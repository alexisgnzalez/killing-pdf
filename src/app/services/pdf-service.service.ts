import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PdfServiceService {
  pdf: any;

  constructor() {}

  async loadPdfModule() {
    if (this.pdf) {
      return this.pdf;
    }
    const pdfModule = await import('jspdf');
    this.pdf = pdfModule.default;
    return this.pdf;
  }
}
