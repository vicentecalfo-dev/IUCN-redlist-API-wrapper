import 'dotenv/config'
import { describe, expect, test } from "@jest/globals";
import { IUCNredlist } from "./core";

const api = new IUCNredlist({ token: process?.env?.TOKEN });

describe("Taxa Resources", () => {
  const sis_id = 172817975;
  const scientific_name = {
    genus_name: "Aegis",
    species_name: "luteocontexta",
  };

  test("SIS Id", async () => {
    const result = await api.taxa({
      resource: "sis",
      params: { sis_id },
    });
    const { taxon } = await result.json();
    expect(taxon.sis_id).toBe(sis_id);
  });

  test("Scientific Name", async () => {
    const result = await api.taxa({
      resource: "scientific_name",
      params: scientific_name,
    });
    const { taxon } = await result.json();
    expect(taxon.sis_id).toBe(sis_id);
  });

  test("Kingdom Names", async () => {
    const result = await api.taxa({
      resource: "kingdom",
    });
    const { kingdom_names } = await result.json();
    expect(kingdom_names[0]).toBe("ANIMALIA");
  });

  test("Kingdom Name", async () => {
    const result = await api.taxa({
      resource: "kingdom",
      params: {
        kingdom_name: "ANIMALIA",
        page: 1,
        year_published: 2020,
      },
    });
    const { assessments } = await result.json();
    expect(assessments[0].sis_taxon_id).toBe(10030);
  });

  test("Family Name", async () => {
    const result = await api.taxa({
      resource: "family",
      params: {
        family_name: "ACANTHACEAE",
        year_published: 2020,
      },
    });
    const { assessments } = await result.json();
    expect(assessments[0].sis_taxon_id).toBe(48153954);
  });
});
