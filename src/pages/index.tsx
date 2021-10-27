import React from 'react';
import AutoSave from '../components/AutoSave';
import Layout from '../components/containers/Layout';
import Options from '../components/Options';
import Results from '../components/Results';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="flex-1 flex border-2">
        <AutoSave />
        <Results />
        <Options />
      </div>
    </Layout>
  );
};

export default Home;
