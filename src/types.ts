// Types for Financial Authorities and Loan Programs

export enum AuthorityType {
  CITY = "City",
  COUNTY = "County",
  UTILITY = "Utility",
  FEDERAL = "Federal",
  STATE = "State",
  BANK = "Bank",
  CREDIT_UNION = "Credit Union",
  OTHER = "Other",
}

export enum ProjectType {
  WEATHERIZATION = "weatherization",
  HEATING_COOLING = "heating_cooling",
  WATER_HEATER = "water_heater",
  ELECTRICAL_PANEL_WIRING = "electrical_panel_wiring",
  EV_AND_CHARGER = "ev_and_charger",
  SOLAR = "solar",
  ENERGY_AUDIT = "energy_audit",
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
  id: number;
  url: string;
};

// TODO: do we want to keep or remove the created/updated fields?
export type EligibleProjectType = {
  id: number;
  type: ProjectType;
  loanProgramId: number;
  createdAt: Date;
  updatedAt: Date;
};

export type FinancialAuthority = {
  id: number;
  type: AuthorityType;
  name: string;
  description?: string;
  state: State;
  city?: string;
  imageId?: number;
  createdAt: Date;
  updatedAt: Date;
};

export type LoanProgram = {
  id: number;
  name: string;
  description: string;
  descriptionLangs?: JSON;
  websiteUrl?: string;
  financialAuthorityId: number;
  eligibleProjectTypes: EligibleProjectType[];
  state?: State;
  isNational: boolean;
  metadata?: JSON;
  createdAt: Date;
  updatedAt: Date;
};
