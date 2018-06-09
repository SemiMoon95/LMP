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
    MatExpansionModule,
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
        MatExpansionModule,
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
        MatButtonToggleModule,
        MatExpansionModule
    ]
})

export class MaterialModule {}