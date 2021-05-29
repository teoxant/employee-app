import { NgModule } from '@angular/core';
import { SharedLibsModule } from './shared-libs.module';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';

@NgModule({
  imports: [SharedLibsModule],
  declarations: [AlertComponent, AlertErrorComponent],
  exports: [SharedLibsModule, AlertComponent, AlertErrorComponent],
})
export class SharedModule {}
