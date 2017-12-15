import { Directive, EventEmitter, ElementRef, Input, HostListener, Output } from '@angular/core';
import {UploaderService} from "./uploader.service";

@Directive({ selector: '[ngxFileSelect]' })
export class NgxFileSelectDirective {
  // @Input() public uploader: FileUploader;
  @Output() public onFileSelected: EventEmitter<File[]> = new EventEmitter<File[]>();

  protected element: ElementRef;

  public constructor(element: ElementRef, private service: UploaderService) {
    this.element = element;
  }

  public getOptions(): any {
    // return this.uploader.options;
  }

  public getFilters(): any {
    return {};
  }

  public isEmptyAfterSelection(): boolean {
    return !!this.element.nativeElement.attributes.multiple;
  }

  @HostListener('change')
  public onChange(): any {
    console.log('HERE');
    this.service.upload(1);
    let files = this.element.nativeElement.files;
    let options = this.getOptions();
    let filters = this.getFilters();

    // this.uploader.addToQueue(files, options, filters);
    this.onFileSelected.emit(files);

    if (this.isEmptyAfterSelection()) {
      this.element.nativeElement.value = '';
    }
  }
}
