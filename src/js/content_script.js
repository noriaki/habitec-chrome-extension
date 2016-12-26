import K from './class_test';

const d = { e: 'e', f: 'f' };
const g = { f: 'fff', h: 'hhh', ...d };

async function bbb() { console.log('bbb'); };

(async () => {
  await bbb();
  console.log(g);
  console.log(new K('hoge'));
  debugger;
  await bbb();
})();
