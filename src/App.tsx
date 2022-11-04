import { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import Counter from 'components/Counter';
import RegistrationForm from 'components/RegistrationForm';
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
      <Heading as="h2" mb={6}>
        Add your info
      </Heading>
      <RegistrationForm />
    </>
  );
};

export default App;
