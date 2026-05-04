export const navigateToProjects = () => {

}

export const goToMainFooter = () => {
  setTimeout(() => {
    const footerElement = document.getElementById('MainFooter');
    if (footerElement) {
      footerElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, 100);
}

export const navigateToPrice = () => {
  setTimeout(() => {
    const priceElement = document.getElementById('price-project')
    if (priceElement) {
      priceElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, 100);
}
