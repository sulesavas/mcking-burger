import Home from './screens/Home';
import Confirm from './screens/Confirm';

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Home />,
    title: 'Home Page',
    isLink: true
  },
  {
    path: '/confirm',
    component: () => <Confirm />,
    title: 'Confirm Page'
  },
]  