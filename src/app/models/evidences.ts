interface Evidence{
    type: "Node"|"Product",
    evidenceLabel: string,
    description: string,
    images: string[] | null,
    videos: string[] | null,
    documents: any[],
    graphs: any[],
    chart: any[]
}
interface Evidences {
    length: number,
    evidenceList: Evidence[]
} 

export { Evidence, Evidences } ;
