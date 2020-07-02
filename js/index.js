// Your code goes here
let nav = document.querySelector('.nav');
nav.addEventListener('click',(e) => {
    e.preventDefault();
});

document.querySelectorAll('a').forEach((tag) => {
    tag.addEventListener('dblclick', () =>{
       tag.style.background = 'purple'; 
       tag.style.color = 'white';
       tag.style.transform = 'scale(1.5)';
    })
    
})

document.querySelectorAll('.content-section').forEach((title) => {
    title.addEventListener('mouseenter',(e) => {
    title.style.color = 'red';
    e.stopImmediatePropagation();
    });
    title.addEventListener('mouseleave', (e) => {
        title.style.color = 'green';
        e.stopPropagation(); 
    });
});

document.querySelectorAll('h2').forEach((title) => {
    title.addEventListener('mouseenter', (e) => {
        title.style.color = 'blue';
        e.target.stopPropagation();
    });
});


document.querySelectorAll('img').forEach((image) => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.2)';
        image.style.transition = 'transform 2s';
    })
     image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(.7)';
    })     
})

document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('mouseenter', () => {
        button.style.background = 'green';
        button.style.color = 'hotpink';
    })

    button.addEventListener('mouseleave', () => {
        button.style.background = '';
        button.style.color = '';
    })

    button.addEventListener('click', () => {
        button.style.transform = 'scale(1.5)';
        button.style.transition = 'transform .3s'
    })
})

let heading = document.querySelector('.main-navigation');
window.addEventListener('scroll', (e) => {
    heading.style.background = 'hotpink';
    e.stopPropagation();
})

