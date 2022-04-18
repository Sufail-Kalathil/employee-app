import {Injectable} from '@angular/core';
import {config} from "../config/constants/config";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() {
  }

  getFullUrl(endPoint: string = ''): string {
    return `${config.apiBaseUrl}${endPoint}`;
  }
}
