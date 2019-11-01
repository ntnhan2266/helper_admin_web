import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
   MatBadgeModule,
   MatButtonModule,
   MatChipsModule,
   MatDatepickerModule,
   MatFormFieldModule,
   MatGridListModule,
   MatIconModule,
   MatInputModule,
   MatListModule,
   MatNativeDateModule,
   MatPaginatorModule,
   MatRadioModule,
   MatSelectModule,
   MatSidenavModule,
   MatSnackBarModule,
   MatTableModule,
   MatToolbarModule,
   MatTooltipModule,
   MatMenuModule,
   MatDialogModule,
   MatSlideToggleModule
} from '@angular/material';

@NgModule({
   imports: [
      CommonModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatBadgeModule,
      MatListModule,
      MatGridListModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatChipsModule,
      MatTooltipModule,
      MatTableModule,
      MatPaginatorModule,
      MatSnackBarModule,
      MatMenuModule,
      MatDialogModule,
      MatSlideToggleModule
   ],
   exports: [
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatBadgeModule,
      MatListModule,
      MatGridListModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatChipsModule,
      MatTooltipModule,
      MatTableModule,
      MatPaginatorModule,
      MatSnackBarModule,
      MatMenuModule,
      MatDialogModule,
      MatSlideToggleModule
   ],
   providers: [
      MatDatepickerModule,
   ]
})

export class AngularMaterialModule { }
