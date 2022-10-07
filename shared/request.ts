export type ResponseStatus = 'success' | 'warning' | 'error'

export interface RequestResponse<T = undefined> {
  status: ResponseStatus
  description?: string
  data?: T
}
