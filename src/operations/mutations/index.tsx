import createSearchMutation from './setSearchTerm';
import {searchTermVar} from '../../cache';

export const mutations = {
  searchMutation: createSearchMutation(searchTermVar)
}
