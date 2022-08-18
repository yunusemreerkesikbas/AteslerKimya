import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CorporateComponent } from './corporate/corporate.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageDetailComponent } from './page-details/page-detail/page-detail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  
  {path:'urunler',component:ProductComponent},
  {path:'kurumsal',component:CorporateComponent},
  {path:'hizmetler',component: ServiceComponent},
  {path:'',redirectTo:'',component:HomepageComponent,pathMatch:'full'},
  {path: 'hizmetler/:categoryid', component:ServiceComponent},
  {path:'kurumsal/:categoryid',component:CorporateComponent},
  {path:'iletisim', component:ContactComponent},
  {path:'urunler/:productsslug', component:ProductDetailComponent},
  // {path:'urunler/:categoryid', component:ProductDetailComponent},
  {path:'urunler/:productsslug/:categoryslug', component:ProductDetailComponent},
  {path:'urunler/:productsheader/:productsslug/:categoryslug', component:ProductDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
