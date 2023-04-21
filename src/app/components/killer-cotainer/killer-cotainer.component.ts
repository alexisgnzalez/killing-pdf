import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

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
}
