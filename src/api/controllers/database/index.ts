import { Controller, Get, Route, Tags , Security } from "tsoa";

@Route("database")
@Tags("Database")
export class databaseController extends Controller {

  @Security("api_key")
  @Get("/")
  public async getDatabase(): Promise<{ id: number; name: string }[]> {
    return [{ id: 1, name: "John Doe" }];
  }
  
}