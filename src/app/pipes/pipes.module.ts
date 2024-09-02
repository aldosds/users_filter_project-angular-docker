import { NgModule } from "@angular/core"
import { PhonePipe } from "./phone.pipe";
import { AddressPipe } from './address.pipe';
import { StatusPipe } from './status.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { DashIfEmptyPipe } from './dash-if-empty.pipe';

@NgModule({
  declarations: [
    PhonePipe,
    AddressPipe,
    StatusPipe,
    FormatDatePipe,
    DashIfEmptyPipe
  ],
  exports: [
    PhonePipe,
    AddressPipe,
    StatusPipe,
    FormatDatePipe,
    DashIfEmptyPipe
  ]
})
export class PipesModule {}
