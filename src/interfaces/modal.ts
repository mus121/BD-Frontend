export type NewsProps = {
  date: string;
  buttonText: string;
  title: string;
  onButtonClick?: () => void;
};

export type EventDetailsProps = {
  title: string;
  description: string;
  tag: string;
};

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  personTitle: string;
  personCompany: string;
  personName: string;
  personLocation: string;
  score: number;
  companyScore: number;
  roleDescription: any;
  title_reasoning: any;
  children?: React.ReactNode;
};

export type ModalCard = {
  personName: string;
  personLocation: string;
  personTitle: string;
  personCompany: string;
  score: number;
};

export type EventsDetail = {
  score: number;
  // roleDescription: Array<string> | any;
  // title_reasoning: Array<string>;
};

export type Tabs = {
  label: string;
  value: string;
};

export type TabsComponentProps = {
  tabs: Tabs[];
  activeTab: string;
  onTabChange: (value: string) => void;
};
