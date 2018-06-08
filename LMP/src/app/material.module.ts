import { NgModule } from '@angular/core';
import { 
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonToggleModule,
 } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatDividerModule,
        MatCardModule,
        MatSidenavModule,
        MatToolbarModule,
        MatInputModule,
        MatCheckboxModule,
        MatProgressBarModule,
        MatGridListModule,
        MatMenuModule,
        MatButtonToggleModule,
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatDividerModule,
        MatCardModule,
        MatSidenavModule,
        MatToolbarModule,
        MatInputModule,
        MatCheckboxModule,
        MatProgressBarModule,
        MatGridListModule,
        MatMenuModule,
        MatButtonToggleModule
    ]
})

export class MaterialModule {}