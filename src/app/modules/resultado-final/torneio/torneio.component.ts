import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-torneio',
  templateUrl: './torneio.component.html',
  styleUrls: ['./torneio.component.scss']
})
export class TorneioComponent {

  @Input() item;

}
