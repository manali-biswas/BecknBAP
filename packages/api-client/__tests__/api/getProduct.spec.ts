import getProduct from '../../src/api/getProduct';
import { SearchItemsWhere, SearchType } from './../../src/types/Search';

describe('[beckn-api-client] getProduct', () => {

  const searchItemsWhere: SearchItemsWhere = {
    itemContains: 'sofa',
    locationIs: 'Pune'
  };

  const thenHandler = {
    then: () => {
      return Promise.resolve({
        message: {
          ack: {
            status: 'ACK'
          }
        }
      });
    }
  };
  const queryHandler = {
    query: ({ searchString, searchType, location }) => {
      expect(searchString).toEqual(searchItemsWhere.itemContains);
      expect(searchType).toEqual(SearchType.ITEM);
      expect(location).toEqual(searchItemsWhere.locationIs);
      return thenHandler;
    }
  };
  const context = {
    config: {
      api: {
        url: 'http://localhost:3000',
        endpoints: {
          search: '/v0/search'
        }
      }
    },
    client: {
      get: (url: string) => {
        expect(url).toEqual('http://localhost:3000/v0/search');
        return queryHandler;
      }
    }
  };

  it('should return acknowledgement when search is triggered', async () => {
    const ackResponse = await getProduct(context, searchItemsWhere);
    expect(ackResponse.message.ack.status).toBe('ACK');
  });

});
