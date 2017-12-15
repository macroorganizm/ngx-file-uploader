import { Directive, EventEmitter, ElementRef, Input, HostListener, Output } from '@angular/core';
import {UploaderService} from "./uploader.service";

@Directive({ selector: '[ngxFileUploader]' })
export class NgxFileUploaderDirective {
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
    let files = this.element.nativeElement.files;
    console.log(files[0]);
    // console.log('HERE2');
    this.service.upload(files[0]).subscribe(data => {
      console.log(data);
    });
    // let options = this.getOptions();
    // let filters = this.getFilters();

    // this.uploader.addToQueue(files, options, filters);
    // this.onFileSelected.emit(files);

    if (this.isEmptyAfterSelection()) {
      this.element.nativeElement.value = '';
    }
  }
}
