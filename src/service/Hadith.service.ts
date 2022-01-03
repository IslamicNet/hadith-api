import { Service as AutoInjection } from "typedi";
import HadithDTO from "../dto/response/Hadith.dto";

interface IHadithService {
  getHadithById(id: string): Promise<HadithDTO>;
}

@AutoInjection()
class HadithService implements IHadithService {
  public constructor() {}

  async getHadithById(id: string): Promise<HadithDTO> {}
}
