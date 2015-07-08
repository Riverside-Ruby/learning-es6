import GeorgeForeman from '../../../utils/george-foreman';
import { module, test } from 'qunit';

module('Unit | Utility | george foreman');

// Replace this with your real tests.
test('it correctly names the second George Foreman', (assert) => {
  var first = new GeorgeForeman();
  var second = new GeorgeForeman();
  assert.equal(second.name(), "George Foreman II");
});
