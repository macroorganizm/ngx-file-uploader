import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxFileSelectDirective } from './ngx-file-select.directive';
import {NgxFileUploaderDirective} from './ngx-file-uploader.directive';
import {UploaderService} from './uploader.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ NgxFileSelectDirective, NgxFileUploaderDirective ],
  exports: [ NgxFileSelectDirective, NgxFileUploaderDirective ],
  providers: [ UploaderService ]
})
export class NgxFileUploaderModule {
}
