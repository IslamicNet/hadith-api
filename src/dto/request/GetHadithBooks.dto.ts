import { IsEnum, IsNotEmpty } from "class-validator";
import { CollectionName } from "../../utils/Constants";
import { InParams } from "../../utils/Decorators";

class GetHadhithBooksDTO {
  @InParams()
  @IsNotEmpty()
  @IsEnum(CollectionName)
  collectionName: string;
}

export default GetHadhithBooksDTO;
