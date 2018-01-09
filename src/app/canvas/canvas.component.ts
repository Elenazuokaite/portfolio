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
  @Input() public height = 300;

  private cx: CanvasRenderingContext2D;
  public ngAfterViewInit() {
    // get the context
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');
    const c = this.cx;
    // set the width and height
    canvasEl.width = this.width;
    canvasEl.height = this.height;
    console.log(canvasEl);
    // for (let i = 0; i < 20; i++) {
    //   const x = Math.random() * this.width;
    //   const y = Math.random() * this.height;
    //   c.beginPath();
    //   c.arc(x, y, 30, 0, Math.PI * 2, false);
    //   c.stroke();
    // }
    let x = 200;
    let y = 200;
    let dx = 4;
    let dy = 4;
    let radius = 30;
    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvasEl.width, canvasEl.height);
      c.beginPath();
      c.arc(x, y, radius, 0, Math.PI * 2, false);
      c.stroke();
      if (x + radius > canvasEl.width || x - radius < 0) {
        dx = -dx;
      }
      if (y + radius > canvasEl.height || y - radius < 0) {
        dy = -dy;
      }
      x += dx;
      y += dy;
    }
    animate();
}

}
