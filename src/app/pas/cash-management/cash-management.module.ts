import { NgModule } from '@angular/core';
import { CashManagementRoutingModule } from './cash-management-routing.module';
import { CashUpComponent } from './cash-up/cash-up.component';
import { DepositComponent } from './deposit/deposit.component';
import { ReconciliationComponent } from './reconciliation/reconciliation.component';
import { ReportComponent } from './report/report.component';
import { CashManagementComponent } from './cash-management.component';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { VectormapDirective } from './cash-up/vectormap.directive';


@NgModule({
  imports: [CashManagementRoutingModule, ThemeModule, NbCardModule],
  declarations: [CashManagementComponent, CashUpComponent, DepositComponent, ReconciliationComponent, ReportComponent, VectormapDirective],
  exports: [VectormapDirective],
})
export class CashManagementModule { }
