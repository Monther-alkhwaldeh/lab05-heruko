


let ul = $(`<ul></ul>`)
ul.css('id', 'TabletUl')
let navBar = ['Intro', 'Portfolio', 'About Me', 'Contact']
let navBarE = ['#top', '#portfolio', '#about', '#contact']
let index = 0;
navBar.forEach((element) => {
  let lie1 =  $(`<li><a href=${navBarE[index]}>${element}</a></li>`)
  ul.append(lie1);
  index++
})
$('#top').prepend(ul);

