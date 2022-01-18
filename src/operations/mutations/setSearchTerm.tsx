import {ReactiveVar} from '@apollo/client'
import {Search} from '../../models/Search'

export default (searchTermVar: ReactiveVar<Search>) => {
  return (search: Search) => {
    searchTermVar(search)
  }
}
