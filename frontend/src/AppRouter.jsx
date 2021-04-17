import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ErrorBoundary from './components/error/ErrorBoundary';
import Loader from './components/common/Loader';

const Index = lazy(() => import('./pages/Index'));
const History = lazy(() => import('./pages/about/History'));
const Staff = lazy(() => import('./pages/about/Staff'));
const Employee = lazy(() => import('./pages/about/Employee'));
const ScientificWork = lazy(() => import('./pages/about/ScientificWork'));
const Cooperation = lazy(() => import('./pages/about/Cooperation'));
const Conference = lazy(() => import('./pages/about/Conference'));
const Graduates = lazy(() => import('./pages/about/Graduates'));
const Entrant = lazy(() => import('./pages/entrant/Entrant'));
const Program = lazy(() => import('./pages/entrant/Program'));
const WhyWe = lazy(() => import('./pages/entrant/WhyWe'));
const Brochures = lazy(() => import('./pages/entrant/Brochures'));
const Competition = lazy(() => import('./pages/student/Competition'));
const Contacts = lazy(() => import('./pages/Contacts'));
const Syllabus = lazy(() => import('./pages/student/Syllabus'));
const News = lazy(() => import('./pages/news'));
const NewsDetail = lazy(() => import('./pages/news/NewsDetail'));
const PageNotFound = lazy(() => import('./components/error/PageNotFound'));
const ErrorPage = lazy(() => import('./components/error/ErrorPage'));
const EducationalProgramms = lazy(() =>
  import('./pages/student/EducationalProgramms')
);

function AppRouter() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" render={() => <Index />} />
            <Route exact path="/about/history" render={() => <History />} />
            <Route exact path="/about/staff" render={() => <Staff />} />
            <Route
              exact
              path="/about/staff/:slug"
              render={(props) => <Employee params={props.match.params} />}
            />
            <Route
              exact
              path="/about/scientific-work"
              render={() => <ScientificWork />}
            />
            <Route
              exact
              path="/about/cooperation"
              render={() => <Cooperation />}
            />
            <Route
              exact
              path="/about/conference"
              render={() => <Conference />}
            />
            <Route exact path="/about/graduates" render={() => <Graduates />} />
            <Route exact path="/entrant" render={() => <Entrant />} />
            <Route exact path="/entrant/why-we" render={() => <WhyWe />} />
            <Route
              exact
              path="/entrant/brochures"
              render={() => <Brochures />}
            />
            <Route
              exact
              path="/entrant/:program"
              render={(props) => <Program params={props.match.params} />}
            />
            <Route
              exact
              path="/news/:category?"
              render={(props) => (
                <News
                  search={props.location.search}
                  params={props.match.params}
                />
              )}
            />
            <Route
              exact
              path="/news/:category/:slug"
              render={(props) => <NewsDetail params={props.match.params} />}
            />

            <Route
              exact
              path="/student/competitions"
              render={() => <Competition />}
            />

            <Route
              exact
              path="/student/educational-programs"
              render={() => <EducationalProgramms />}
            />
            <Route exact path="/student/syllabi" render={() => <Syllabus />} />
            <Route exact path="/contacts" render={() => <Contacts />} />
            <Route exact path="/error" render={() => <ErrorPage />} />
            <Route exact path="/404" render={() => <PageNotFound />} />
            <Route path="*" render={() => <Redirect to="/404" />} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default AppRouter;
