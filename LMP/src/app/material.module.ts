import { NgModule } from '@angular/core';
import { 
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
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
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatDividerModule,
        MatCardModule,
        MatSidenavModule,
        MatToolbarModule,
    ]
})

export class MaterialModule {}