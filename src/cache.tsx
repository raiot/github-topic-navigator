import { InMemoryCache, makeVar } from "@apollo/client";
import { Search } from "./models/Search";
export const cache: InMemoryCache = new InMemoryCache({
   typePolicies: {
       Query: {
           fields: {
               search: {
                   read () {
                       return searchTermVar();
                   }
               }
           }
       }
   }
});

export const searchTermVar = makeVar<Search>({ term: 'react' });