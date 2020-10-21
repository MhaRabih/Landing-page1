
/**
 * Define Global Variables
 * 
*/
const main  =    document.querySelector('main');
let navsec = document.querySelectorAll('h2');
const navbar = document.querySelector('ul');
const section = document.getElementsByTagName('section'); 
const div = document.querySelector('div');
const sec = document.querySelector('section');
let  list = document.querySelectorAll('.button');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//main 
creatsec() ;
creatsec() ;
createMenue();

//Creating new section
function creatsec() {
	const newSec = document.createElement('section');	
	main.append(newSec);
	newSec.id += "section"+(navsec.length+1)+ "  data-nav=\"section 4\"";
	const newdiv = document.createElement('div');
	newSec.append(newdiv);
	newdiv.className="landing__container";
	const newhead = document.createElement('h2');
	newdiv.append(newhead);
	newhead.innerHTML = "section"+(navsec.length+1);
	navsec = document.querySelectorAll('h2');
	const newpara = document.createElement('p');
	newdiv.append(newpara);
	newpara.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, ";
}

// Build menu
function createMenue(){
	for(let i = 0; i < navsec.length; i++){
const li = document.createElement('li');
	li.textContent=navsec[i].textContent;
	li.className="button";
	navbar.append(li);
    list = document.querySelectorAll('.button');
	// Scroll to section on link click
	li.addEventListener('click',function(){
	navsec[i].parentNode.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
	
  });
 }
}

//check if section is on veiw				
function onVeiw(i){	
	const rect = section[i].getBoundingClientRect();
		if(rect.top<=150&&rect.bottom>=150)
		{
			return true;
				}
		else
			{
				return false;
				}
	}

// Set sections and navigation bar buttons as active 
function giveClass() {
  for(let i = 0; i < section.length; i++){
	let logic = onVeiw(i);
	section[i].classList.remove("your-active-class");
	 if(logic==true){
				section[i].className+="your-active-class";
				list[i].className="your-active-list";
				}
       else{
			section[i].classList.remove("your-active-class");
			list[i].classList.remove("your-active-list");
			}	
		}
	}

window.addEventListener('scroll', function (){ 
	giveClass();
});







