// import { AgnosticFacetSearchParams } from '@vue-storefront/core';
// import { SearchItemsWhere } from '@vue-storefront/beckn-api';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const buildSearchItemsWhere = (params) => {
  const paramsObj: { [k: string]: any } = {
    locationIs: params.locationIs,
    offset: params.page * params.itemsPerPage,
    limit: params.itemsPerPage
  };
  const { searchBy } = params;
  if (searchBy) {
    if (searchBy === 'search-by-all') {
      console.log(params.term);
      paramsObj.itemContains = params.term;
    } else if (searchBy === 'search-by-seller') {
      console.log(params.term)
      // eslint-disable-next-line camelcase
      paramsObj.provider_name = params.term;
    } else if (searchBy === 'search-by-category') {
      console.log(params.term)
      // eslint-disable-next-line camelcase
      paramsObj.category_name = params.term;
    } else if(searchBy==='search-by-item-seller'){
      console.log("Term+"+params.term)
      paramsObj.itemContains=params.term.split("item:")[1].split(" ")[1].trim();
      paramsObj.provider_name=params.term.split("seller:")[1].split(" ")[1].trim();
    } else if(searchBy==='search-by-category-seller'){
      console.log(params.term)
      paramsObj.category_name=params.term.split("category:")[1].split(" ")[1].trim();
      paramsObj.provider_name=params.term.split("seller:")[1].split(" ")[1].trim();
    } else if(searchBy==='search-by-category-item'){
      console.log(params.term)
      paramsObj.itemContains=params.term.split("item:")[1].split(" ")[1].trim();
      paramsObj.category_name=params.term.split("category:")[1].split(" ")[1].trim();
    } else if(searchBy==='search-by-cat-item-sell'){
      console.log(params.term)
      paramsObj.itemContains=params.term.split("item:")[1].split(" ")[1].trim();
      paramsObj.provider_name=params.term.split("seller:")[1].split(" ")[1].trim();
      paramsObj.category_name=params.term.split("category:")[1].split(" ")[1].trim();
    }
  } else if (params.term) {
    paramsObj.itemContains = params.term;
  }
  console.log("Provider id:"+params.providerId );
  if (params.providerId) paramsObj.providerId = params.providerId;
  console.log("Search obj:"+JSON.stringify(paramsObj));
  return paramsObj;
};

