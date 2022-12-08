import Mock from 'mockjs';

const tree = Mock.mock({
  'array|15': [
    {
      'id|+1': 1,
      label: '@city()',
      'hasChild|1-2': true,
      children: [ {} ]
    }
  ]
});
console.log(tree);
export {
  tree
};
