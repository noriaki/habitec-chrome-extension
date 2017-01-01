import { dispatch } from 'chrome-extension-redux';
import { pageIconShow } from 'Actions/PageIcon';

(async () => {
  const response = await dispatch(pageIconShow());
  console.log(response);
})();
