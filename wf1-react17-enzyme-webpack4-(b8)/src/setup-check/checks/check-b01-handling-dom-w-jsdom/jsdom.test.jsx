test('jsDom works', ()=>{
  const myString = 'myString';
  const div = document.createElement('div');
  const textNode = document.createTextNode(myString);
  div.appendChild(textNode)
  expect(div.innerHTML).toBe(myString);
});
