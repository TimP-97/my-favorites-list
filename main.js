let a = document.createElement('a'); 
a.href = "https://romebell.gitbook.io/serifx221/javascript/02more-manipulation"; 
a.textContent = "DOM"; 

document.body.appendChild('a'); 

let list = document.getElementById('my-favorite-movies'); 

let newMovie = document.createElement('li'); 

newMovie.textContent = "Annihilation"; 
newMovie.textConent = "Into the Spiderverse"; 
newMovie.textContent = "Ex Machina"; 
newMovie.textContent = "Howl's Moving Castle"; 
newMovie.textContent = "Mad Max: Fury Road"; 





list.appendChild(newMovie); 

let list1 = document.getElementById('my-closet'); 
let newItem = document.createElement('li'); 

newItem.textContent = "Shoes"; 
newItem.textContent = "Shirt"; 
newItem.textContent = "Pants"; 
newItem.textContent = "Coat"; 
newItem.textContent = "Snowpants";

let second = list1.children[1]; 
console.log(second); 

list1.insertBefore(newItem, second); 

let list2 = document
