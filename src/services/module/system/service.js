import apiService from '../../api'

const SystemServices = {}

SystemServices.GET_SYSTEM_CONFIG = async () => {
  return await apiService.GET(`/v1/config/system`)
}

export default SystemServices
