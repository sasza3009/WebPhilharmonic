export class LegoShopSet {
    set_id: string;
    pieces: number;
    descr: string;
    theme?: string; // use only with get_set service
    theme1?: string; // use only with search service
    theme2?: string;
    theme3?: string;
    accessory: number;
    url: string;
    kit: number;
    year: number;
    img_tn: string;
    img_sm: string;
    img_big: string;
};
