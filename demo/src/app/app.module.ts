import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TabsModule } from 'ngx-bootstrap/tabs';
// import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { FileUploadSectionComponent } from './components/file-upload-section';
import { SimpleDemoComponent } from './components/file-upload/simple-demo';
import { NgxFileUploaderModule } from '../../../src/ngx-file-uploader/ngx-file-uploader.module';
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
// import { NgxFileUploaderModule } from ' ngx-file-uploader';

@NgModule({
  imports: [BrowserModule, CommonModule, NgxFileUploaderModule, TabsModule.forRoot(), FormsModule, HttpClientModule],
  declarations: [AppComponent, FileUploadSectionComponent, SimpleDemoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
