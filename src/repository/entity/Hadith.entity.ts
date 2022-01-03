import { Transform } from "class-transformer";
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

class UrduEnglishText {
  urdu: string;
  english: string;
}

@Entity()
class Hadith {
  @ObjectIdColumn()
  @Transform(({ value }) => value.toString())
  id: ObjectID | string; // uci will be the default id

  @Column()
  uci: string;

  @Column()
  hadithNumber: number;

  @Column()
  bookNumber: number;

  @Column()
  arabic: string;

  @Column()
  isSahih: boolean;

  @Column()
  bookName: UrduEnglishText;

  @Column()
  chapter: UrduEnglishText;

  @Column()
  translations: UrduEnglishText;
}

export default Hadith;
