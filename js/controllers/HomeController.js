app.controller('HomeController', ['$scope', function($scope) {
      
      
      /* THESE ARE YOUR LIST OF MOVIES AND ACCOMPANYING METADATA
      //    
      //    They are in the following format:
      //    title (String): the name of the movie
      //    iscore (Number): the IMDB score
      //    rating (String): the movie's MPAA rating 
      //    released (Date): the release date
      //    country (String): the country of production
      //    posters (Array): an array of String values with the URL to movie posters
      //    imdb (String): the URL to the corresponding IMDB website
      //    website (String): the URL to the corresponding official website
      //    likes (Number): a fictitious number of user likes
      //    dislikes (Number): a fictitious number of user dislikes
      //    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
      //
      // FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THIS LIST
      */
      $scope.movies = [
    { 
      title:      'The Shawshank Redemption', 
      iscore:     9.3,
      rating:     'R',
      runtime:    142,
      released:   new Date('1994', '10', '14'),
      country:    'USA',
      posters:    ['img/shawshank.jpg','img/shawshank2.jpg','img/shawshank3.jpg'],
      imdb:       'http://www.imdb.com/title/tt0111161',
      website:    'https://www.facebook.com/ShawshankRedemptionFilm',
      likes:      1021,
      dislikes:   122,
      posterindex: 0
      },
    { 
      title:      'The Godfather', 
      iscore:     9.2,
      rating:     'R',
      runtime:    175,
      released:   new Date('1972', '03', '24'),
      country:    'USA',
      posters:    ['img/godfather.jpg','img/godfather_2.jpg','img/godfather_3.jpg'],
      imdb:       '[http://www.imdb.com/title/tt0068646',
      website:    'https://www.facebook.com/thegodfather',
      likes:      928,
      dislikes:   109,
      posterindex: 0
      },
    { 
      title:      'The Godfather: Part II', 
      iscore:     9.0,
      rating:     'R',
      runtime:    202,
      released:   new Date('1974', '12', '20'),
      country:    'USA',
      posters:    ['img/godfather2.jpg','img/godfather2_2.jpg'],
      imdb:       'http://www.imdb.com/title/tt0071562',
      website:    'https://www.facebook.com/thegodfather',
      likes:      855,
      dislikes:   99,
      posterindex: 0
      },
    { 
      title:      'The Dark Knight', 
      iscore:     8.9,
      rating:     'PG-13',
      runtime:    152,
      released:   new Date('2008', '07', '18'),
      country:    'USA',
      posters:    ['img/darkknight.jpg','img/darkknight2.jpg'],
      imdb:       'http://www.imdb.com/title/tt0468569',
      website:    'http://www.42entertainment.com/work/whysoserious',
      likes:      828,
      dislikes:   127,
      posterindex: 0
      },
    { 
      title:      'Schindler\'s List', 
      iscore:     8.9,
      rating:     'R',
      runtime:    195,
      released:   new Date('1993', '11', '30'),
      country:    'USA',
      posters:    ['img/schindlerslist.jpg'],
      imdb:       'http://www.imdb.com/title/tt0108052',
      website:    'https://www.uphe.com/schindlers-list',
      likes:      812,
      dislikes:   101,
      posterindex: 0
      },
    { 
      title:      'Taare Zameen Par', 
      iscore:     8.5,
      rating:     'PG',
      runtime:    165,
      released:   new Date('2007', '12', '21'),
      country:    'India',
      posters:    ['img/tzp1.jpg','img/tzp2.jpg', 'img/tzp3.jpg'],
      imdb:       'https://www.imdb.com/title/tt0986264/',
      website:    'http://www.taarezameenpar.com',
      likes:      1221,
      dislikes:   108,
      posterindex: 0
      },
          { 
      title:      'The Book of Life', 
      iscore:     7.3,
      rating:     'PG',
      runtime:    95,
      released:   new Date('2014', '10', '17'),
      country:    'USA',
      posters:    ['img/bol2.jpg','img/bol3.jpg', 'img/bol4.jpg'],
      imdb:       'https://www.imdb.com/title/tt2262227/',
      website:    'http://www.bookoflifemovie.com',
      likes:      1017,
      dislikes:   69,
      posterindex: 0
      },
          { 
      title:      'The Room', 
      iscore:     3.6,
      rating:     'R',
      runtime:    99,
      released:   new Date('2004', '3', '3'),
      country:    'USA',
      posters:    ['img/theroom1.jpg','img/theroom2.jpg'],
      imdb:       'https://www.imdb.com/title/tt0368226/',
      website:    'http://www.theroommovie.com/',
      likes:      333,
      dislikes:   5985,
      posterindex: 0
      }
      s
      
  ];
      
      /* ADD VARIABLES FOR STEP 3 HERE */
      $scope.title = "IMDB + Rati's Top 8 Movies";
      $scope.owner = "Rati Patel";
      $scope.github = "https://github.com/Rjp76/is219s18RPatel-P3";
      
      
      
      
      
      
      
      /* ADD FUNCTIONS FOR STEP 7 HERE */
      $scope.like = function like(index) {
            $scope.movies[index].likes++;
      };
      $scope.dislike = function dislike(index) {
            $scope.movies[index].dislikes++;
      };
      $scope.posterClick =  function posterClick(index) {
            if ($scope.movies[index].posterindex == $scope.movies[index].posters.length - 1) {
                  $scope.movies[index].posterindex = 0;
            } else {
                  $scope.movies[index].posterindex++;
            }
      };

      $scope.timeText = function timeText(minutes) {
            return (Math.floor(minutes/60) + "h " + minutes%60 + "m");
      };
      
      
      
}]);
