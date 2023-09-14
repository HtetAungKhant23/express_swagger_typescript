import { Get, Route } from "tsoa";

interface PingResponse {
  message: string;
}

@Route("hay")
export default class PingController {
  @Get("/")
  public async getMessage(): Promise<PingResponse> {
    return {
      message: "hello",
    };
  }
}
