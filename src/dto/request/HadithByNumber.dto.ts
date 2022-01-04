import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";
import { InParams } from "../../utils/Decorators";

class HadithByNumberDTO {
  @InParams()
  @IsNotEmpty()
  collectionName: string;

  @InParams()
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  hadithNumber: number;
}

export default HadithByNumberDTO;
