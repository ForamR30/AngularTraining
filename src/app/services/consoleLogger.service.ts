import { ILoggerService } from "./loggerContract.service";

export class ConsoleLoggerService implements ILoggerService{
  write(message:string){
    console.log(`console logging... ${message}`);
  }
}