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

  public async get({ resource, params }: IUCNredlistFetch) {
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
      const result = await this.apiFetch({ resource: path, params });
      return result.json();
    } catch (error: any) {
      return error;
    }
  }
}

export { IUCNredlist, IUCNredlistOptions };
