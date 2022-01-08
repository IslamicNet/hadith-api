import { Type } from "class-transformer";
import { IsEnum, IsNotEmpty, IsNumber } from "class-validator";
import { CollectionName } from "../../utils/Constants";
import { InParams } from "../../utils/Decorators";

class HadithByNumberDTO {
  @InParams()
  @IsNotEmpty()
  @IsEnum(CollectionName)
  collectionName: string;

  @InParams()
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  hadithNumber: number;
}

export default HadithByNumberDTO;
