import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RelacaoFaturamentoComponent } from './relacao-faturamento/relacao-faturamento.component';
import { HeaderHomeComponent } from './shared/header-home/header-home.component';
import { MenuLateralComponent } from './shared/menu-lateral/menu-lateral.component';
import { ModalFaturamentoComponent } from './relacao-faturamento/modal-faturamento/modal-faturamento.component';

import { NgbModalConfig, NgbModule, NgbAccordionModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RelacaoFaturamentoComponent,
    HeaderHomeComponent,
    MenuLateralComponent,
    ModalFaturamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbAccordionModule,
    
  ],
  providers: [
    NgbModalConfig,
    NgbModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
