import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ApiListComponent } from './components/api-list/api-list.component';
import { ApiCardComponent } from './components/api-card/api-card.component';
import { ApiServiceService } from './components/services/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ApiDetailsComponent } from './components/api-details/api-details.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EpisodesListComponent } from './components/episodes-list/episodes-list.component';
import { EpisodesDetailsComponent } from './components/episodes-details/episodes-details.component';
import { WordsPipe } from './components/pipes/words.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApiListComponent,
    ApiCardComponent,
    NavbarComponent,
    NotFoundComponent,
    FooterComponent,
    ApiDetailsComponent,
    CharacterDetailsComponent,
    EpisodesListComponent,
    EpisodesDetailsComponent,
    WordsPipe,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
