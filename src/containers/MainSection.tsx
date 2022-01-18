import { useQuery, useReactiveVar } from '@apollo/client';
import MainSection from '../components/MainSection/MainSection';
import { GET_TOPIC } from '../operations/queries/getTopic';
import {mutations} from '../operations/mutations';
import { searchTermVar } from '../cache';

const Main = () => {
  const search = useReactiveVar(searchTermVar);
  const {loading, data} = useQuery(GET_TOPIC, { variables: { name: search.term } });
  const { searchMutation } = mutations;

  if(loading) return <div>loading...</div>;
  if(!data?.topic) return <div>No topics found</div>;

  return (
    <MainSection
      topics={data.topic.relatedTopics}
      search={search}
      actions={{ searchMutation }}
    />
  )
}

export default Main;
