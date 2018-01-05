import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor() { }
  // @ViewChild('myCanvas') canvasRef: ElementRef;

  ngOnInit() {
    // const ctx: CanvasRenderingContext2D =
    //   this.canvasRef.nativeElement.getContext('2d');
    // ctx.moveTo(125, 30);
    // ctx.lineTo(31.9, 63.2);
    // ctx.lineTo(46.1, 186.3);
  }

}
