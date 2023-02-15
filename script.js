const nav = document.querySelector('#navigation');
const menu = document.querySelector('.hamburgerMenu');
const modalWrapper = document.querySelector('.modalWrapper');
const modal = document.querySelector('.modal');
const backButton = document.querySelector('#backThisProject');
const modalCloseButton = document.querySelector('#modalClose')
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const modalPledges = document.querySelectorAll('.modalPledge');
const enters = document.querySelectorAll('.enter')
const inputs = document.querySelectorAll('.enterInput input');
const inputsSend = document.querySelectorAll('.enterInput button');
const money = document.querySelector('#allMoney');
const backers = document.querySelector('#allBackers');
const complete = document.querySelector('.complete');
const gotItButton = document.querySelector('#gotIt');
const progressBar = document.querySelector('progress');
const bookmark = document.querySelector('#bookmark');
const choosenReward = document.querySelectorAll('.pledge button');
console.log(choosenReward);
let allMoney = 89914;
let allBackers = 5007;
let i =0;

//menu display
menu.addEventListener('click',()=>{
    nav.style.display == 'none' ? nav.style.display='flex' : nav.style.display='none';
})

//display modal section + reset previous actions
backButton.addEventListener('click',()=>{
    modalWrapper.style.display ='block';
    modal.style.display ='block';
    checkboxes.forEach((checkbox1,idx1)=>{
        checkbox1.checked = false;
        modalPledges[idx1].style.outline = 'none';
    })
    enters.forEach((enter)=>{
        enter.style.display = 'none';
    })
    inputs.forEach((input)=>{
        input.value = '';
    })
    complete.style.display = 'none';
})
//close modal section
modalCloseButton.addEventListener('click',()=>{
    modalWrapper.style.display ='none';
    modal.style.display ='none';
})
//bookmarked
bookmark.addEventListener('click',()=>{
    bookmark.getAttribute('src') =='./images/icon-bookmark.svg' ? bookmark.setAttribute('src','./images/icon-bookmarked.svg') : bookmark.setAttribute('src','./images/icon-bookmark.svg')
})
//choose single pledge type
checkboxes.forEach((checkbox,idx)=>{
    checkbox.addEventListener('click',()=>{
        //reset complete
        
        // reset checkboxes
        checkboxes.forEach((checkbox1,idx1)=>{
            checkbox1.checked = false;
            modalPledges[idx1].style.outline = 'none';
        })
        //show only one enter section
        enters.forEach((enter)=>{
            enter.style.display = 'none';
            enters[idx].style.display = 'flex';
        })
        //only one checkbox checked
        checkboxes[idx].checked = true;

        //show enter section and border
        if(checkbox.checked){
            enters[idx].style.display = 'flex';
            modalPledges[idx].style.outline = '1px solid hsl(176, 50%, 47%)';
        }
        //add pledge amount to all Money and +1 backer
        inputsSend[idx].addEventListener('click',()=>{
            
            i++;
            let pledge = 0;
            pledge = parseInt(inputs[idx].value)
            console.log(pledge,i)
            
            allMoney += pledge;
            money.innerHTML ='$' + allMoney.toLocaleString('en-US');
            
            allBackers++;
            backers.innerHTML = allBackers.toLocaleString('en-US');

            modal.style.display ='none';
            complete.style.display = 'flex';
            //update progress bar
            let newValue = ((allMoney / 100000)*100).toFixed(2);
            progressBar.setAttribute('value', newValue)
        }, {once: true})
    })
    //gotIt button truning back to main view
    gotItButton.addEventListener('click',()=>{
        modalWrapper.style.display = 'none';
    })
})
 choosenReward.forEach((choosen,idx2)=>{
    choosen.addEventListener('click',()=>{
        checkboxes.forEach((checkbox1,idx1)=>{
            checkbox1.checked = false;
            modalPledges[idx1].style.outline = 'none';
        })
        enters.forEach((enter)=>{
            enter.style.display = 'none';
        })
        inputs.forEach((input)=>{
            input.value = '';
        })
        complete.style.display = 'none';

        idx2 == 0 ? window.scrollTo(0, 350) : window.scrollTo(0,600)
        modalWrapper.style.display ='block';
        modal.style.display ='block';
        checkboxes[idx2 + 1].checked = true;
        enters[idx2 + 1].style.display = 'flex';
        modalPledges[idx2 + 1].style.outline = '1px solid hsl(176, 50%, 47%)';
        

         inputsSend[idx2 + 1].addEventListener('click',()=>{
            console.log('klikam')
            let pledge = parseInt(inputs[idx2 + 1].value)
            allMoney += pledge;
            money.innerHTML ='$' + allMoney.toLocaleString('en-US');
            
            allBackers++;
            backers.innerHTML = allBackers.toLocaleString('en-US');

            modal.style.display ='none';
            complete.style.display = 'flex';
            //update progress bar
            let newValue = ((allMoney / 100000)*100).toFixed(2);
            progressBar.setAttribute('value', newValue);
            console.log('koniec klika')
        },{once:true})

        
    })
 })


