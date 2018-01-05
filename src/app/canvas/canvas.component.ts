import {  Component, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  template: '<canvas #canvas></canvas>',
  styles: ['']
})
export class CanvasComponent implements AfterViewInit {
  // a reference to the canvas element from our template
  @ViewChild('canvas') public canvas: ElementRef;

  // setting a width and height for the canvas
  @Input() public width = window.innerWidth;
  @Input() public height = 400;

  private cx: CanvasRenderingContext2D;
  public ngAfterViewInit() {
    // get the context
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');

    // set the width and height
    canvasEl.width = this.width;
    canvasEl.height = this.height;

    // set some default properties about the line
    // this.cx.lineWidth = 3;
    // this.cx.lineCap = 'round';
    // this.cx.strokeStyle = '#000';
    // this.cx.beginPath();
    // this.cx.moveTo(125, 30);
    // this.cx.lineTo(31.9, 63.2);
    // this.cx.lineTo(46.1, 186.3);
    // this.cx.closePath();
    // this.cx.stroke();


    // this.cx.beginPath();
    // this.cx.moveTo(15, 100);
    // this.cx.lineTo(31.9, 63.2);
    // this.cx.lineTo(46.1, 186.3);
    // this.cx.closePath();
    // this.cx.stroke();

//     for (let i = 0; i < 10; i++) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     this.cx.beginPath();
//       this.cx.moveTo(x, y);
//       this.cx.lineTo(31.9, 63.2);
//       this.cx.lineTo(46.1, 186.3);
//       this.cx.closePath();
//       this.cx.beginPath();
//       this.cx.moveTo((x + 200), (y + 200));
//       this.cx.lineTo(31.9, 63.2);
//       this.cx.lineTo(46.1, 186.3);
//       this.cx.closePath();
//     this.cx.strokeStyle = 'blue';
//     this.cx.stroke();
// }
  //   const colors = ['#75EB00', '#53BBF4', '#FF85CB', '#FF432E', '#FFAC00'];


  //   for (let i = 0; i < 1000; i++) {
  //     this.cx.beginPath();
  //     this.cx.strokeStyle = colors[i % colors.length];
  //     this.cx.lineWidth = Math.random() * 10;
  //     this.cx.moveTo((Math.random() * window.innerWidth) + 100, Math.random() * window.innerHeight);
  //     this.cx.lineTo((Math.random() * window.innerWidth) - 100, Math.random() * window.innerHeight);
  //     this.cx.stroke();
  // }
//   const color1 = '#24A8AC', color2 = '#0087CB';
// const numberOfStripes = 50;
// for (let i = 0; i < numberOfStripes; i++) {
//   const thickness = window.innerHeight / numberOfStripes;
//   this.cx.beginPath();
//   this.cx.strokeStyle = i % 2 ? color1 : color2;
//   this.cx.lineWidth = thickness;

//   this.cx.moveTo(0, i * thickness + thickness / 2);
//   this.cx.lineTo(window.innerWidth, i * thickness + thickness / 2);
//   this.cx.stroke();
// }
}


// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-canvas',
//   templateUrl: './canvas.component.html',
//   styleUrls: ['./canvas.component.scss']
// })
// export class CanvasComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
}
