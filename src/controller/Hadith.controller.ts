import { plainToClass } from "class-transformer";
import { Request } from "express";
import { Service as AutoInjection } from "typedi";
import HadithByNumberDTO from "../dto/request/HadithByNumber.dto";
import HadithDTO from "../dto/response/Hadith.dto";
import validateRequest from "../middleware/requestValidator.middleware";
import HadithService from "../service/Hadith.service";
import BaseController from "./Base.controller";

@AutoInjection()
class HadithController extends BaseController {
  public constructor(private readonly hadithService: HadithService) {
    super();
  }

  protected initializeEndpoints(): void {
    this.addAsyncEndpoint(
      "GET",
      "/:collectionName/:hadithNumber",
      this.getHadithByHadithNumber,
      validateRequest(HadithByNumberDTO)
    );
  }

  private getHadithByHadithNumber = async (req: Request) => {
    const hadith: HadithByNumberDTO = plainToClass(
      HadithByNumberDTO,
      req.params
    );

    const hadithData: HadithDTO =
      await this.hadithService.getHadithByHadithNumber(
        hadith.collectionName,
        hadith.hadithNumber
      );
    return hadithData;
  };
}

export default HadithController;
