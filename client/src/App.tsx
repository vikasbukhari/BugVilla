import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router, Route, Switch } from 'react-router-dom';
import Notifications from 'react-notify-toast';
import AuthRoute from 'components/AuthRoute';

import { toast } from 'components/common/Toast';
import socket from 'utils/socket';
import history from 'utils/history';
import GlobalStyles from './styles/globalStyles';
import theme from './theme';

import Login from 'components/Login/Login';
import Signup from 'components/Signup/Signup';

import Home from 'pages/Home/Home';
import Dashboard from 'pages/Dashboard/Dashboard';
import NotFound from 'components/NotFound';
import ErrorBoundary from 'components/ErrorBoundary';

socket.on('received-notification', (data: any) => {
  toast.info('New notifications available');
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Notifications
          options={{
            zIndex: 200,
            top: '85%',
            colors: {
              error: {
                color: theme.colors.common.red,
                backgroundColor: theme.colors.common.redlight
              },
              success: {
                color: theme.colors.common.green,
                backgroundColor: theme.colors.common.greenlight
              },
              info: {
                color: theme.colors.brand.primary,
                backgroundColor: theme.colors.brand.accent
              }
            }
          }}
        />
        <GlobalStyles />
        <ErrorBoundary>
          <div>
            <Switch>
              <Route path="/" exact>
                <Home right={Signup} />
              </Route>
              <Route path="/login" exact>
                <Home right={Login} />
              </Route>

              <AuthRoute path="/" component={Dashboard} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  );
};

export default App;
