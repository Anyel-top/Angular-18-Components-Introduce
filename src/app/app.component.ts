import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CountdownComponent } from './countdown/countdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProgressBarComponent, CountdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'components';

  counterProgress: number = 0;
  totalCountdown: number = 15;

  updateProgress($event:number){
    this.counterProgress = (this.totalCountdown - $event)/this.totalCountdown *100;
  }

  countdownFinished(){
    console.log("Countdown Finished");
  }

}
