const NavConfig = [
  {
    text: 'home',
    icon: 'home',
    url: '/home',
  }, {
    text: 'demo',
    icon: 'book',
    url: '/demo',
    children: [
      {
        text: 'todo',
        icon: 'bars',
        url: '/demo/todo'
      }, {
        text: 'products',
        icon: 'bars',
        url: '/demo/products'
      }
    ]
  },
]

export default NavConfig
