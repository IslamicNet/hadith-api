import { Service as AutoInjection } from "typedi";
import { MongoRepository } from "typeorm";
import Database from "../database";
import Hadith from "./entity/Hadith.entity";
import HadithBooks from "./entity/HadithBooks.entity";

interface IHadith {
  getHadithBooks(collectionName: string): Promise<HadithBooks>;

  getHadithByHadithNumber(
    collectionName: string,
    hadithNumber: number
  ): Promise<Hadith>;
}

@AutoInjection()
class HadithRepo implements IHadith {
  private readonly repo: MongoRepository<Hadith>;
  private readonly booksRepo: MongoRepository<HadithBooks>;

  public constructor() {
    this.repo = Database.getRepository(Hadith);
    this.booksRepo = Database.getRepository(HadithBooks);
  }

  private setRepositoryCollectionName(collectionName: string) {
    this.repo.metadata.tableName = collectionName;
  }

  /**
   * Get Hadith Books name
   * @param collectionName
   * @returns
   */
  async getHadithBooks(collectionName: string): Promise<HadithBooks> {
    const books: HadithBooks = await this.booksRepo.findOne({
      _id: collectionName,
    });
    return books;
  }

  /**
   * Get Hadith by Hadith Number
   * @param collectionName
   * @param hadithNumber
   * @returns
   */
  async getHadithByHadithNumber(
    collectionName: string,
    hadithNumber: number
  ): Promise<Hadith> {
    this.setRepositoryCollectionName(collectionName);

    const hadith: Hadith = await this.repo.findOne({
      hadithNumber: hadithNumber,
    });
    return hadith;
  }
}

export default HadithRepo;
