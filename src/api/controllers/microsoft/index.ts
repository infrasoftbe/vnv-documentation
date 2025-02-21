import { Controller, Get, Route, Tags } from "tsoa";

@Route("ms")
@Tags("Microsoft")
export class MicrosoftController extends Controller {

  @Get("/")
  public async getMicrosoft(): Promise<{ id: number; name: string }[]> {
    return [{ id: 1, name: "John Doe" }];
  }
  
}