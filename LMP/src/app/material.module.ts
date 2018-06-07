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
    ]
})

export class MaterialModule {}