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
    ]
})

export class MaterialModule {}