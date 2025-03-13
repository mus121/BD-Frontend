export type Tabs = {
  label: string;
  value: string;
};

export type TabsComponentProps = {
  tabs: Tabs[];
  activeTab: string;
  onTabChange: (value: string) => void;
};
