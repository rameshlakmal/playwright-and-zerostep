// example.spec.js
import test from "../fixtures/fixtures.js"; // Use default import

test('Zero Example', async ({ ai }) => {
  await ai('click bar');
});
