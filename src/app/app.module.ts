import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';

import { CarouselExampleComponent } from './carousel-example/carousel-example.component';
import { ToolBarScalableComponent } from './tool-bar-scalable/tool-bar-scalable.component';
import { FooterComponent } from './footer/footer.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';

import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageDoingBusinessInBabylonComponent } from './page-doing-business-in-babylon/page-doing-business-in-babylon.component';

/* it might be safest to import the routing module last */
import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    
    MyNavComponent,
    
    ToolBarScalableComponent,
    FooterComponent,
    CarouselExampleComponent,
    SocialIconsComponent,
    
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    
    PageHomeComponent,
    PageDoingBusinessInBabylonComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
   /* FormsModule, needed for search form*/
   /* ReactiveFormsModule, needed for search form*/
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    LayoutModule,
    /* may also need some other mat includes see town of babylon list */
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  /*provider list may eventually need to be updated to something like -- providers: [TransactionService, SearchService] */
  bootstrap: [AppComponent]
})
export class AppModule { }
