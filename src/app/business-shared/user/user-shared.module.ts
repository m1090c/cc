import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageCropperModule } from 'ng2-img-cropper';
import  { ImgCropperSelectModule}       from '../../shared/img-cropper-select/img-cropper-select.module';

import { AvatarCropperComponent} from './avatar-cropper.component';
import { PasswordEditComponent} from './password-edit.component';



/**
 * 用户共享模块
 */
@NgModule({
  imports:      [
     NgbModule,
     CommonModule,
     ImageCropperModule,
     ImgCropperSelectModule
  ],
  declarations: [
     AvatarCropperComponent,
     PasswordEditComponent
  ],
  exports:      [],
  entryComponents:[AvatarCropperComponent,PasswordEditComponent],
  providers:    []
})
export class UserSharedModule {
}
