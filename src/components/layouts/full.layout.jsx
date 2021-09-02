import {
    Route
  } from "react-router-dom";

import { styled } from '@material-ui/core';

const FullLayoutRoot = styled('div')(
    ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: '100%',
        overflow: 'hidden',
        width: '100%'
    })
);

const FullLayoutWrapper = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
});

const FullLayoutContainer = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
});

const FullLayoutContent = styled('div')({
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
});

const FullLayout = ({children}) => (
    <FullLayoutRoot>
        <FullLayoutWrapper>
            <FullLayoutContainer>
                <FullLayoutContent>
                      {children}
                </FullLayoutContent>
            </FullLayoutContainer>
        </FullLayoutWrapper>
    </FullLayoutRoot>
);

const FullLayoutRouter = ({component: Component, ...rest}) => {  
    return (  
      <Route {...rest} render={props => (  
        <FullLayout>  
            <Component {...props} />  
        </FullLayout>  
      )} />  
    )  
  };  
export default FullLayoutRouter;