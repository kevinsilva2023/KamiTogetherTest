import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-relacao-faturamento',
  templateUrl: './relacao-faturamento.component.html',
  styleUrls: ['./relacao-faturamento.component.scss']
})
export class RelacaoFaturamentoComponent {

  faturamentos = [
    {
      mesAno: '08/2023',
      faturamentoMes: '1.266.315,01'
    },
    { 
      mesAno: '09/2023',
      faturamentoMes: '1.119.140,32', 
    },
    { 
      mesAno: '10/2023',
      faturamentoMes: '1.533.176,98', 
    },
    { 
      mesAno: '11/2023',
      faturamentoMes: '1.364.068,17', 
    },
    { 
      mesAno: '12/2023',
      faturamentoMes: '672.792,63', 
    },
    { 
      mesAno: '01/2024',
      faturamentoMes: '1.282.568,26', 
    },
    { 
      mesAno: '02/2024',
      faturamentoMes: '1.176.504,88', 
    },
    { 
      mesAno: '03/2024',
      faturamentoMes: '1.371.198,52', 
    },
    { 
      mesAno: '04/2024',
      faturamentoMes: '1.286.090,74', 
    },
    { 
      mesAno: '05/2024',
      faturamentoMes: '1.252.407,08', 
    },
    { 
      mesAno: '06/2024',
      faturamentoMes: '1.324.518,91', 
    },
    { 
      mesAno: '07/2024',
      faturamentoMes: '872.130,39', 
    },

  ]
  
  constructor(
    private modalService: NgbModal
  ) {  }
  
  abrirModalFaturamento(component: any) {
    this.modalService.open(component, { centered: true , size: 'lg'})
  }

}
