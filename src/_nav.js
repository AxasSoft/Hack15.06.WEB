export default [
  {
    component: 'CNavItem',
    name: 'Статистика',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
      text: 'NEW',
    },
  },
  {
    component: 'CNavTitle',
    name: 'Theme',
  },
  {
    component: 'CNavItem',
    name: 'Уведомления',
    to: '/dashboard',
    icon: 'cil-bell',
  },
  {
    component: 'CNavItem',
    name: 'Задачи',
    to: '/dashboard',
    icon: 'cil-pencil',
  },
  {
    component: 'CNavTitle',
    name: 'Components',
  },
  {
    component: 'CNavGroup',
    name: 'Base',
    to: '/base',
    icon: 'cil-puzzle',

  },
  {
    component: 'CNavGroup',
    name: 'Buttons',
    to: '/buttons',
    icon: 'cil-cursor',
    items: [
      {
        component: 'CNavItem',
        name: 'Buttons',
        to: '/buttons/standard-buttons',
      },
      {
        component: 'CNavItem',
        name: 'Button Groups',
        to: '/buttons/button-groups',
      },
      {
        component: 'CNavItem',
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Forms',
    to: '/forms',
    icon: 'cil-notes',
    items: [
      {
        component: 'CNavItem',
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: 'CNavItem',
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: 'CNavItem',
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: 'CNavItem',
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: 'CNavItem',
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: 'CNavItem',
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: 'CNavItem',
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: 'CNavItem',
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: 'CNavItem',
    name: 'Charts',
    to: '/charts',
    icon: 'cil-chart-pie',
  },
  {
    component: 'CNavGroup',
    name: 'Icons',
    to: '/icons',
    icon: 'cil-star',
  },

  {
    component: 'CNavItem',
    name: 'Widgets',
    to: '/widgets',
    icon: 'cil-calculator',
    badge: {
      color: 'primary',
      text: 'NEW',
      shape: 'pill',
    },
  }
]
