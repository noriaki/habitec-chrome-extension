async function aaa() { console.log('aaa'); };

(async () => {
  await aaa();
  debugger;
  await aaa();
})();
