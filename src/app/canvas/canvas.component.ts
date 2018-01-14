import {  Component, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  template: '<canvas #canvas></canvas>',
  styles: ['./canvas.component.scss']
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
    const c = this.cx;
    // set the width and height
    canvasEl.width = this.width;
    canvasEl.height = this.height;
    console.log(canvasEl);

    // peles padetis
    const mouse = {
      x: undefined,
      y: undefined
    };
    // konfeti spalvos
    const colorArray = [
      'rgba(255, 184, 209, 1)',
      'rgba(195, 195, 230, 1)',
      'rgba(231, 206, 227, 1)',
      'rgba(238, 238, 255, 1)',
      'rgba(221, 253, 254, 1)',
    ];
    // nustatome puslapio centra
    const center = canvasEl.width / 2;
    // atnaujinamas canva dydis pakeitus narsykles lango dydi
    window.addEventListener('resize', function() {
      canvasEl.width = window.innerWidth;
      canvasEl.height = 400;
    });
    // peles uzvedimas ant canva
    window.addEventListener('mousemove', function (event) {
      mouse.x = event.x;
      mouse.y = event.y;
    });
    // kuriamas objektas
    function Circle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
// piesia rutuliukus
      this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
      };
// keiciamos rutuliuku koordinates
      this.update = function() {
        if (this.x + this.radius > canvasEl.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y > 400) {
          this.y = -10;
        }
          this.y += this.dy;
          this.x += this.dx;
          this.draw();

      };
    }
    // let dx = (Math.random() - 0.5);
    // let dy = (Math.random() + 1) * 3;
// kuriamas rutuliuku masyvas
    const circleArray = [];
    for (let i = 0; i < 500; i++) {
    const x = Math.random() * canvasEl.width;
    const y = Math.random() * canvasEl.height;
    const dx = (Math.random() - 0.4);
    const dy = (Math.random() + 1) * 2;
    const radius = (Math.random() + 1) * 3;
      circleArray.push(new Circle(x, y, dx, dy, radius));
    }
// vercia rutuliukus judeti
    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvasEl.width, canvasEl.height);
      for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
    }
    animate();
}

}
