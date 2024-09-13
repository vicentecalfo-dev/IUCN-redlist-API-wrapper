import { flatten } from "safe-flat";
import { json2csv } from "json-2-csv";
import { IUCNredlistFetch, IUCNredlistOptions } from "./types";

class IUCNredlist {
  headers = {
    Authorization: "",
    "Content-Type": "application/json",
  };
  token = "";
  url = "https://api.iucnredlist.org/api/v4/";
  constructor(options: IUCNredlistOptions) {
    Object.assign(this, options);
    this.headers.Authorization = this.token;
  }

  private apiFetch({ resource, params }: IUCNredlistFetch) {
    const serializedParams =
      params !== undefined ? new URLSearchParams(params as any).toString() : "";

    return fetch(`${this.url}${resource}?${serializedParams}`, {
      method: "GET",
      headers: this.headers,
    });
  }

  public async get({ resource, params, format = "JSON" }: IUCNredlistFetch) {
    const slugs = resource.split("/");
    resource = slugs[0];
    if (slugs[1]) resource = `${resource}/${slugs[1]}`;
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
    ].forEach((param: any) => {
      if (params?.hasOwnProperty(param)) {
        resource = `${resource}/${params[param]}`;
        delete params[param];
      }
    });
    const path = `${resource}`;
    try {
      const result = await (
        await this.apiFetch({ resource: path, params })
      ).json();
      const formatter = {
        JSON: () => result,
        FLAT_JSON: () => flatten(result),
        CSV: () => {
          const flatResults = formatter.FLAT_JSON();
          let resultArray = flatResults;
          if (!Array.isArray(result)) resultArray = [resultArray];
          const output = json2csv(resultArray as any, {
            escapeHeaderNestedDots: false,
          });
          return output;
        },
      };
      return formatter[format]();
    } catch (error: any) {
      return error;
    }
  }
}

export { IUCNredlist, IUCNredlistOptions };
