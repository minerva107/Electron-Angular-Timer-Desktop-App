import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'electron-angular-app';

  max     = 1;
  current = 0;

  start() {
    const interval = Observable.interval(100);

    interval
      .takeWhile(_ => !this.isFinished )
      .do(i => this.current += 0.1)
      .subscribe();
  }

   /// Terminar a contagem do tempo
  finish() {
    this.current = this.max;
  }

  /// Fazer reset do tempo
  reset() {
    this.current = 0;
  }


  /// Prevenir erros NaN

  get maxVal() {
    return isNaN(this.max) || this.max < 0.1 ? 0.1 : this.max;
  }

  get currentVal() {
    return isNaN(this.current) || this.current < 0 ? 0 : this.current;
  }

  get isFinished() {
    return this.currentVal >= this.maxVal;
  }


}


