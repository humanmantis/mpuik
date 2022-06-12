import React from "react";
import { Redirect } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";
import Layout from "../../components/common/Layout";
import Loader from "../../components/common/Loader";
import BlockTitle from "../../components/common/BlockTitle";
import SyllabiTable from "../../components/Tables/SyllabiTable";

const GetSyllabiPage = loader("../../graphql/pages/student/GetSyllabiPage.gql");

function Syllabus() {
  const { loading, error, data } = useQuery(GetSyllabiPage);
  const page = data?.page.data?.attributes;
  const internalSillabi = data?.syllabi.data.filter(
    (syllabus) => syllabus.attributes.isinternal
  );
  const externalSillabi = data?.syllabi.data.filter(
    (syllabus) => !syllabus.attributes.isinternal
  );

  if (loading) return <Loader />;
  if (error) return <Redirect to="/error" />;
  return (
    <Layout title={page.title} subtitle={page.subtitle}>
      {!!internalSillabi?.length > 0 && (
        <>
          <BlockTitle title={"Силабуси дисциплін кафедри"} />
          <SyllabiTable syllabi={internalSillabi} />
        </>
      )}
      {!!externalSillabi?.length > 0 && (
        <>
          <BlockTitle title={"Силабуси дисциплін для інших спеціальностей"} />
          <SyllabiTable syllabi={externalSillabi} />
        </>
      )}
    </Layout>
  );
}

export default Syllabus;
