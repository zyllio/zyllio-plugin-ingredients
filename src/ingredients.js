(function () {

  console.log('Plugin Ingredients')

  const Icon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#cccccc">
      <path d="M16,10L15.8,11H13.5A0.5,0.5 0 0,0 13,11.5A0.5,0.5 0 0,0 13.5,12H15.6L14.6,17H12.5A0.5,0.5 0 0,0 12,17.5A0.5,0.5 0 0,0 12.5,18H14.4L14,20A2,2 0 0,1 12,22A2,2 0 0,1 10,20L9,15H10.5A0.5,0.5 0 0,0 11,14.5A0.5,0.5 0 0,0 10.5,14H8.8L8,10C8,8.8 8.93,7.77 10.29,7.29L8.9,5.28C8.59,4.82 8.7,4.2 9.16,3.89C9.61,3.57 10.23,3.69 10.55,4.14L11,4.8V3A1,1 0 0,1 12,2A1,1 0 0,1 13,3V5.28L14.5,3.54C14.83,3.12 15.47,3.07 15.89,3.43C16.31,3.78 16.36,4.41 16,4.84L13.87,7.35C15.14,7.85 16,8.85 16,10Z" />
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
    icon: Icon,
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