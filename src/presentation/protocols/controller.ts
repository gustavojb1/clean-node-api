import type { HttpRequest, HttpResponse } from '../protocols/http'

export interface Controller {
  handle: (httpRequest: HttpRequest) => HttpResponse | null
}
