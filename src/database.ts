import {
  Connection,
  createConnection,
  EntityTarget,
  MongoRepository,
} from "typeorm";

class Database {
  public static connection: Connection;

  public static async initialize() {
    this.connection = await createConnection();
  }

  public static getRepository<Entity>(
    target: EntityTarget<Entity>
  ): MongoRepository<Entity> {
    return this.connection.getMongoRepository(target);
  }
}

export default Database;
