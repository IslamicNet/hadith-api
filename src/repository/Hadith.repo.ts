import { Service as AutoInjection } from "typedi";
import { MongoRepository } from "typeorm";
import Database from "../database";
import Hadith from "./entity/Hadith.entity";

interface IHadith {
  getHadithByHadithNumber(
    collectionName: string,
    hadithNumber: number
  ): Promise<Hadith>;
}

@AutoInjection()
class HadithRepo implements IHadith {
  private readonly repo: MongoRepository<Hadith>;

  public constructor() {
    this.repo = Database.getRepository(Hadith);
  }

  private setRepositoryCollectionName(collectionName: string) {
    this.repo.metadata.tableName = collectionName;
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
