
export interface IDefineConfig {
  input: string;
  output: string;
  library: 'next-i18next' | 'react-i18next'
}

export interface ITemplates {
  paths: string[];
  interfaceNames: string[];
  library: 'next-i18next' | 'react-i18next'
}
