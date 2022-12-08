import Mock from 'mockjs';

const tree = Mock.mock({
  'array|15': [
    {
      'id|+1': 1,
      label: '@city()',
      'hasChild|1-2': true,
      'children|10': [ {
        'id|+10': 10,
        label: '@city(true)'
      } ]
    }
  ]
});
console.log(tree);
export {
  tree
};
