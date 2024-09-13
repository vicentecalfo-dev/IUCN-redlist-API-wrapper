import "dotenv/config";
import { describe, expect, test } from "@jest/globals";
import { IUCNredlist } from "./core";
const token = process.env.TOKEN ? process.env.TOKEN : "";
const api = new IUCNredlist({ token });

describe("Taxa Resources", () => {
  const sis_id = 172817975;
  const scientific_name = {
    genus_name: "Aegis",
    species_name: "luteocontexta",
  };

  test("SIS Id", async () => {
    const { taxon } = await api.get({
      resource: "taxa/sis",
      params: { sis_id },
    });
    expect(taxon.sis_id).toBe(sis_id);
  });

  test("Scientific Name", async () => {
    const { taxon } = await api.get({
      resource: "taxa/scientific_name",
      params: scientific_name,
    });
    expect(taxon.sis_id).toBe(sis_id);
  });

  test("Kingdom Names", async () => {
    const { kingdom_names } = await api.get({
      resource: "taxa/kingdom",
    });
    expect(kingdom_names[0]).toBe("ANIMALIA");
  });

  test("Kingdom Name", async () => {
    const { assessments } = await api.get({
      resource: "taxa/kingdom",
      params: {
        kingdom_name: "ANIMALIA",
        page: 1,
        year_published: 2020,
      },
    });
    expect(assessments[0].sis_taxon_id).toBe(10030);
  });

  test("Family Name", async () => {
    const { assessments } = await api.get({
      resource: "taxa/family",
      params: {
        family_name: "ACANTHACEAE",
        year_published: 2020,
      },
    });
    expect(assessments[0].sis_taxon_id).toBe(48153954);
  });

  test("Assessment by ID", async () => {
    const assessment = await api.get({
      resource: "assessment",
      params: {
        assessment_id: 172861292,
      },
    });
    expect(assessment.assessment_id).toBe(172861292);
  });

  test("Biogeographical Realms", async () => {
    const { biogeographical_realms } = await api.get({
      resource: "biogeographical_realms",
    });
    expect(biogeographical_realms[0].code).toBe("0");
  });
});
