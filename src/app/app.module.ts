import { HttpClientModule} from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from "@angular/material/dialog";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatSelectModule} from "@angular/material/select";
import { MatCardModule} from "@angular/material/card";
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';
import { CrearVehiculoFrmComponent } from './crear-vehiculo-frm/crear-vehiculo-frm.component';
import { RestriccionVehiculoFrmComponent } from './restriccion-vehiculo-frm/restriccion-vehiculo-frm.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculoListComponent,
    CrearVehiculoFrmComponent,
    RestriccionVehiculoFrmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
