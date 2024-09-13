import { IUCNredlistFetch, IUCNredlistOptions } from "./types";
declare class IUCNredlist {
    headers: {
        Authorization: string;
        "Content-Type": string;
    };
    token: string;
    url: string;
    constructor(options: IUCNredlistOptions);
    private apiFetch;
    get({ resource, params, format }: IUCNredlistFetch): Promise<any>;
}
export { IUCNredlist, IUCNredlistOptions };
//# sourceMappingURL=core.d.ts.map