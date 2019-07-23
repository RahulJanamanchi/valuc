import { Component, OnInit, Input } from '@angular/core';
import { Certificate } from '../../uimodels/certificate.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-trace-document-certificates',
  templateUrl: './trace-document-certificates.component.html',
  styleUrls: ['./trace-document-certificates.component.scss']
})
export class TraceDocumentCertificatesComponent implements OnInit {
  @Input() certificates:Certificate[]
  constructor(private itemService:ItemService) { }

  ngOnInit() {
  }

  isCertificatePresent(){
    return this.certificates?this.certificates.length>0:false;
  }

  getImageSrc(path:string){
    return this.itemService.getImageSrc(path);
  }

}
