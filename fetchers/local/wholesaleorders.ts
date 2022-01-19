import { Query } from 'material-table'
import { OrderStatus } from '../../../types/Order'
import { SupaOrderLineItem, SupaWholesaleOrder } from '../../../types/SupaTypes'
import {
  WholesaleOrderDashboardFetcher,
  WholesaleOrderFetcher,
  WholesaleOrdersDataTableFetcher,
  WholesaleOrdersFetcher
} from '../types'

export const wholesaleOrdersFetcher: WholesaleOrdersFetcher = async (
  status: OrderStatus
) => {
  // #TODO
  return { data: [], error: null, count: 0 }
}

export const wholesaleOrderFetcher: WholesaleOrderFetcher = async (
  id: number
) => {
  // #TODO
  return { data: null, error: null }
}

export const wholesaleOrdersDashboardFetcher: WholesaleOrderDashboardFetcher =
  async () => {
    // #TODO
    return {
      data: [],
      error: null
    }
  }

export const wholesaleOrdersDataTableFetcher: WholesaleOrdersDataTableFetcher =
  async (q: Query<SupaOrderLineItem> | Query<SupaWholesaleOrder>) => {
    // #TODO
    return {
      data: [],
      error: null,
      count: 0
    }
  }
