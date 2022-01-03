import { Entity } from "typeorm";
import Hadith from "./Hadith.entity";

@Entity({ name: "bukhari" })
class Bukhari extends Hadith {}

export default Bukhari;
