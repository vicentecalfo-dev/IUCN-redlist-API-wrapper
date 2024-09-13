"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IUCNredlist = void 0;
const safe_flat_1 = require("safe-flat");
const json_2_csv_1 = require("json-2-csv");
const fs_extra_1 = require("fs-extra");
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
    async get({ resource, params, format = "JSON" }) {
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
            const result = await (await this.apiFetch({ resource: path, params })).json();
            const formatter = {
                JSON: () => result,
                FLAT_JSON: () => (0, safe_flat_1.flatten)(result),
                CSV: () => {
                    const flatResults = formatter.FLAT_JSON();
                    let resultArray = flatResults;
                    if (!Array.isArray(result))
                        resultArray = [resultArray];
                    const output = (0, json_2_csv_1.json2csv)(resultArray, {
                        escapeHeaderNestedDots: false,
                    });
                    (0, fs_extra_1.outputFileSync)(`./teste/${path}.csv`, output);
                    return output;
                },
            };
            return formatter[format]();
        }
        catch (error) {
            return error;
        }
    }
}
exports.IUCNredlist = IUCNredlist;
//# sourceMappingURL=core.js.map