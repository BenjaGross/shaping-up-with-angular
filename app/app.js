(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
   {
    name: 'Dodecahedron',
    price: 2.95,
    description: '. . .',
    specifications: '2swb3 carrots',
    reviews: 'So good',
    canPurchase: true,
    soldOut: false,
    images: [
    {
      full: 'dodecahedron-01-full.jpg',
      thumb: 'dodecahedron-01-thumb.jpg'
    }
    ]

  },
  {
    name: "Pentagonal Gem",
    price: 5.95,
    description: ". . .",
    specifications: '13brdd5 carrots',
    reviews: 'So good',
    canPurchase: true,
    soldOut: false,
    images: [
    {
      full: 'pentagonal-01-full.jpg',
      thumb: 'pentagonal-01-thumb.jpg'
    }
    ]
  }]
})();