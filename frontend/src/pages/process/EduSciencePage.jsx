import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import Layout from '../../components/common/Layout';
import Loader from '../../components/common/Loader';
import EduScienceTable from '../../components/Tables/EduScienceTable';

const GetEduSciencePage = loader('../../graphql/pages/process/GetEduSciencePage.gql');

function EduSciencePage() {
  const { loading, error, data } = useQuery(GetEduSciencePage);
  const page = data?.page.data?.attributes;
  const eduSciencePrograms = data?.eduSciencePrograms.data;

  if (loading) return <Loader />;
  if (error) return <Redirect to="/error" />;
  return (
    <Layout title={page.title} subtitle={page.subtitle}>
        <EduScienceTable programs={eduSciencePrograms} />
    </Layout>
  );
}

export default EduSciencePage;
