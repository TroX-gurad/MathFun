function introd() {
  intro.classList.remove('vis')
  intro.classList.add('invis')
  textpuone.classList.remove('invis')
  textpuone.classList.add('vis')
  puone.classList.remove('invis')
  puone.classList.add('vis')
 }function introd() {
  intro.classList.remove('vis')
  intro.classList.add('invis')
  textpuone.classList.remove('invis')
  textpuone.classList.add('vis')
  puone.classList.remove('invis')
  puone.classList.add('vis')
 }
 
 
 startbtn.onclick = introd;
 
 
 function pus1() {
  if (rangeOne.valueAsNumber === 1 && rangeTwo.valueAsNumber === 2 && rangeThree.valueAsNumber === 3) {
      Firstpubtn.classList.remove('invisbtn')
      Firstpubtn.classList.add('visbtn')  
  }   
 }
 
 
 
 
 
 
 function endpus1() {
  puone.classList.remove('range-container')
  puone.classList.add('invis')
  Firstpubtn.classList.remove('visbtn')
  Firstpubtn.classList.add('invisbtn')
  textpuone.classList.add('invis')
  rangeOne.classList.add('invis')
  rangeTwo.classList.add('invis')
  rangeThree.classList.add('invis')
  textpuone.classList.remove('vis')
  textpuone.classList.add('invis')
 
 
  fpu1.classList.remove('invis')
  fpu1.classList.add('vis')
  secbtn.classList.remove('invis')
  secbtn.classList.add('vis')
 }
 
 
 rangeOne.onchange = pus1;
 rangeTwo.onchange = pus1;
 rangeThree.onchange = pus1;
 Firstpubtn.onclick = endpus1;
 
 
 function secpu() {
  fpu1.classList.remove('vis')
  fpu1.classList.add('invis')
  secbtn.classList.remove('vis')
  secbtn.classList.add('invis')
  isecpu2.classList.remove('invis')
  isecpu2.classList.add('vis')
 }
 
 
 secbtn.onclick = secpu;
 
 
 
 
 function multi() {
  isecpu2.classList.remove('vis')
  isecpu2.classList.add('invis')
  lives_container.classList.remove('invis')
  lives_container.classList.add('lives-container1')
  quespu2.classList.remove('invis')
  quespu2.classList.add('pu2q')
  optiononepu2.classList.remove('invis')
  optiononepu2.classList.add('op1')
  optiontwopu2.classList.remove('invis')
  optiontwopu2.classList.add('op2')
  subbtn.classList.remove('invis')
 subbtn.classList.add('Subbtn')
 //makes multi choice  visible
 
 
 lifeone.classList.remove('empty-heart')
 lifeone.classList.add('lives')
 lifetwo.classList.remove('empty-heart')
 lifetwo.classList.add('lives')
 lifethree.classList.remove('empty-heart')
 lifethree.classList.add('lives')
 lifefour.classList.remove('empty-heart')
 lifefour.classList.add('lives')
 lifefive.classList.remove('empty-heart')
 lifefive.classList.add('lives')
 //refill your hearts after you lost
 }
 
 
 redaybtn.onclick = multi;
 
 
 function op1click() {
  if (!optiononepu2.classList.contains('choosenone')) {
     
      optiononepu2.classList.remove('op1');
      optiononepu2.classList.add('choosenone');
     
     
      optiontwopu2.classList.remove('choosentwo');
      optiontwopu2.classList.add('op2');
  } else {
     
      optiononepu2.classList.remove('choosenone');
      optiononepu2.classList.add('op1');
  }
 }
 
 
 optiononepu2.onclick = op1click;
 
 
 
 
   function op2click() {
    if (!optiontwopu2.classList.contains('choosentwo')) {
       
        optiontwopu2.classList.remove('op2');
        optiontwopu2.classList.add('choosentwo');
       
       
        optiononepu2.classList.remove('choosenone');
        optiononepu2.classList.add('op1');
    } else {
       
        optiontwopu2.classList.remove('choosentwo');
        optiontwopu2.classList.add('op2');
    }
 }
 
 
 
 
 optiontwopu2.onclick = op2click;
 
 
 
 
 
 
 function pu2check() {
 
 
 if (optiontwopu2.classList.contains('choosentwo')) {
   
    quespu2.classList.remove('pu2q');
    quespu2.classList.add('invis');
    optiononepu2.classList.remove('op1');
    optiononepu2.classList.add('invis');
    optiontwopu2.classList.remove('choosentwo');
    optiontwopu2.classList.add('invis');
    subbtn.classList.remove('Subbtn');
    subbtn.classList.add('invis');
 
 
    //makes the next puzzel visible
 quespu22.classList.remove('invis')
 quespu22.classList.add('pu2q')
 op23.classList.remove('invis')
 op23.classList.add('o23')
 op22.classList.remove('invis')
 op22.classList.add('o22')
 op21.classList.remove('invis')
 op21.classList.add('o21')
 subbtn2.classList.remove('invis')
 subbtn2.classList.add('Subbtn')
 } else {
   
    if (!lifeone.classList.contains('empty-heart')) {
       
        lifeone.classList.remove('lives');
        lifeone.classList.add('empty-heart');
    } else if (!lifetwo.classList.contains('empty-heart')) {
      
        lifetwo.classList.remove('lives');
        lifetwo.classList.add('empty-heart');
    } else if (!lifethree.classList.contains('empty-heart')) {
       
        lifethree.classList.remove('lives');
        lifethree.classList.add('empty-heart');
    } else if (!lifefour.classList.contains('empty-heart')) {
       
        lifefour.classList.remove('lives');
        lifefour.classList.add('empty-heart');
    } else if (!lifefive.classList.contains('empty-heart')) {
       
        lifefive.classList.remove('lives');
        lifefive.classList.add('empty-heart');
    } else if (lifefive.classList.contains('empty-heart')) {
 
 
      lives_container.classList.add('invis')
  lives_container.classList.remove('lives-container1')
  quespu2.classList.add('invis')
  quespu2.classList.remove('pu2q')
  optiononepu2.classList.add('invis')
  optiononepu2.classList.remove('op1')
  optiontwopu2.classList.add('invis')
  optiontwopu2.classList.remove('op2')
  subbtn.classList.add('invis')
 subbtn.classList.remove('Subbtn')
 //makes the multi choice invis
 
 
 //returns you to  puzzel one
 puone.classList.remove('range-container')
  puone.classList.add('invis')
  Firstpubtn.classList.remove('visbtn')
  Firstpubtn.classList.add('invisbtn')
  textpuone.classList.add('invis')
  rangeOne.classList.add('invis')
  rangeTwo.classList.add('invis')
  rangeThree.classList.add('invis')
  textpuone.classList.remove('vis')
  textpuone.classList.add('invis')
 
 
  fpu1.classList.remove('invis')
  fpu1.classList.add('vis')
  secbtn.classList.remove('invis')
  secbtn.classList.add('vis')
 //if you run out of heart and made a mistake, you will restart and this doesn't account for checkpoints
    }
 
 
 
 
 }
 
 
 
 
 }
 
 
 
 
 subbtn.onclick = pu2check;
 
 
 
 
 function chh23() {
  if (!op23.classList.contains('ch23')) {
     
      op23.classList.remove('o23');
      op23.classList.add('ch23');
 
 
     
      op22.classList.remove('ch22');
      op22.classList.add('o22');
      op21.classList.remove('ch21');
      op21.classList.add('o21');
  }
  else {
     
      op23.classList.remove('ch23');
      op23.classList.add('o23');
  }
 }
 
 
 
 
 function chh22() {
 if (!op22.classList.contains('ch22')) {
  op22.classList.remove('o22');
  op22.classList.add('ch22');
 
 
   op23.classList.remove('ch23');
  op23.classList.add('o23');
  op21.classList.remove('ch21');
  op21.classList.add('o21');
 }
 else {
  op22.classList.remove('ch22');
  op22.classList.add('o22');
 }
 }
 
 
 function chh21() {
  if (!op21.classList.contains('ch21')) {
  op21.classList.remove('o21');
  op21.classList.add('ch21');
 
 
   op22.classList.remove('ch22');
  op22.classList.add('o22');
  op23.classList.remove('ch23');
  op23.classList.add('o23');
 }
 else {
  op21.classList.remove('ch21');
  op21.classList.add('o21');
 }
 }
 
 
 op23.onclick = chh23;
 op22.onclick = chh22;
 op21.onclick = chh21;
 
 
 

 function checkpu3() {
  if (op23.classList.contains('ch23')) {
    // Makes the current puzzle invisible and the next one visible
    quespu22.classList.remove('pu2q');
    quespu22.classList.add('invis');
    op23.classList.remove('o23');
    op23.classList.add('invis');
    op22.classList.remove('o22');
    op22.classList.add('invis');
    op21.classList.remove('o21');
    op21.classList.add('invis');
    subbtn2.classList.remove('Subbtn');
    subbtn2.classList.add('invis');

    // Next puzzle
    quespu33.classList.remove('invis');
    op31.classList.remove('invis');
    op32.classList.remove('invis');
    op33.classList.remove('invis');
    op34.classList.remove('invis');
    subbtn3.classList.remove('invis');
    
    quespu33.classList.add('pu22q');
    op31.classList.add('o31');
    op32.classList.add('o32');
    op33.classList.add('o33');
    op34.classList.add('o34');
    subbtn3.classList.add('Subbtn');
    
  } else {
    // Heart checking logic
    if (!lifeone.classList.contains('empty-heart')) {
      lifeone.classList.remove('lives');
      lifeone.classList.add('empty-heart');
    } else if (!lifetwo.classList.contains('empty-heart')) {
      lifetwo.classList.remove('lives');
      lifetwo.classList.add('empty-heart');
    } else if (!lifethree.classList.contains('empty-heart')) {
      lifethree.classList.remove('lives');
      lifethree.classList.add('empty-heart');
    } else if (!lifefour.classList.contains('empty-heart')) {
      lifefour.classList.remove('lives');
      lifefour.classList.add('empty-heart');
    } else if (!lifefive.classList.contains('empty-heart')) {
      lifefive.classList.remove('lives');
      lifefive.classList.add('empty-heart');
    } else if (lifefive.classList.contains('empty-heart')) {
      // Once all hearts are empty, refill them and return to the start
      
      // Hides the current puzzle and resets to the first puzzle (puzzle 1)
      quespu22.classList.remove('pu2q');
      quespu22.classList.add('invis');
      op23.classList.remove('o23');
      op23.classList.add('invis');
      op22.classList.remove('o22');
      op22.classList.add('invis');
      op21.classList.remove('o21');
      op21.classList.add('invis');
      subbtn2.classList.remove('Subbtn');
      subbtn2.classList.add('invis');
      
      // Bring player back to the start (puzzle 1)
      fpu1.classList.remove('invis');
      fpu1.classList.add('vis');
      secbtn.classList.remove('invis');
      secbtn.classList.add('vis');
      
      // Refill all hearts
      lifeone.classList.remove('empty-heart');
      lifeone.classList.add('lives');
      lifetwo.classList.remove('empty-heart');
      lifetwo.classList.add('lives');
      lifethree.classList.remove('empty-heart');
      lifethree.classList.add('lives');
      lifefour.classList.remove('empty-heart');
      lifefour.classList.add('lives');
      lifefive.classList.remove('empty-heart');
      lifefive.classList.add('lives');

      // Ensure the next puzzle is not shown accidentally
      quespu33.classList.add('invis');
      op31.classList.add('invis');
      op32.classList.add('invis');
      op33.classList.add('invis');
      op34.classList.add('invis');
      subbtn3.classList.add('invis');
    }
  }
}

  

  
 


 
 
 
  
  
 
 
 
 
 
 subbtn2.onclick = checkpu3;
 
 
 
 
 
 
 function chh31() {
  if (!op31.classList.contains('ch31')) {
    op31.classList.remove('o31');
    op31.classList.add('ch31');
 
 
    op32.classList.remove('ch32');
    op32.classList.add('o32');
    op33.classList.remove('ch33');
    op33.classList.add('o33');
    op34.classList.remove('ch34');
    op34.classList.add('o34');
  } else {
    op31.classList.remove('ch31');
    op31.classList.add('o31');
  }
 }
 
 
 function chh32() {
  if (!op32.classList.contains('ch32')) {
    op32.classList.remove('o32');
    op32.classList.add('ch32');
 
 
    op31.classList.remove('ch31');
    op31.classList.add('o31');
    op33.classList.remove('ch33');
    op33.classList.add('o33');
    op34.classList.remove('ch34');
    op34.classList.add('o34');
  } else {
    op32.classList.remove('ch32');
    op32.classList.add('o32');
  }
 }
 
 
 function chh33() {
  if (!op33.classList.contains('ch33')) {
    op33.classList.remove('o33');
    op33.classList.add('ch33');
 
 
    op31.classList.remove('ch31');
    op31.classList.add('o31');
    op32.classList.remove('ch32');
    op32.classList.add('o32');
    op34.classList.remove('ch34');
    op34.classList.add('o34');
  } else {
    op33.classList.remove('ch33');
    op33.classList.add('o33');
  }
 }
 
 
 function chh34() {
  if (!op34.classList.contains('ch34')) {
    op34.classList.remove('o34');
    op34.classList.add('ch34');
 
 
    op31.classList.remove('ch31');
    op31.classList.add('o31');
    op32.classList.remove('ch32');
    op32.classList.add('o32');
    op33.classList.remove('ch33');
    op33.classList.add('o33');
  } else {
    op34.classList.remove('ch34');
    op34.classList.add('o34');
  }
 }
 
 
 
 
 op31.onclick = chh31;
 op32.onclick = chh32;
 op33.onclick = chh33;
 op34.onclick = chh34;
 
 
 
 
 function pu3check() {
 
 
  if (op32.classList.contains('ch32')) {
   
    // Hide the current puzzle and its options
    quespu33.classList.remove('pu22q');
    quespu33.classList.add('invis');
    op31.classList.remove('o31');
    op31.classList.add('invis');
    op32.classList.remove('ch32');
    op32.classList.add('invis');
    op33.classList.remove('o33');
    op33.classList.add('invis');
    op34.classList.remove('o34');
    op34.classList.add('invis');
    subbtn3.classList.remove('Subbtn');
    subbtn3.classList.add('invis');
 
 
    // Make the next puzzle visible
    quespu4.classList.remove('invis');
    quespu4.classList.add('pu22q');
    op41.classList.remove('invis');
    op41.classList.add('o41');
    op42.classList.remove('invis');
    op42.classList.add('o42');
    op43.classList.remove('invis');
    op43.classList.add('o43');
    op44.classList.remove('invis')
    op45.classList.remove('invis')
    op44.classList.add('o44')
    op45.classList.add('o45')
    subbtn4.classList.remove('invis');
    subbtn4.classList.add('Subbtn');
   
  } else {
 
 
    // Deduct lives if the answer is incorrect
    if (!lifeone.classList.contains('empty-heart')) {
      lifeone.classList.remove('lives');
      lifeone.classList.add('empty-heart');
    } else if (!lifetwo.classList.contains('empty-heart')) {
      lifetwo.classList.remove('lives');
      lifetwo.classList.add('empty-heart');
    } else if (!lifethree.classList.contains('empty-heart')) {
      lifethree.classList.remove('lives');
      lifethree.classList.add('empty-heart');
    } else if (!lifefour.classList.contains('empty-heart')) {
      lifefour.classList.remove('lives');
      lifefour.classList.add('empty-heart');
    } else if (!lifefive.classList.contains('empty-heart')) {
      lifefive.classList.remove('lives');
      lifefive.classList.add('empty-heart');
    } else if (lifefive.classList.contains('empty-heart')) {
     
      // Game over - hide everything and restart puzzle one
      lives_container.classList.add('invis');
      lives_container.classList.remove('lives-container1');
      quespu33.classList.add('invis');
      quespu33.classList.remove('pu22q');
      op31.classList.add('invis');
      op31.classList.remove('o31');
      op32.classList.add('invis');
      op32.classList.remove('o32');
      op33.classList.add('invis');
      op33.classList.remove('o33');
      op34.classList.add('invis');
      op34.classList.remove('o34');
      subbtn3.classList.add('invis');
      subbtn3.classList.remove('Subbtn');
 
 
      // Reset to puzzle one
      puone.classList.remove('range-container');
      puone.classList.add('invis');
      Firstpubtn.classList.remove('visbtn');
      Firstpubtn.classList.add('invisbtn');
      textpuone.classList.add('invis');
      rangeOne.classList.add('invis');
      rangeTwo.classList.add('invis');
      rangeThree.classList.add('invis');
      textpuone.classList.remove('vis');
      textpuone.classList.add('invis');
 
 
      fpu1.classList.remove('invis');
      fpu1.classList.add('vis');
      secbtn.classList.remove('invis');
      secbtn.classList.add('vis');
    }
  }
 }
 
 
 
 
 subbtn3.onclick = pu3check;
 
 function check33() {

    if (op32.classList.contains('ch32')) {
     
      // Hide the current puzzle and its options
      quespu33.classList.remove('pu22q');
      quespu33.classList.add('invis');
      op31.classList.remove('o31');
      op31.classList.add('invis');
      op32.classList.remove('ch32');
      op32.classList.add('invis');
      op33.classList.remove('o33');
      op33.classList.add('invis');
      op34.classList.remove('o34');
      op34.classList.add('invis');
      subbtn3.classList.remove('Subbtn');
      subbtn3.classList.add('invis');
   
   
      // Make the next puzzle visible
      quespu4.classList.remove('invis');
      quespu4.classList.add('pu22q');
      op41.classList.remove('invis');
      op41.classList.add('o41');
      op42.classList.remove('invis');
      op42.classList.add('o42');
      op43.classList.remove('invis');
      op43.classList.add('o43');
      op44.classList.remove('invis')
      op45.classList.remove('invis')
      op44.classList.add('o44')
      op45.classList.add('o45')
      subbtn4.classList.remove('invis');
      subbtn4.classList.add('Subbtn');
     
    } else {
   
   
      // Deduct lives if the answer is incorrect
      if (!lifeone.classList.contains('empty-heart')) {
        lifeone.classList.remove('lives2');
        lifeone.classList.add('empty-heart');
      } else if (!lifetwo.classList.contains('empty-heart')) {
        lifetwo.classList.remove('lives2');
        lifetwo.classList.add('empty-heart');
      } else if (!lifethree.classList.contains('empty-heart')) {
        lifethree.classList.remove('lives2');
        lifethree.classList.add('empty-heart');
      } else if (!lifefour.classList.contains('empty-heart')) {
        lifefour.classList.remove('lives2');
        lifefour.classList.add('empty-heart');
      } else if (!lifefive.classList.contains('empty-heart')) {
        lifefive.classList.remove('lives2');
        lifefive.classList.add('empty-heart');
      } else if (lifefive.classList.contains('empty-heart')) {
       
       
   
   
   lifefive.classList.remove('empty-heart')
   lifefour.classList.remove('empty-heart')
   lifethree.classList.remove('empty-heart')

   lifefive.classList.add('lives2')
   lifefour.classList.add('lives2')
   lifethree.classList.add('lives2')
   

   
      }
    }
   }
   
 
 subbtn33.onclick = check33;
 
 function chh41() {
  //check  if you clicked  op41 and unselete the others
  if (!op41.classList.contains('ch41')) {
    op41.classList.remove('o41');
    op41.classList.add('ch41');
 
 
    op42.classList.remove('ch42');
    op42.classList.add('o42');
    op43.classList.remove('ch43');
    op43.classList.add('o43');
    op44.classList.remove('ch44');
    op44.classList.add('o44');
    op45.classList.remove('ch45')
    op45.classList.add('o45')
  } else {
    op41.classList.remove('ch41');
    op41.classList.add('o41');
  }
 }
 
 
 function chh42() {
  //check if op42 is choosen and deselect the others
  if (!op42.classList.contains('ch42')) {
    op42.classList.remove('o42');
    op42.classList.add('ch42');
 
 
    op41.classList.remove('ch41');
    op41.classList.add('o41');
    op43.classList.remove('ch43');
    op43.classList.add('o43');
    op44.classList.remove('ch44');
    op44.classList.add('o44');
    op45.classList.remove('ch45')
    op45.classList.add('o45')
  } else {
    op42.classList.remove('ch42');
    op42.classList.add('o42');
  }
 }
 
 
 function chh43() {
    //check if op43 is choosen and deselect the others
  if (!op43.classList.contains('ch43')) {
    op43.classList.remove('o43');
    op43.classList.add('ch43');
 
 
    op41.classList.remove('ch41');
    op41.classList.add('o41');
    op42.classList.remove('ch42');
    op42.classList.add('o42');
    op44.classList.remove('ch44');
    op44.classList.add('o44');
    op45.classList.remove('ch45')
    op45.classList.add('o45')
  } else {
    op43.classList.remove('ch43');
    op43.classList.add('o43');
  }
 }
 
 
 function chh44() {
    //check if op44 is choosen and deselect the others
  if (!op44.classList.contains('ch44')) {
    op44.classList.remove('o44');
    op44.classList.add('ch44');
 
 
    op41.classList.remove('ch41');
    op41.classList.add('o41');
    op42.classList.remove('ch42');
    op42.classList.add('o42');
    op43.classList.remove('ch43');
    op43.classList.add('o43');
    op45.classList.remove('ch45')
    op45.classList.add('o45')
  } else {
    op44.classList.remove('ch44');
    op44.classList.add('o44');
  }
 }
 
 
 function chh45() {
    //check if op45 is choosen and deselect the others
  if (!op45.classList.contains('ch45')) {
    op45.classList.remove('o45');
    op45.classList.add('ch45');
 
 
    op41.classList.remove('ch41');
    op41.classList.add('o41');
    op42.classList.remove('ch42');
    op42.classList.add('o42');
    op43.classList.remove('ch43');
    op43.classList.add('o43');
    op44.classList.remove('ch44')
    op44.classList.add('o44')
  } else {
    op45.classList.remove('ch45');
    op45.classList.add('o45');
  }
 }
 
 
 op41.onclick = chh41;
 op42.onclick = chh42;
 op43.onclick = chh43;
 op44.onclick = chh44;
 op45.onclick = chh45;
 

 function chh41() {
  //check  if you clicked  op41 and unselete the others
  if (!op41.classList.contains('ch41')) {
    op41.classList.remove('o41');
    op41.classList.add('ch41');
 
 
    op42.classList.remove('ch42');
    op42.classList.add('o42');
    op43.classList.remove('ch43');
    op43.classList.add('o43');
    op44.classList.remove('ch44');
    op44.classList.add('o44');
    op45.classList.remove('ch45')
    op45.classList.add('o45')
  } else {
    op41.classList.remove('ch41');
    op41.classList.add('o41');
  }
 }
 
 
 function chh42() {
  //check if op42 is choosen and deselect the others
  if (!op42.classList.contains('ch42')) {
    op42.classList.remove('o42');
    op42.classList.add('ch42');
 
 
    op41.classList.remove('ch41');
    op41.classList.add('o41');
    op43.classList.remove('ch43');
    op43.classList.add('o43');
    op44.classList.remove('ch44');
    op44.classList.add('o44');
    op45.classList.remove('ch45')
    op45.classList.add('o45')
  } else {
    op42.classList.remove('ch42');
    op42.classList.add('o42');
  }
 }
 
 
 function chh43() {
    //check if op43 is choosen and deselect the others
  if (!op43.classList.contains('ch43')) {
    op43.classList.remove('o43');
    op43.classList.add('ch43');
 
 
    op41.classList.remove('ch41');
    op41.classList.add('o41');
    op42.classList.remove('ch42');
    op42.classList.add('o42');
    op44.classList.remove('ch44');
    op44.classList.add('o44');
    op45.classList.remove('ch45')
    op45.classList.add('o45')
  } else {
    op43.classList.remove('ch43');
    op43.classList.add('o43');
  }
 }
 
 
 function chh44() {
    //check if op44 is choosen and deselect the others
  if (!op44.classList.contains('ch44')) {
    op44.classList.remove('o44');
    op44.classList.add('ch44');
 
 
    op41.classList.remove('ch41');
    op41.classList.add('o41');
    op42.classList.remove('ch42');
    op42.classList.add('o42');
    op43.classList.remove('ch43');
    op43.classList.add('o43');
    op45.classList.remove('ch45')
    op45.classList.add('o45')
  } else {
    op44.classList.remove('ch44');
    op44.classList.add('o44');
  }
 }
 
 
 function chh45() {
    //check if op45 is choosen and deselect the others
  if (!op45.classList.contains('ch45')) {
    op45.classList.remove('o45');
    op45.classList.add('ch45');
 
 
    op41.classList.remove('ch41');
    op41.classList.add('o41');
    op42.classList.remove('ch42');
    op42.classList.add('o42');
    op43.classList.remove('ch43');
    op43.classList.add('o43');
    op44.classList.remove('ch44')
    op44.classList.add('o44')
  } else {
    op45.classList.remove('ch45');
    op45.classList.add('o45');
  }
 }
 
 
 op41.onclick = chh41;
 op42.onclick = chh42;
 op43.onclick = chh43;
 op44.onclick = chh44;
 op45.onclick = chh45;
 
 
 function pu4check() {
 
 
  if (op43.classList.contains('ch43')) {
   
    // Hide the current puzzle and its options
 
 
 
 
 
 
 
 
    op41.classList.remove('o41');
    op42.classList.remove('o42');
    op43.classList.remove('o43');
    op44.classList.remove('o44');
    op45.classList.remove('o45')
    quespu4.classList.remove('pu22q')
    subbtn4.classList.remove('Subbtn')
 
 
    op41.classList.add('invis');
    op42.classList.add('invis');
    op43.classList.add('invis');   
    op44.classList.add('invis'); 
    op45.classList.add('invis')  
    quespu4.classList.add('invis') 
    subbtn4.classList.add('invis')
    // Make the next puzzle visible
    //remove class are here
 quespu5.classList.remove('invis');
 op51.classList.remove('invis');
 op52.classList.remove('invis');
 op53.classList.remove('invis');
 op54.classList.remove('invis');
    op55.classList.remove('invis');
 op56.classList.remove('invis');
 subbtn5.classList.remove('invis');
    //now here we add the new class
 
 
    quespu5.classList.add('pu22q');
    op51.classList.add('o51');
    op52.classList.add('o52');
    op53.classList.add('o53'); 
    op54.classList.add('o54');
    op55.classList.add('o55');
    op56.classList.add('o56')
    subbtn5.classList.add('Subbtn');
   //this is to make it harder
    lifetwo.classList.remove('empty-heart');
    lifeone.classList.remove('empty-heart');
    lifetwo.classList.add('invis');
    lifeone.classList.add('invis');
 
  }
  else {
 
 
    // Deduct lives if the answer is incorrect
    if (!lifeone.classList.contains('empty-heart')) {
      lifeone.classList.remove('lives');
      lifeone.classList.add('empty-heart');
    } else if (!lifetwo.classList.contains('empty-heart')) {
      lifetwo.classList.remove('lives');
      lifetwo.classList.add('empty-heart');
    } else if (!lifethree.classList.contains('empty-heart')) {
      lifethree.classList.remove('lives');
      lifethree.classList.add('empty-heart');
    } else if (!lifefour.classList.contains('empty-heart')) {
      lifefour.classList.remove('lives');
      lifefour.classList.add('empty-heart');
    } else if (!lifefive.classList.contains('empty-heart')) {
      lifefive.classList.remove('lives');
      lifefive.classList.add('empty-heart');
    } else if (lifefive.classList.contains('empty-heart')) {
     
      // Game over - hide everything and restart puzzle one
      //puzzle three was a check point so you will respwan there but with three hearts
     
 // Hide the current puzzle and its options
 op41.classList.remove('o41');
 op41.classList.add('invis');
 op42.classList.remove('o42');
 op42.classList.add('invis');
 op43.classList.remove('o43');
 op43.classList.add('invis');
 op44.classList.remove('o44');
 op44.classList.add('invis');
 op45.classList.remove('o45');
 op45.classList.add('invis');
 quespu4.classList.remove('pu22q');
 quespu4.classList.add('invis');
 subbtn4.classList.remove('Subbtn');
 subbtn4.classList.add('invis')
 
      // Reset to puzzle one
      quespu33.classList.remove('invis');
      op31.classList.remove('invis');
      op32.classList.remove('invis');
      op33.classList.remove('invis');
      op34.classList.remove('invis');
      subbtn33.classList.remove('invis');
      //remove all invis class
      quespu33.classList.add('pu22q');
      op31.classList.add('o31');
      op32.classList.add('o32');
      op33.classList.add('o33');
      op34.classList.add('o34');
      subbtn33.classList.add('Subbtn');
    
   lifefive.classList.remove('empty-heart');
   lifefour.classList.remove('empty-heart');
   lifethree.classList.remove('empty-heart');
   lifetwo.classList.remove('empty-heart');
   lifeone.classList.remove('empty-heart');

  
  
   lifefive.classList.add('lives2');
   lifefour.classList.add('lives2');
   lifethree.classList.add('lives2');
   lifetwo.classList.add('invis');
   lifeone.classList.add('invis');

    }
  }
 }
 
 
 subbtn4.onclick = pu4check;
 
 function chh51() {
  
    //check  if you clicked  op41 and unselete the others
    if (!op51.classList.contains('ch51')) {
      op51.classList.remove('o51');
      op51.classList.add('ch51');
   
   
      op52.classList.remove('ch52');
      op52.classList.add('o52');
      op53.classList.remove('ch53');
      op53.classList.add('o53');
      op54.classList.remove('ch54');
      op54.classList.add('o54');
      op55.classList.remove('ch55')
      op55.classList.add('o55')
      op56.classList.remove('ch56')
      op56.classList.add('o56')
    } else {
      op51.classList.remove('ch51');
      op51.classList.add('o51');
    }
   }
   
 
   function chh52() {
  
    //check  if you clicked  op41 and unselete the others
    if (!op52.classList.contains('ch52')) {
      op52.classList.remove('o52');
      op52.classList.add('ch52');
   
   
      op51.classList.remove('ch51');
      op51.classList.add('o51');
      op53.classList.remove('ch53');
      op53.classList.add('o53');
      op54.classList.remove('ch54');
      op54.classList.add('o54');
      op55.classList.remove('ch55')
      op55.classList.add('o55')
      op56.classList.remove('ch56')
      op56.classList.add('o56')
    } else {
      op52.classList.remove('ch52');
      op52.classList.add('o52');
    }
   }
   
   function chh53() {
  
    //check  if you clicked  op41 and unselete the others
    if (!op53.classList.contains('ch53')) {
      op53.classList.remove('o53');
      op53.classList.add('ch53');
   
   
      op52.classList.remove('ch52');
      op52.classList.add('o52');
      op51.classList.remove('ch51');
      op51.classList.add('o51');
      op54.classList.remove('ch54');
      op54.classList.add('o54');
      op55.classList.remove('ch55')
      op55.classList.add('o55')
      op56.classList.remove('ch56')
      op56.classList.add('o56')
    } else {
      op53.classList.remove('ch53');
      op53.classList.add('o53');
    }
   }
   
   function chh54() {
  
    //check  if you clicked  op41 and unselete the others
    if (!op54.classList.contains('ch54')) {
      op54.classList.remove('o54');
      op54.classList.add('ch54');
   
   
      op52.classList.remove('ch52');
      op52.classList.add('o52');
      op53.classList.remove('ch53');
      op53.classList.add('o53');
      op51.classList.remove('ch51');
      op51.classList.add('o51');
      op55.classList.remove('ch55')
      op55.classList.add('o55')
      op56.classList.remove('ch56')
      op56.classList.add('o56')
    } else {
      op54.classList.remove('ch54');
      op54.classList.add('o54');
    }
   }
   
   function chh55() {
  
    //check  if you clicked  op41 and unselete the others
    if (!op55.classList.contains('ch55')) {
      op55.classList.remove('o55');
      op55.classList.add('ch55');
   
   
      op52.classList.remove('ch52');
      op52.classList.add('o52');
      op53.classList.remove('ch53');
      op53.classList.add('o53');
      op54.classList.remove('ch54');
      op54.classList.add('o54');
      op51.classList.remove('ch51')
      op51.classList.add('o51')
      op56.classList.remove('ch56')
      op56.classList.add('o56')
    } else {
      op55.classList.remove('ch55');
      op55.classList.add('o55');
    }
   }
   
   function chh56() {
  
    //check  if you clicked  op41 and unselete the others
    if (!op56.classList.contains('ch56')) {
      op56.classList.remove('o56');
      op56.classList.add('ch56');
   
   
      op52.classList.remove('ch52');
      op52.classList.add('o52');
      op53.classList.remove('ch53');
      op53.classList.add('o53');
      op54.classList.remove('ch54');
      op54.classList.add('o54');
      op55.classList.remove('ch55')
      op55.classList.add('o55')
      op51.classList.remove('ch51')
      op51.classList.add('o51')
    } else {
      op56.classList.remove('ch56');
      op56.classList.add('o56');
    }
   }
   

   op51.onclick = chh51;
   op52.onclick = chh52;
   op53.onclick = chh53;
   op54.onclick = chh54;
   op55.onclick = chh55;
   op56.onclick = chh56;
   
  function checkpu5() {
    if (op54.classList.contains('ch54')) {
   
      // Hide the current puzzle and its options
   
      op51.classList.remove('o51');
      op52.classList.remove('o52');
      op53.classList.remove('o53');
      op54.classList.remove('o54');
      op55.classList.remove('o55');
      op56.classList.remove('o56');
      quespu5.classList.remove('pu22q');
      subbtn5.classList.remove('Subbtn');
      lives_container.classList.remove('lives-container1');
      subbtn33.classList.remove('Subtn')
      last1.classList.remove('invis')
      last.classList.remove('invis')



      op51.classList.add('invis');
      op52.classList.add('invis');
      op53.classList.add('invis');   
      op54.classList.add('invis'); 
      op55.classList.add('invis');
      op56.classList.add('invis');
      quespu5.classList.add('invis');
      subbtn5.classList.add('invis');
      lives_container.classList.add('invis');
      subbtn33.classList.add('invis')
    


    
      
      // Make the next puzzle visible
      //remove class are here
  
    }
    else {
   
   
      // Deduct lives if the answer is incorrect
      if (!lifeone.classList.contains('empty-heart')) {
        lifeone.classList.remove('live2');
        lifeone.classList.add('empty-heart');
      } else if (!lifetwo.classList.contains('empty-heart')) {
        lifetwo.classList.remove('lives2');
        lifetwo.classList.add('empty-heart');
      } else if (!lifethree.classList.contains('empty-heart')) {
        lifethree.classList.remove('lives2');
        lifethree.classList.add('empty-heart');
      } else if (!lifefour.classList.contains('empty-heart')) {
        lifefour.classList.remove('lives2');
        lifefour.classList.add('empty-heart');
      } else if (!lifefive.classList.contains('empty-heart')) {
        lifefive.classList.remove('lives2');
        lifefive.classList.add('empty-heart');
      } else if (lifefive.classList.contains('empty-heart')) {
       
        // Game over - hide everything and restart puzzle one
        //puzzle three was a check point so you will respwan there but with three hearts
       
   // Hide the current puzzle and its options
   op51.classList.remove('o51');
   op51.classList.add('invis');
   op52.classList.remove('o52');
   op52.classList.add('invis');
   op53.classList.remove('o53');
   op53.classList.add('invis');
   op54.classList.remove('o54');
   op54.classList.add('invis');
   op55.classList.remove('o55');
   op55.classList.add('invis');
   op56.classList.remove('o56');
   op56.classList.add('invis');
   quespu5.classList.remove('pu22q');
   quespu5.classList.add('invis');
   subbtn5.classList.remove('Subbtn');
   subbtn5.classList.add('invis')
   
        // Reset to puzzle three
        quespu33.classList.remove('invis');
        op31.classList.remove('invis');
        op32.classList.remove('invis');
        op33.classList.remove('invis');
        op34.classList.remove('invis');
        subbtn33.classList.remove('invis');
        //remove all invis class
        quespu33.classList.add('pu22q');
        op31.classList.add('o31');
        op32.classList.add('o32');
        op33.classList.add('o33');
        op34.classList.add('o34');
        subbtn33.classList.add('Subbtn');
      
     lifefive.classList.remove('empty-heart');
     lifefour.classList.remove('empty-heart');
     lifethree.classList.remove('empty-heart');
     lifetwo.classList.remove('empty-heart');
     lifeone.classList.remove('empty-heart');
  
    
    
     lifefive.classList.add('lives2');
     lifefour.classList.add('lives2');
     lifethree.classList.add('lives2');
     lifetwo.classList.add('invis');
     lifeone.classList.add('invis');
  
      }
    }
   
   
  }
   subbtn5.onclick = checkpu5;