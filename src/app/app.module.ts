import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DataTableModule, ButtonModule, InputTextModule} from 'primeng/primeng';

import { WordService } from './word/word.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WordSubmitComponent } from './word/word-submit/word-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WordSubmitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    DataTableModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [
    WordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
