import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  @ViewChild('progressbar') progressbar: ElementRef;
  @Input() progress: number;

  constructor() { }

  ngOnInit() {
  }

}
