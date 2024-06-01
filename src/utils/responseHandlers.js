import { toast } from "react-toastify"

export const handleResponse = response => {
  return response.data
}

export const handleError = error => {
  toast.error(error.message)
  return null
}