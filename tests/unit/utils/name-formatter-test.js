import NameFormatter from '../../../utils/name-formatter';
import { module, test } from 'qunit';

module('Unit | Utility | name formatter');

// Replace this with your real tests.
test('it works', (assert) => {
  var name = { first: "John", last: "Doe" };
  var formatter = new NameFormatter(name);
  assert.equal(formatter.fullName(), "John Doe");
});
