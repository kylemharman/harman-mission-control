import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mc-verify-email-address',
  templateUrl: './verify-email-address.component.html',
  styleUrls: ['./verify-email-address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerifyEmailAddressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
