function moviesFilter(values, moviesCards){
    const filterWords = (movie) => {
      return movie.nameRU.toLowerCase().indexOf(values.words.toLowerCase()) !== -1;
    };
  
    const filterShortMovie = (movie) => {
      return movie.duration <= 40;
    };
  
    if (values.isShortMovie) {
      return moviesCards.filter(filterWords).filter(filterShortMovie);
    } else {
      return moviesCards.filter(filterWords);
    };
  };
  
  export default moviesFilter;