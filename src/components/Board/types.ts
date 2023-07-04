export interface OptionType {
  Answer: string;
  IsCorrect: boolean;
}

export interface CurrentQuestion {
  Value: string;
  QuestionText: string;
  Options: Array<{
    Answer: string;
    IsCorrect: boolean;
  }>;
}
