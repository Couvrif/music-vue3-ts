import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { MYRequestConfig, MYRequestInterceptors } from './type'
import useMainStore from '@/store/modules/main'

const mainStore = useMainStore()

const DEFAULT_LOADING = true

class MYRequest {
  instance: AxiosInstance
  interceptors?: MYRequestInterceptors
  showLoading: boolean
  loading: any

  constructor(config: MYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    // 单个实例化MYRequest的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 全部实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        //如果showloading为true则执行加载蒙版
        if (this.showLoading) {
          mainStore.loading = true
        }
        return config
      },
      (err) => {
        console.log('全部实例都有的请求失败', config)
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        if (this.showLoading) {
          mainStore.loading = false
        }
        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败')
        }
        return res.data
      },
      (err) => {
        mainStore.loading = false
        return err
      }
    )
  }

  request<T>(config: MYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if (config.showLoading === false) {
        this.showLoading = false
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          // 执行最后把showloading重新置为true
          this.showLoading = DEFAULT_LOADING

          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: MYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T = any>(config: MYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  put<T = any>(config: MYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PUT' })
  }

  patch<T = any>(config: MYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }

  delete<T = any>(config: MYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }
}

export default MYRequest
