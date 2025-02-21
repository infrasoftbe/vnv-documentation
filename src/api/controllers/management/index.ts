import { Controller, Get, Route, Tags } from "tsoa";

@Route("management")
@Tags("Management")
export class ManagementController extends Controller {

  @Get("/")
  public async getManagement(): Promise<{ id: number; name: string }[]> {
    return [{ id: 1, name: "John Doe" }];
  }
  
}