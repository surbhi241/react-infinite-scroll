const options = [
    {
      id: 'Z90013',
      label: 'Sample Label 1'
    }, 
    {
        id: 'Z90014',
        label: 'Sample Label 1'
    }, 
    {
        id: 'Z90015',
        label: 'Sample Label 1'
    }, 
    {
        id: 'Z90016',
        label: 'Sample Label 1'
    }, 
    {
        id: 'Z90017',
        label: 'Sample Label 1'
    }, 
  ];

  const config = {
    100: {
        types: ['Z90013',  'Z90017']
    },
    200: {
        types: ['Z90013',  'Z90017']
    },
    300: {
        types: ['Z90016',  'Z90013']
    },
    400: {
        types: ['Z90013']
    }
  }

// 100: {
//     types: [{
//         id: 'Z90013',
//         label: 'Sample Label 1'
//      },  {
//       id: 'Z90017',
//       label: 'Sample Label 1'
//   }]
// }

const configIds = [100, 200, 300];
let optionsIds = {};
options.forEach((opt) => {
    optionsIds[opt.id] = opt
})
function provideConfiguration(configIds){
    let result = {};
    configIds.forEach((id) => {
        result[id] = {types: [...config[id].types]}
        result[id].types = result[id].types && result[id].types.map((typeId) => {
            const option = optionsIds[typeId];
            return option;
        });
    })
    console.log(result[100].types);
    return result;
}

console.log(provideConfiguration(configIds));
console.log(config);
