import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentShowComponent } from './current-show/current-show.component';
import { ShowSearchComponent } from './show-search/show-search.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatGridListModule } from '@angular/material';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { SearchPageComponent } from './search-page/search-page.component';



@NgModule({
  declarations: [
    AppComponent,
    CurrentShowComponent,
    ShowSearchComponent,
    ShowDetailsComponent,
    SearchPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule, 
    MatIconModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatGridListModule
  ],

  exports: [
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule, 
    MatIconModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatGridListModule
  ],

  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
