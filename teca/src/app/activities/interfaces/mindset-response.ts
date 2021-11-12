export interface MindResponse {
    id: number;
    principalIdea: string;
    leafs: any[];
}

export interface MindresponseL_R{
    id: number;
    idPadre:number;
    principalIdea: string;
    sub: [];
    cant:number;
    px:number;
    py:number;
}
