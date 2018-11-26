import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ProgressbarComponent,
    UploadFileComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProgressbarComponent,
    UploadFileComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
