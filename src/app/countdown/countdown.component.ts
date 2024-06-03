import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit {

  ngOnInit(): void {
    this.startCounter();
  }

  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  @Input() init:number = 0;
  public counter:number = 0;

  

  startCounter(){
    if (this.init && this.init>0){
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown(){
    setTimeout(()=>{
      this.counter = this.counter - 1;
      this.processCountdown();
    }, 1000)
  }

  processCountdown(){
    this.onDecrease.emit(this.counter);

    console.log("La cuenta va en: ", this.counter);
    if(this.counter == 0){
      this.onComplete.emit();
      console.log("La cuenta ha terminado");
    }
    else{
      this.doCountdown();
    }
  }
}
