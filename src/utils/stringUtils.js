import * as _ from 'lodash';
import * as stringSimilarity from 'string-similarity';
const MAX_STRING_CHECK = 50;
const MIN_STRING_SIMILARITY = 0.7;

export const getFirstName = (name) => {
  const lowerName = _.toLower(name);
  return _.find(_.split(lowerName, /\s|\.|\,/), (word) => {
    return _.size(word) > 2;
  });
};

// Levenshtein distance
export const getEditDistance = (firstString, secondString) => {
  const lengthFirstString = _.size(firstString);
  const lengthSecondString = _.size(secondString);
  if (lengthSecondString > MAX_STRING_CHECK ||  lengthFirstString > MAX_STRING_CHECK) {
    return MAX_STRING_CHECK;
  }

  const costs = [];
  _.forEach(_.range(0, lengthFirstString+1), (indexFirst) => {
    costs[indexFirst] = [indexFirst];
  });
  _.forEach(_.range(0, lengthSecondString+1), (indexSecond) => {
    costs[0][indexSecond] = indexSecond;
  });

  _.forEach(_.range(1, lengthFirstString+1), (indexFirst) => {
    _.forEach(_.range(1, lengthSecondString+1), (indexSecond) => {
     if (firstString[indexFirst - 1] === secondString[indexSecond - 1]){
        costs[indexFirst][indexSecond] = costs[indexFirst-1][indexSecond-1];
      } else {
        costs[indexFirst][indexSecond] =  Math.min(costs[indexFirst-1][indexSecond-1] + 1,
          Math.min(costs[indexFirst][indexSecond-1] + 1,
            costs[indexFirst-1][indexSecond] + 1))
      }
    })
  });

  return costs[lengthFirstString][lengthSecondString];
};

export const getCurrentDateString = () => {
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();

  return `${(dd>9 ? '' : '0') + dd}-${(mm>9 ? '' : '0') + mm}-${yyyy}`;
};

export const getSlotDateString = () => {
  const today = new Date();
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);
  const dd = nextDay.getDate();
  const mm = nextDay.getMonth() + 1;
  const yyyy = nextDay.getFullYear();

  return `${dd}-${(mm>9 ? '' : '0') + mm}-${yyyy}`;
};

export const getMinuteString = (seconds) => {
  return new Date(seconds * 1000).toISOString().substr(14, 5);
};

export const getStringSimilarityBasedBeneficiary = (beneficiaryList, verifiedName) => {
  if (_.isEmpty(beneficiaryList)) {
    return undefined;
  }
  const beneficiaryNamesLowerCase = _.map(beneficiaryList, ({ name }) => {
    return _.toLower(name);
  });
  const verifiedNameLowerCase = _.toLower(verifiedName);
  const bestMatchResults = stringSimilarity.findBestMatch(verifiedNameLowerCase, beneficiaryNamesLowerCase);
  const { bestMatch={}, bestMatchIndex } = bestMatchResults;
  const { rating=0 } = bestMatch;
  if (rating > MIN_STRING_SIMILARITY) {
    return beneficiaryList[bestMatchIndex];
  }
  return undefined;
}