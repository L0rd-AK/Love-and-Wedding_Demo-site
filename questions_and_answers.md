<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details>
<summary>
<b>A</b>
<br>
<p>
<i>Here output should be A:{} we declareed 'greeting' variable but we never used it. Even though we didn't declared 'greetign' but we assigned {} to it.</i>
</p>
</summary>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details>
<summary>
<b>C</b>
<br/>
<p>
<i>Here the ans should be C:'12', because we are adding a number and string. But here also a interesting fact that there is no console.log(), the code will show no output. But if you run it in browser it will show "12".</i>
</p>
</summary>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details>
<summary>
<b>A</b>
<br/>
<p>
<i>Here the ans should be A, because when we are assignin info.favoriteFood=something, it create a copy of the food[0], it doesn't pass reference.</i>
</p>
</summary>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details>
<summary>
<b>B</b>
<br/>
<p>
<i>here the ans should be B:"Hi there, undefined", because sayHi() function has a parameter but, we didn't anything as parameter, that's why it's going to show undefined.</i>
</p>
</summary>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details>
<summary>
<b>C</b>
<br/>
<p>
<i>here the forEach function traversing through the nums array, at first iteration num will zero, so if() whil not work and count won't be incremented. but the other three time if will work and count will be incrementing, so count will be 3.</i>
</p>
</summary>
</details>
