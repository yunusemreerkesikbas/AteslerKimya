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
  {path:'kurumsal',component:CorporateComponent },
  {path:'hizmetler',component: ServiceComponent},
  {path:'',redirectTo:'',component:HomepageComponent,pathMatch:'full'},
  {path: 'hizmetler/:categoryname', component:ServiceComponent},
  {path:'kurumsal/:categoryslug',component:CorporateComponent},
  {path:'iletisim', component:ContactComponent},
  {path:'iletisim/:categoryslug',component:ContactComponent},
  {path:'urunler/:productsheader', component:ProductDetailComponent},
  {path:'urunler/:productsheader/:categoryslug', component:ProductDetailComponent},
  {path:'urunler/:productsheader/:productsslug/:categoryslug', component:ProductDetailComponent},
  {path:'urunler/:productsheader/:productsslug/:categoryslug/:categoryDetailslug', component:ProductDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
