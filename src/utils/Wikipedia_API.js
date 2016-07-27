import fetchJsonp from 'fetch-jsonp';

const BASEURL = 'https://en.wikipedia.org/w/api.php?action=query';
const FORMAT = 'json';
const MAXPAGES = 10;

export const fetchRandomPages = () => {
  const request = `${BASEURL}&list=random&rnnamespace=0&rnlimit=${MAXPAGES}&format=${FORMAT}`;

  const slicePages = (json) => json.query.random;

  return fetchJsonp(request)
    .then(req => req.json())
    .then(json => slicePages(json))
    .catch(function(e) {
      console.error(e);
      throw new Error('Wikipedia API Failure');
    });
}

export const getInfoByPageID = (pageID, propsList = ['info','images','categories']) => {
  const prop = toAPICompliantListFromArray(propsList);
  
  const request = `${BASEURL}&prop=${prop}&inprop=url&format=${FORMAT}&pageids=${pageID}`;

  const slicePages = (json) => json.query.pages[pageID];

  const stripCategoryTags = (json) => ({
    ...json,
    categories: json.categories.map(category => ({
      ...category,
      title: category.title.replace(/^Category:/, '')
    }))
  });

  return fetchJsonp(request)
    .then(req => req.json())
    .then(json => slicePages(json))
    .then(json => stripCategoryTags(json))
    .catch(function(e) {
      console.error(e);
      throw new Error('Wikipedia API Failure');
    });
}

export const getImageInfoByTitles = (titlesList, imgWidth = 500) => {
  const titles = toAPICompliantListFromArray(titlesList);

  const request = `${BASEURL}&prop=imageinfo&iiprop=url&iiurlwidth=${imgWidth}&format=${FORMAT}&titles=${titles}}`;

  fetchJsonp(request)
    .then(req => req.json())
    .catch(function(e) {
      console.error(e);
      throw new Error('Wikipedia API Failure');
    });
}

const toAPICompliantListFromArray = (arr) => {
  return arr.reduce((str, curr) => str + '|' + curr);
}