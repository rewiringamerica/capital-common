/* eslint-disable @typescript-eslint/no-explicit-any */
// Types for Financial Authorities and Loan Programs

export enum AuthorityType {
  CITY = "city",
  COUNTY = "county",
  UTILITY = "utility",
  FEDERAL = "federal",
  STATE = "state",
  BANK = "bank",
  CREDIT_UNION = "credit_union",
  OTHER = "other",
}

// NOTE: This list of enum values should be kept in sync with the values in the 'incentive_admin' repo.
// File location: incentive_admin/prisma/schema/capital.prisma
export enum ProjectType {
  WEATHERIZATION = "WEATHERIZATION",
  HEATING_COOLING = "HEATING_COOLING",
  WATER_HEATER = "WATER_HEATER",
  ELECTRICAL_PANEL_WIRING = "ELECTRICAL_PANEL_WIRING",
  EV_AND_CHARGER = "EV_AND_CHARGER",
  EV_CHARGER = "EV_CHARGER",
  SOLAR = "SOLAR",
  ENERGY_AUDIT = "ENERGY_AUDIT",
  BATTERY_INSTALLATION = "BATTERY_INSTALLATION",
  WATER_IRRIGATION = "WATER_IRRIGATION",
  ENERGY_STAR_APPLIANCES = "ENERGY_STAR_APPLIANCES",
  GEOTHERMAL = "GEOTHERMAL",
  WIND = "WIND",
}

export enum LoanProgramStatus {
  DRAFT = "DRAFT",
  IN_REVIEW = "IN_REVIEW",
  APPROVED = "APPROVED",
  PUBLISHED = "PUBLISHED",
  ARCHIVED = "ARCHIVED",
}

export enum State {
  AL = "AL",
  AK = "AK",
  AS = "AS",
  AZ = "AZ",
  AR = "AR",
  CA = "CA",
  CO = "CO",
  CT = "CT",
  DE = "DE",
  DC = "DC",
  FM = "FM",
  FL = "FL",
  GA = "GA",
  GU = "GU",
  HI = "HI",
  ID = "ID",
  IL = "IL",
  IN = "IN",
  IA = "IA",
  KS = "KS",
  KY = "KY",
  LA = "LA",
  ME = "ME",
  MH = "MH",
  MD = "MD",
  MA = "MA",
  MI = "MI",
  MN = "MN",
  MS = "MS",
  MO = "MO",
  MT = "MT",
  NE = "NE",
  NV = "NV",
  NH = "NH",
  NJ = "NJ",
  NM = "NM",
  NY = "NY",
  NC = "NC",
  ND = "ND",
  MP = "MP",
  OH = "OH",
  OK = "OK",
  OR = "OR",
  PW = "PW",
  PA = "PA",
  PR = "PR",
  RI = "RI",
  SC = "SC",
  SD = "SD",
  TN = "TN",
  TX = "TX",
  UT = "UT",
  VT = "VT",
  VI = "VI",
  VA = "VA",
  WA = "WA",
  WV = "WV",
  WI = "WI",
  WY = "WY",
}

export type Image = {
  src: string;
  height: number;
  width: number;
};

export type EligibleProjectType = {
  type: ProjectType;
};

export type FinancialAuthority = {
  id: number;
  authority_type: AuthorityType;
  name: string;
  description?: string | null;
  state: State;
  city: string | null;
  image: Image;
  created_at?: Date;
  updated_at?: Date;
};

export type LoanProgramTerms = {
  id: number;
  min_credit_score?: number;
  max_debt_to_income?: number;
  min_loan_amount?: number;
  max_loan_amount?: number;
  min_interest_rate?: number;
  max_interest_rate?: number;
  max_repayment_months?: number;
  created_at: Date;
  updated_at: Date;
};

export type LoanProgram = {
  id: number;
  loan_program_key: string;
  name: string;
  description: string;
  description_langs?: Record<string, string>;
  status: LoanProgramStatus;
  website_url: string;
  financial_authority_id?: number;
  financial_authority: FinancialAuthority;
  eligible_project_types: { type: ProjectType }[];
  loan_program_terms_id?: number;
  loan_program_terms?: LoanProgramTerms;
  state?: State;
  is_national: boolean;
  metadata: Record<string, any>;
  created_at: Date;
  updated_at: Date;
};
