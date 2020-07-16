let c = document.getElementById('crash');
for (var i = 10; i > 1; i++) {
  console.log(i);
  c.innerHTML += `CRASH${i}ME`;
}
