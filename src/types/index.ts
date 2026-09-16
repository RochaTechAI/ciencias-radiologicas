export type Modality = 'RX' | 'TC' | 'RM' | 'US';

export interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  content?: string;
}

export interface ClinicalCase {
  _id: string;
  title: string;
  modality: Modality;
  patientHistory: string;
  imageUrl: string;
  findings: string;
  diagnosis: string;
}