import { ILoggerService } from "./loggerContract.service";

export class FileLoggerService implements ILoggerService{
  write(message:string){
    console.log(`file logging... ${message}`);
  }
}