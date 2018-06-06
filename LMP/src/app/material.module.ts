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
    ]
})

export class MaterialModule {}