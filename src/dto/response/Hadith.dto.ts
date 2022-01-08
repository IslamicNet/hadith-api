/**
 * @openapi
 *   components:
 *     schemas:
 *       Hadith:
 *         type: object
 *         properties:
 *           id:
 *             type: string
 *           uci:
 *             type: string
 *           hadithNumber:
 *             type: number
 *           bookNumber:
 *             type: number
 *           arabic:
 *             type: string
 *           isSahih:
 *             type: boolean
 *           bookName:
 *             type: object
 *             properties:
 *               urdu:
 *                 type: string
 *               english:
 *                 type: string
 *           chapter:
 *             type: object
 *             properties:
 *               urdu:
 *                 type: string
 *               english:
 *                 type: string
 *           translations:
 *             type: object
 *             properties:
 *               urdu:
 *                 type: string
 *               english:
 *                 type: string
 */

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
