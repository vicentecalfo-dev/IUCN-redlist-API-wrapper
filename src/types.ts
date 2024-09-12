interface IUCNredlistOptions {
  token: string;
  url?: string;
}

interface IUCNredlistFetch {
  resource: string;
  params?:
    | SISParams
    | ScientificNameParams
    | KingdomParams
    | PhylumParams
    | ClassParams
    | OrderParams
    | FamilyParams
    | BiogeographicalRealmParams
    | ComprehensiveGroupParams
    | ConservationActionsParams
    | CountriesParams
    | FAOParams
    | GrowthFormsParams
    | HabitatsParams
    | PopulationTrendsParams
    | RedListCategoriesParams
    | ResearchParams
    | ScopesParams
    | StressesParams
    | SystemsParams
    | UseAndTradeParams
    | ThreatsParams;
}

interface ScientificNameParams {
  genus_name: string;
  species_name: string;
  infra_name?: string;
  subpopulation_name?: string;
}

interface SISParams {
  sis_id: number;
}

interface KingdomParams {
  kingdom_name: string;
  page: number;
  year_published?: number;
  latest?: boolean;
  scope_code?: number;
}

interface PhylumParams {
  phylum_name: string;
  year_published?: number;
  latest?: boolean;
  scope_code?: number;
}

interface ClassParams {
  class_name: string;
  year_published?: number;
  latest?: boolean;
  scope_code?: number;
}

interface OrderParams {
  order_name: string;
  year_published?: number;
  latest?: boolean;
  scope_code?: number;
}

interface FamilyParams {
  family_name: string;
  year_published?: number;
  latest?: boolean;
  scope_code?: number;
}

interface BiogeographicalRealmParams {
  code: string;
  page?: number;
  year_published?: number;
  latest?: boolean;
  scope_code?: number;
}

interface ComprehensiveGroupParams {
  name: string;
  page?: number;
  year_published?: number;
  latest?: boolean;
  scope_code?: number;
}

interface ConservationActionsParams {
  code: string;
  page?: number;
  year_published?: number;
  latest?: boolean;
  scope_code?: number;
}

interface CountriesParams {
  code: string;
  page?: number;
  year_published?: number;
  latest?: boolean;
  scope_code?: number;
}

interface FAOParams {
  code: string;
  page?: number;
  year_published?: number;
  latest?: boolean;
  scope_code?: number;
}

interface GrowthFormsParams {
  code: string;
  page?: number;
  year_published?: number;
  latest?: boolean;
  scope_code?: number;
}

interface HabitatsParams {
  code: string;
  page?: number;
  year_published?: number;
  latest?: boolean;
  scope_code?: number;
}

interface PopulationTrendsParams {
  code: string;
  page?: number;
  year_published?: number;
  latest?: boolean;
  scope_code?: number;
}

interface RedListCategoriesParams {
  code: string;
  page?: number;
  year_published?: number;
  latest?: boolean;
  scope_code?: number;
}

interface ResearchParams {
  code: string;
  page?: number;
  year_published?: number;
  latest?: boolean;
  scope_code?: number;
}

interface ScopesParams {
  code: string;
  page?: number;
  year_published?: number;
  latest?: boolean;
}

interface StressesParams {
  code: string;
  page?: number;
  year_published?: number;
  latest?: boolean;
  scope_code?: number;
}

interface SystemsParams {
  code: string;
  page?: number;
  year_published?: number;
  latest?: boolean;
  scope_code?: number;
}

interface ThreatsParams {
  code: string;
  page?: number;
  year_published?: number;
  latest?: boolean;
  scope_code?: number;
}

interface UseAndTradeParams {
  code: string;
  page?: number;
  year_published?: number;
  latest?: boolean;
  scope_code?: number;
}

export { IUCNredlistOptions, IUCNredlistFetch };
