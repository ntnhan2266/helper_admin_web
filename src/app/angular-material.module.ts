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
} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';

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
      MatMenuModule
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
   ],
   providers: [
      MatDatepickerModule,
   ]
})

export class AngularMaterialModule { }
