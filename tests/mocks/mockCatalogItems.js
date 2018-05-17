import { internalShopId, opaqueShopId } from "./mockShop";
import {
  internalCatalogItemIds,
  mockExternalCatalogProducts,
  mockInternalCatalogProducts
} from "./mockCatalogProducts";

/**
 *
 * @todo TEMP mocks this will be removed in favor of a fixture/factory solution
 */

const createdAt = new Date("2018-04-16T15:34:28.043Z");
const updatedAt = new Date("2018-04-17T15:34:28.043Z");

/**
 * mock internal catalog items
 */
export const mockCatalogItems = [
  {
    _id: internalCatalogItemIds[0],
    product: mockInternalCatalogProducts[0],
    shopId: internalShopId,
    createdAt,
    updatedAt
  },
  {
    _id: internalCatalogItemIds[1],
    product: mockInternalCatalogProducts[1],
    shopId: internalShopId,
    createdAt,
    updatedAt
  }
];

/**
 * mock unsorted catalogItems query response
 */
export const mockUnsortedCatalogItemsResponse = {
  catalogItems: {
    nodes: mockExternalCatalogProducts
  }
};