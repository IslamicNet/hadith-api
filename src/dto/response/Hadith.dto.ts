class UrduEnglishText {
  urdu: string;
  english: string;
}

class HadithDTO {
  id: string;
  uci: string;
  hadithNumber: number;
  bookNumber: number;
  arabic: string;
  isSahih: boolean;
  bookName: UrduEnglishText;
  chapter: UrduEnglishText;
  translations: UrduEnglishText;
}

export default HadithDTO;
