class Default {
  listenClick() {
    document.addEventListener('click', function(event) {
      console.log('button click');
    });
  }
};

const de = new Default;
de.listenClick();