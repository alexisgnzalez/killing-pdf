import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { PdfServiceService } from 'src/app/services/pdf-service.service';

@Component({
  selector: 'app-killer-cotainer',
  templateUrl: './killer-cotainer.component.html',
  styleUrls: ['./killer-cotainer.component.scss'],
})
export class KillerCotainerComponent implements OnInit {
  image: any;
  constructor(private pdfService: PdfServiceService) {}

  ngOnInit(): void {}

  async takeSnapShot() {
    // @ts-ignore
    const aux = await html2canvas(document.querySelector('#capture'));
    this.image = aux.toDataURL();
  }

  eraseSnapShot() {
    this.image = null;
  }

  async jsPdfStuff() {
    if (this.image) {
      const pdfServ = await this.pdfService.loadPdfModule();
      console.log(pdfServ);
      const pdf = new pdfServ();
      pdf.text('Holis soy un pdf con jspdf!', 10, 10);
      pdf.addImage(this.image, 'JPEG', 10, 15, 160, 70);
      pdf.save('jspdftest.pdf');
    }
  }

  async shareStuff() {
    // @ts-ignore
    const aux = await html2canvas(document.querySelector('#capture'));
    aux.toBlob((blob: any) => {
      let file = new File([blob], 'image.png', { type: 'image/png' });
      // Utiliza el archivo aquí
      // console.log('navigator can share: ', navigator.canShare(this.image));
      if (navigator.share && this.image) {
        navigator
          .share({
            files: [file],
            // url: 'https://www.google.com',
          })
          .then(() => {
            console.log('Compartido exitosamente');
          })
          .catch((error) => {
            console.error('Error al compartir:', error);
          });
      } else {
        console.log('La API de Web Share no está disponible');
      }
    }, 'image/png');
  }

  dataURLtoFile(dataurl: any, filename: any) {
    let arr = dataurl.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
}
