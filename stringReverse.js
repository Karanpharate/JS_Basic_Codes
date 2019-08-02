//Write a function that reverses a string recursively.

/*
reverse("hello") ➞ "olleh"

reverse("world") ➞ "dlrow"

reverse("a") ➞ "a"

reverse("") ➞ ""
*/

const reverse = (str) => {
    let a = str.split(""),
    b = a.reverse(),
    c = b.join("");
    return c;
}
