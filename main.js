// // // 1 . დაწერეთ ფუნქცია რომელიც დააბრუნებს ციფრის ფაქტორიალს
// // მაგალითად თუ გადავცემთ 4-ს ფუნქციამ უნდა დააბრუნოს 24
// // ანუ - 1 * 2 * 3 * 4 = 24

function Factorial(number) {
  let result = 1;
  for (let index = 1; index <= number; index++) {
    result *= index;
  }
  return result;
}

console.log(Factorial(4));

// // // 2.
// // დაწერეთ ფუნქცია რომელიც გადაუვლის ციფრებს 1 დან 100 მდე
// // თუ ციფრი არის 3 ის და 5 ის ჯერადი დააკონსოლეთ "ორივეს ჯერადია"
// // თუ მხოლოდ 3 -ის ჯერადია დააკონსოლეთ "სამის ჯერადია"
// // თუ მხოლოდ 5 - ის ჯერადია დააკონსოლეთ "ხუთის ჯერადია"
// // თუ არცერთის არ არის, არაფერი არ მინდა : )

for (let index = 1; index < 100; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log("ორივეს ჯერადია");
  } else if (index % 3 === 0) {
    console.log("სამის ჯერადია");
  } else if (index % 5 === 0) {
    console.log("ხუთის ჯერადია");
  } else console.log("არაფერი არ მინდა : )");
}

// // // 3. დაწერეთ ფუნქცია რომელსაც გადავცემთ წინადადებას
// // ფუნქციამ უნდა დაგვიბრუნოს წინადადებიდან ყველაზე დიდი სიტყვა
// // მაგალითად თუ გადავცემთ "თორნიკე, გილოცავ დაბადების დღეს!"
// // უნდა დაგვიბრუნოს - "დაბადების"

function Largest(sentence) {
  const words = sentence.split(" ");

  let largestWord = "";

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];

    if (currentWord.length > largestWord.length) {
      largestWord = currentWord;
    }
  }

  return largestWord;
}

console.log(Largest("თორნიკე, გილოცავ დაბადების დღეს!"));

// // // 4. დაწერეთ ფუნქცია რომელიც კონსოლში ფიფქებით დახატავს ასეთ რამეს
// /*

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// */

function Draw(size) {
  for (let index = 0; index <= size; index++) {
    let star = "*".repeat(index);
    console.log(star);
  }

  for (let index = size - 1; index >= 1; index--) {
    let star = "*".repeat(index);
    console.log(star);
  }
}

Draw(5);
