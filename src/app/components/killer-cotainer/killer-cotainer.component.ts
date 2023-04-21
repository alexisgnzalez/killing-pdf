import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
const PDFDocument = require('pdfkit');
const blobStream = require('blob-stream');

@Component({
  selector: 'app-killer-cotainer',
  templateUrl: './killer-cotainer.component.html',
  styleUrls: ['./killer-cotainer.component.scss'],
})
export class KillerCotainerComponent implements OnInit {
  image: any;
  constructor() {}

  ngOnInit(): void {}

  async takeSnapShot() {
    // @ts-ignore
    const aux = await html2canvas(document.querySelector('#capture'));
    this.image = aux.toDataURL();
  }

  eraseSnapShot() {
    this.image = null;
  }

  jsPdfStuff() {
    if (this.image) {
      const pdf = new jsPDF();
      pdf.text('Holis soy un pdf con jspdf!', 10, 10);
      pdf.addImage(this.image, 'JPEG', 10, 15, 160, 70);
      pdf.save('jspdftest.pdf');
    }
  }

  pdfKitStuff() {
    if (this.image) {
      const pdf = new PDFDocument();
      const stream = pdf.pipe(blobStream());
      pdf
        .font('fonts/PalatinoBold.ttf')
        .fontSize(25)
        .text('Holis soy un pdf con PdfKit!', 100, 100);
      pdf.image(this.image, {
        fit: [250, 300],
        align: 'center',
        valign: 'center',
      });
      pdf.end();
      stream.on('finish', function () {
        const blob = stream.toBlob('application/pdf');
        let a = document.createElement('a');
        a.style.display = 'none';
        document.body.appendChild(a);
        let url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'chimuelopdfkit';
        a.click();
      });
    }
  }
}
