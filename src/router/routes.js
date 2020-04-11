import MainLayout from 'layouts/MainLayout';
import PageIndex from 'pages/Index';
import PageDatenschutz from 'pages/Datenschutz';
import PageImpressum from 'pages/Impressum';
import PageError404 from 'pages/Error404.vue';

const routes = [{
  path: '/',
  component: MainLayout,
  children: [{
      path: '',
      component: PageIndex
    },
    {
      path: 'datenschutz',
      component: PageDatenschutz
    },
    {
      path: 'impressum',
      component: PageImpressum
    }
  ]
}]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: PageError404
  })
}

export default routes
