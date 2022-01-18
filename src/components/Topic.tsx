import { FC } from 'react'; 

interface TopicProps {
  name: string;
  stargazerCount: number;
  actions: any;
}

const Topic: FC<TopicProps> = ({name, stargazerCount, actions}) => {

  const onClick = (name: string) => () => {
    actions.searchMutation({ term: name });
  };

  return (
    <div className="topic" onClick={onClick(name)}>
      <span className="name">{name}</span>
      <span className="stargazerCount">{stargazerCount}</span> 
    </div>
  );
};

export default Topic;
