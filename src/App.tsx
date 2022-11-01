import { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import Counter from 'components/Counter';
import Timer from 'components/Timer';
import './App.css';

const title = import.meta.env.VITE_APP_TITLE;
console.dir(import.meta.env);

const App: FC = () => {
  return (
    <>
      <Heading as="h1" mb={12}>
        {title}
      </Heading>
      <Counter />
      <Timer />
    </>
  );
};

export default App;
