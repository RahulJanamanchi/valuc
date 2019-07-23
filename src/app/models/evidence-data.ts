import { Certificate } from '../features/trace-feature/uimodels/certificate.model';
import { Image } from '../features/trace-feature/uimodels/image.model';
import { Video } from '../features/trace-feature/uimodels/video.model';
export interface KeyValue{
    type: string;
    color: string;
    imageUrl: string;
    location: Location[];
}

export interface Location{
    address: string;
    numberEvidences: number;
    businessUnit: {
        unitName: string;
        unitImage: string;
        unitCity: string;
    }
    nodeLevel: NodeEvidence[];
    productLevel: Product[];
}

export interface Product{
    product:string;
    brandName:string;
    productImage:string;
    productEvidences:ProductEvidence[];
}
export interface NodeEvidence{
    subType: string;
    description: string;
    images: Image[];
    videos: Video[];
    documents: Certificate[];
}

export interface ProductEvidence{
    subType: string;
    description:string;
    images: Image[];
    videos: Video[];
    document: Certificate[];
    graphs: graph[];
}

export interface graph{
    title: string;
    labels: string[];
    data: number[];
}


