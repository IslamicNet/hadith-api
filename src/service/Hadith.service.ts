import { Service as AutoInjection } from "typedi";
import HadithDTO from "../dto/response/Hadith.dto";
import HadithBooksDTO from "../dto/response/HadithBooks.dto";
import HadithRepo from "../repository/Hadith.repo";

interface IHadithService {
  getHadithBooks(collectionName: string): Promise<HadithBooksDTO>;
  getHadithByHadithNumber(
    collectionName: string,
    hadithNumber: number
  ): Promise<HadithDTO>;
}

@AutoInjection()
class HadithService implements IHadithService {
  public constructor(private readonly hadithRepo: HadithRepo) {}

  /**
   * Get Hadith Books
   * @param collectionName
   * @returns
   */
  async getHadithBooks(collectionName: string): Promise<HadithBooksDTO> {
    const books: HadithBooksDTO = <HadithBooksDTO>(
      await this.hadithRepo.getHadithBooks(collectionName)
    );
    return books;
  }

  /**
   * Get Hadith by hadith number
   * @param collectionName
   * @param hadithNumber
   * @returns
   */
  async getHadithByHadithNumber(
    collectionName: string,
    hadithNumber: number
  ): Promise<HadithDTO> {
    const hadith: HadithDTO = <HadithDTO>(
      await this.hadithRepo.getHadithByHadithNumber(
        collectionName,
        hadithNumber
      )
    );
    return hadith;
  }
}

export default HadithService;
