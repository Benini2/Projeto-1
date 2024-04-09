function morte(dano, vida) {
    if (dano >= vida) {
      return 1;
    } else {
      return 0;
    }
  }
  

  console.log(norte(50, 100));
  console.log(morte(100, 50));