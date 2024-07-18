import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
// import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [MainHeaderComponent, MainFooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [MainHeaderComponent, MainFooterComponent],
})
export class SharedModule {}
