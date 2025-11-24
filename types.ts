export type BadgeType = 'success' | 'warning' | 'danger' | 'blue';

export interface MarketTrend {
  skill: string;
  growth: string;
  demand: string;
}

export interface CurriculumGap {
  subject: string;
  status: string;
  issue: string;
  suggestion: string;
}

export type ViewType = 'admin' | 'student';