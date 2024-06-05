import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { start } from 'repl';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit, OnChanges {
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Valor de init cambio a: ', changes['init'].currentValue);
    this.startCounter();
  }

  ngOnInit(): void {
    this.startCounter();
  }

  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  @Input() init:number = 0;
  public counter:number = 0;

  private countDownTimeRef:any = null;

  

  startCounter(){
    if (this.init && this.init>0){
      this.clearTimeOutRef()
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown(){
    this.countDownTimeRef = setTimeout(()=>{
      this.counter = this.counter - 1;
      this.processCountdown();
    }, 1000)
  }

  private clearTimeOutRef(){
    if (this.countDownTimeRef){
      clearTimeout(this.countDownTimeRef);
      this.countDownTimeRef = null;
    }
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
