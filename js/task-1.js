const items = document.querySelectorAll('.item');
 console.log(`Number of categories: ${items.length}`);
Array.prototype.forEach.call(items, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsAmount = element.querySelectorAll('li').length;
    
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemsAmount}`);
   
});