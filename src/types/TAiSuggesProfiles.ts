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
  reasoning: {
    Title: string;
    ReasoningTitle: string;
    Reasoning: string;
  }[];
  title_reasoning: string;
  title_score: {
    role_relevance_score: { score: number; reasoning: string };
    organizational_fit_score: { score: number; reasoning: string };
    networking_potential_score: { score: number; reasoning: string };
    shared_vision_alignment_score: { score: number; reasoning: string };
  };
  company_score: {
    'Domain Alignment score': { score: number; Reason: string };
    'Partnership score': { score: number; Reason: string };
    'Market Competitiveness': { score: number; Reason: string };
  };
};

export type AiSuggestionCardProps = {
  personName: string;
  personLocation: string;
  personTitle: string;
  personCompany: string;
  companyScore: Array<string> | any;
  roleDescription: Array<string> | any;
  reasoning: Array<string> | any;
};
