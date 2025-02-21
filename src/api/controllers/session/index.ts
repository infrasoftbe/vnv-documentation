import { Controller, Get, Route, Tags , Path , OperationId , Security } from "tsoa";

@Route("sessions")
@Tags("Session")
export class SessionController extends Controller {

  @Get()
  @OperationId('getAllSession')
  @Security("api_key")
  public async getSessions(): Promise<{ id: number; name: string }[]> {
    return [{ id: 1, name: "John Doe" }];
  }

  @Get("{sessionId}")
  @OperationId('getOneSession')
  @Security("api_key")
  public async getSession( @Path("sessionId") sessionId : string ): Promise<{ id: number; name: string }[]> {
    return [{ id: 1, name: "John Doe" }];
  }
  
}