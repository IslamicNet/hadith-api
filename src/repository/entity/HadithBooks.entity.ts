import {
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
  PrimaryColumn,
} from "typeorm";

class Book {
  number: number;
  urdu: string;
  english: string;
}

@Entity()
class HadithBooks {
  _id: string;

  @ObjectIdColumn()
  id: ObjectID | string; // collection name is default id

  @Column()
  books: Book[];
}

export default HadithBooks;
