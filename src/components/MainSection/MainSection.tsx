import Topic from '../Topic';
import {Topics} from '../../models/Topic';
import { SearchInput } from '../Search';
import './MainSection.css';
import { Search } from '../../models/Search';

interface MainSectionProps {
  topics: Topics;
  actions: any;
  search: Search;
}

const MainSection = ({topics, actions, search}: MainSectionProps) => {
  return (
    <section className="main">
      <div className="search">
        <SearchInput actions={actions} />
      </div>
      <small>Last search: {search.term} </small>
      {!!topics && topics.map(({name, stargazerCount}) => <Topic key={name} name={name} stargazerCount={stargazerCount} actions={actions}/>)}
    </section>
  );
};

export default MainSection;
