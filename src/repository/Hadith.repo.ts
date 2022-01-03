import { Service as AutoInjection } from "typedi";
import { EntityTarget, MongoRepository } from "typeorm";
import Database from "../database";
import Hadith from "./entity/Hadith.entity";

interface IHadith<HadithEntity extends Hadith> {
  getHadithById(id: string): Promise<HadithEntity>;
}

@AutoInjection()
class HadithRepo<HadithEntity extends Hadith> implements IHadith<HadithEntity> {
  private readonly repo: MongoRepository<HadithEntity>;

  public constructor(entity: EntityTarget<HadithEntity>) {
    this.repo = Database.getRepository(entity);
  }

  /**
   * Get by id
   * @param id
   * @returns
   */
  async getHadithById(id: string): Promise<HadithEntity> {
    const hadith: HadithEntity = await this.repo.findOne(id);
    return hadith;
  }
}

export default HadithRepo;
