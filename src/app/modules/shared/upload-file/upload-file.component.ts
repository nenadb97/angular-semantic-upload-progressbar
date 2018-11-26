import { Component } from '@angular/core';
import {FileService} from '../../../services/file.service';

interface IUploadResponse {
  success: boolean;
  key: string;
  link: string;
  expiry: string;
}

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})

export class UploadFileComponent {

  files: File[] = [];
  isUploadStarted = false;
  uploadedFile: IUploadResponse;

  constructor(protected fileService: FileService) { }

  upload(): void {
      this.setUploadStartedValue(true);

      this.fileService.upload(this.files)
        .subscribe((response: IUploadResponse) => {
          if (response.success) {
            this.uploadedFile = Object.assign(response);
          }
        });
    }

  onSelectedFile(event: File[]): void {
    this.files = event;
  }

  setUploadStartedValue(value: boolean): void {
    this.isUploadStarted = value;
  }

  get isUploadButtonDisabled(): boolean {
    return this.files.length === 0 || this.isUploadStarted;
  }

  get isShowSelectFilesText(): boolean {
    return !this.isUploadStarted && this.files.length === 0;
  }
}
