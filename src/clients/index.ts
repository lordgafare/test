import axios, { AxiosInstance } from 'axios'
import Cookies from 'js-cookie'

interface OptionInstance {
  apiKey?: boolean
  token?: boolean
  responseType?: 'json' | 'blob' | 'arraybuffer' | 'text' | 'stream'
  multipart?: boolean
}

function InstanceHttps({
  apiKey,
  token,
  responseType = 'json',
  multipart = false,
}: OptionInstance): AxiosInstance {
  const getToken = Cookies.get('token') ?? ''
  const headers: Record<string, string> = {
    accept: 'application/json',
  }

  if (token) {
    headers.Authorization = `Bearer ${getToken}`
  }

  if (apiKey) {
    headers['api-key'] = process.env.REACT_APP_API_KEY ?? ''
  }

  if (multipart) {
    headers['Content-Type'] = 'multipart/form-data'
  } else {
    headers['Content-Type'] = 'application/json'
  }

  const Https = axios.create({
    baseURL: process.env.REACT_APP_HOST,
    headers,
    responseType,
  })

  return Https
}

export default InstanceHttps