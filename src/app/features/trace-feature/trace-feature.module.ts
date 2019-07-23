import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraceFeatureRoutingModule } from './trace-feature-routing.module';
import { TraceComponent } from './trace/trace.component';
import { TraceHeaderComponent } from './trace-header/trace-header.component';
import { TraceStatsComponent } from './trace-stats/trace-stats.component';
import { TraceDatesComponent } from './trace-dates/trace-dates.component';
import { TraceLogsComponent } from './trace-logs/trace-logs.component';
import { IconModule } from '../../components/icon/icon.module';
import { TrackerFeatureComponent } from './trace-logs/tracker-feature/tracker-feature.component';
import { TrackingItemDetailsComponent } from './trace-logs/tracking-item-details/tracking-item-details.component';
import { TransportEventDetailsComponent } from './trace-logs/transport-event-details/transport-event-details.component';
import { TransporterFacilityDetailsComponent } from './trace-logs/transporter-facility-details/transporter-facility-details.component';
import { TrackerTreeComponent } from './trace-logs/tracker-tree/tracker-tree.component';
import { TrackerNodeComponent } from './trace-logs/tracker-node/tracker-node.component';
import { ChildNodeDirective } from './trace-logs/tracker-tree/childnodes.directive';
import { BusinessunitDetailsComponent } from './trace-logs/businessunit-details/businessunit-details.component';
import { ConversionDetailsComponent } from './trace-logs/conversion-details/conversion-details.component';
import { MatCardModule, MatIconModule, MatTreeModule, MatProgressBarModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import { MapsModule } from 'src/app/components/maps/maps.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ConversionTreeComponent } from './trace-logs/conversion-tree/conversion-tree.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MultipleSupplierComponent } from './trace-logs/multiple-supplier/multiple-supplier.component';
import { TraceDocumentModule } from './trace-document/trace-document.module';
import { TraceDocumentRoutingModule } from './trace-document/trace-document-routing.module';
import { GroupButtonComponent } from './trace-logs/group-button/group-button.component';
import { ConversionNodeDirective } from './trace-logs/conversion-details/conversion-node.directive';

@NgModule({
  declarations: [TraceComponent, TraceHeaderComponent, TraceStatsComponent, TraceDatesComponent, TraceLogsComponent, TrackerFeatureComponent, TrackingItemDetailsComponent,
    TrackingItemDetailsComponent,
    TransportEventDetailsComponent,
    TransporterFacilityDetailsComponent,
    TrackerTreeComponent,
    TrackerNodeComponent,
    ChildNodeDirective,
    ConversionNodeDirective,
    BusinessunitDetailsComponent,
    ConversionDetailsComponent,
    ConversionTreeComponent,
    MultipleSupplierComponent,
    GroupButtonComponent
  ],
  entryComponents: [TrackerNodeComponent,MultipleSupplierComponent],

  imports: [
    CommonModule,
    TraceFeatureRoutingModule,
    TraceDocumentModule,
    TraceDocumentRoutingModule,
    IconModule,
    MatCardModule,
    MatTabsModule,
    AngularSvgIconModule,
    MatIconModule,
    MatTreeModule,
    MatProgressBarModule,
    FlexLayoutModule,
    MapsModule
  ]
})
export class TraceFeatureModule { }
