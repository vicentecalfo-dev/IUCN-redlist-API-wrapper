"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IUCNredlist = void 0;
class IUCNredlist {
    headers = {
        Authorization: "",
        "Content-Type": "application/json",
    };
    token = "";
    url = "https://api.iucnredlist.org/api/v4/";
    constructor(options) {
        Object.assign(this, options);
        this.headers.Authorization = this.token;
    }
    apiFetch({ resource, params }) {
        const serializedParams = params !== undefined ? new URLSearchParams(params).toString() : "";
        return fetch(`${this.url}${resource}?${serializedParams}`, {
            method: "GET",
            headers: this.headers,
        });
    }
    async get({ resource, params }) {
        const slugs = resource.split("/");
        resource = slugs[0];
        if (slugs[1])
            resource = `${resource}/${slugs[1]}`;
        [
            "assessment_id",
            "sis_id",
            "kingdom_name",
            "phylum_name",
            "class_name",
            "order_name",
            "family_name",
            "code",
            "name",
        ].forEach((param) => {
            if (params?.hasOwnProperty(param)) {
                resource = `${resource}/${params[param]}`;
                delete params[param];
            }
        });
        const path = `${resource}`;
        try {
            const result = await this.apiFetch({ resource: path, params });
            return result.json();
        }
        catch (error) {
            return error;
        }
    }
}
exports.IUCNredlist = IUCNredlist;
//# sourceMappingURL=core.js.map