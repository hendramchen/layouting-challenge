import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css'],
})
export class ChannelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() channels: string[] = [];
}
