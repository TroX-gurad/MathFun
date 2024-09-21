


function first() {
    if(stepOne.classList.contains('clicked')) {
        stepOne.classList.remove('clicked');
        stepOne.classList.add('intro');
        stepTwo.classList.remove('clicked');
        stepTwp.classList.add('intro');
        StepThree.classList.add('intro');
        StepThree.classList.remove('clicked');
        hiddenbtn.classList.add('hidden');
        hiddenbtn.classList.remove('vis');
        puzzelone.classList.remove('vis')
        puzzelone.classList.add('hidden')
    }
    else {
   stepOne.classList.remove('intro');
    stepOne.classList.add('clicked');
    }
    

}

function second() {
    if(stepTwo.classList.contains('clicked')) {
        stepTwo.classList.remove('clicked');
        stepTwo.classList.add('intro');
    }
 
   
    if(stepOne.classList.contains('clicked')) {
        stepTwo.classList.add('clicked');
        stepTwo.classList.remove('intro');
    }
    if (!stepOne.classList.contains('clicked')) {
        stepTwo.classList.remove('clicked');
        stepTwo.classList.add('intro');

    }

}

function third() {
    if (StepThree.classList.contains('clicked')) {
    StepThree.classList.add('intro');
    StepThree.classList.remove('clicked');
    hiddenbtn.classList.add('hidden');
    hiddenbtn.classList.remove('vis');
    puzzelone.classList.remove('vis')
    puzzelone.classList.add('hidden')
    }


    if (stepOne.classList.contains('clicked') && stepTwo.classList.contains('clicked')) {
StepThree.classList.add('clicked');
StepThree.classList.remove('intro');
hiddenbtn.classList.remove('hidden');
hiddenbtn.classList.add('vis');
}


}

function newpuzz() {
    puzzelone.classList.remove('hidden')
    puzzelone.classList.add('vis')
}


stepOne.onclick = first;
stepTwo.onclick = second;
StepThree.onclick = third;
hiddenbtn.onclick = newpuzz;
