import { MindResponse } from '../interfaces/mindset-response';
export class MindScheme{
    constructor(
        public mindSchemeId: string | '',
        public schemeTitle: string | '',
        public responses: MindResponse[] = []
    ){}
}
