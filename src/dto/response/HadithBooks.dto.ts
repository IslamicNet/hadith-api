/**
 * @openapi
 *   components:
 *     schemas:
 *       HadithBooks:
 *         type: object
 *         properties:
 *           id:
 *             type: string
 *           books:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 number:
 *                   type: number
 *                 urdu:
 *                   type: string
 *                 english:
 *                   type: string
 */
class Book {
  number: number;
  urdu: string;
  english: string;
}

class HadithBooksDTO {
  id: string; // collection name is default id
  books: Book[];
}

export default HadithBooksDTO;
