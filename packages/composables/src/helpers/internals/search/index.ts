// import { AgnosticFacetSearchParams } from '@vue-storefront/core';
// import { BaseSearchWhere } from '@vue-storefront/beckn-api';
export const buildSearchItemsWhere = (params) => {
  const paramsObj = {
    locationIs: params.locationIs,
    offset: params.page * params.itemsPerPage,
    limit: params.itemsPerPage
  };
  if (params.term) paramsObj.itemContains = params.term;
  if (params.providerId) paramsObj.providerId = params.providerId;
  return paramsObj;
};

