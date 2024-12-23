(function () {

  console.log('Plugin Ingredients')

  const Icon = `
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24" fill="#cccccc">    
    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
  </svg>
`;

class IngredientFunction {

  async execute(properties) {

    console.log('execute: GetRandomMemeAction')

    return 'ingrediants'
  }
}

const zyIngredientFunction = new IngredientFunction()


  const IngredientMetadata = {
    id: 'display-ingredients',
    icon: IconData,
    label: 'Display ingredients',
    category: 'JSON',
    format: 'text',
    properties: [{
      id: 'json',
      name: 'JSON object',
      type: 'text',
      tootip: '',
      default: '',
      main: true
    }]
  }

  zySdk.services.registry.registerFunction(IngredientMetadata, zyIngredientFunction)

})();