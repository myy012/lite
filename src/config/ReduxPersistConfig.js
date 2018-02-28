/**
 * @desc [redux store持久化配置]
 */
// import immutablePersistenceTransform from '../services/ImmutablePersistenceTransform'
import { AsyncStorage } from 'react-native'

// More info here:  https://shift.infinite.red/shipping-persistant-reducers-7341691232b1
const REDUX_PERSIST = {
  active: false,
  reducerVersion: '1.0',
  storeConfig: {
    storage: AsyncStorage,
    blacklist: [], // 持久化忽略的reudcers的key
    // whitelist: [], Optionally, just specify the keys you DO want stored to
    // persistence. An empty array means 'don't store any reducers' -> infinitered/ignite#409
    // transforms: [immutablePersistenceTransform]
  }
}

export default REDUX_PERSIST
