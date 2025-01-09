export type SuggestProfile = {
  person_id: string;
  full_name: string;
  location: string;
  company: string;
  title: string;
  role_description: {
    Heading: string;
    Summary: string;
  };
  title_reasoning: {
    Title: string;
    ReasoningTitle: string;
    Reasoning: string;
  }[];
  company_score: string;
};

export type Reasoning = {
  [key: string]: string;
};

export type RoleDescription = {
  Heading: string;
  Summary: string;
};

export type PersonInfo = {
  person_id: string;
  full_name: string;
  location: string;
  company: string;
  personId: string;
  publicIdentifier: string;
  link: string;
  title: string;
  startDate: string;
  companyUniversalName: string | null;
  roleDescription: RoleDescription;
  title_reasoning: Reasoning[];
  role_description: Reasoning[];
  company_score: number;
};

export type PersonData = {
  person_info: PersonInfo[];
};

export type AiSuggestionCardProps = {
  personName: string;
  personLocation: string;
  personTitle: string;
  personCompany: string;
  companyScore: Array<string> | any;
  roleDescription: Array<string> | any;
  title_reasoning: Array<string> | any;
};

export type AiProfilesProp = {
  personName: string;
  personLocation: string;
  personTitle: string;
  personCompany: string;
};
