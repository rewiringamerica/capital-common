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
	Image: { src: string };
	created_at?: Date;
	updated_at?: Date;
};

export type LoanProgram = {
	id: number;
	name: string;
	description: string;
	description_langs?: Record<string, string>;
	website_url: string;
	financial_authority_id?: number;
	financial_authority: FinancialAuthority;
	eligible_project_types: { type: ProjectType }[];
	state: State;
	is_national: boolean;
	metadata: Record<string, any>;
	created_at: Date;
	updated_at: Date;
};
