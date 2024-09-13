"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const globals_1 = require("@jest/globals");
const core_1 = require("./core");
const token = process.env.TOKEN ? process.env.TOKEN : "";
const api = new core_1.IUCNredlist({ token });
(0, globals_1.describe)("Taxa Resources", () => {
    const sis_id = 172817975;
    const scientific_name = {
        genus_name: "Aegis",
        species_name: "luteocontexta",
    };
    (0, globals_1.test)("SIS Id", async () => {
        const { taxon } = await api.get({
            resource: "taxa/sis",
            params: { sis_id },
        });
        (0, globals_1.expect)(taxon.sis_id).toBe(sis_id);
    });
    (0, globals_1.test)("Scientific Name", async () => {
        const { taxon } = await api.get({
            resource: "taxa/scientific_name",
            params: scientific_name,
        });
        (0, globals_1.expect)(taxon.sis_id).toBe(sis_id);
    });
    (0, globals_1.test)("Kingdom Names", async () => {
        const { kingdom_names } = await api.get({
            resource: "taxa/kingdom",
        });
        (0, globals_1.expect)(kingdom_names[0]).toBe("ANIMALIA");
    });
    (0, globals_1.test)("Kingdom Name", async () => {
        const { assessments } = await api.get({
            resource: "taxa/kingdom",
            params: {
                kingdom_name: "ANIMALIA",
                page: 1,
                year_published: 2020,
            },
        });
        (0, globals_1.expect)(assessments[0].sis_taxon_id).toBe(10030);
    });
    (0, globals_1.test)("Family Name", async () => {
        const { assessments } = await api.get({
            resource: "taxa/family",
            params: {
                family_name: "ACANTHACEAE",
                year_published: 2020,
            },
        });
        (0, globals_1.expect)(assessments[0].sis_taxon_id).toBe(48153954);
    });
    (0, globals_1.test)("Assessment by ID", async () => {
        const assessment = await api.get({
            resource: "assessment",
            params: {
                assessment_id: 172861292,
            },
        });
        (0, globals_1.expect)(assessment.assessment_id).toBe(172861292);
    });
    (0, globals_1.test)("Biogeographical Realms", async () => {
        const { biogeographical_realms } = await api.get({
            resource: "biogeographical_realms",
        });
        (0, globals_1.expect)(biogeographical_realms[0].code).toBe("0");
    });
});
//# sourceMappingURL=core.test.js.map