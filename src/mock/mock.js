import Mock from 'mockjs';

const tree = Mock.mock({
  'array|20': [
    {
      'id|+1': 1,
      label: '@city()',
      'hasChild|1-2': true,
      'children|10': [ {
        'id|+100': 1,
        label: '@county(true)',
        'hasChild|1-2': true,
        'children|5': [ {
          'id|+1000': 1,
          label: '@protocol()',
          'hasChild|1-2': true,
        } ]
      } ]
    }
  ]
});
export {
  tree
};
