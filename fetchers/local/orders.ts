import { Query } from 'material-table'
import { SuperOrderAndAssoc } from '../../../types/SupaTypes'
import {
  OrderDashboardFetcher,
  OrderDataTableFetcher,
  OrderFetcher,
  OrdersForMember
} from '../types'

export const ordersDashboardFetcher: OrderDashboardFetcher = async () => {
  // #TODO
  return {
    data: [],
    error: null
  }
}

export const ordersForMember: OrdersForMember = async (MemberId: number) => {
  // #TODO
  return { data: [], error: null }
}

export const orderFetcher: OrderFetcher = async (id: number) => {
  // #TODO
  return { data: null, error: null }
}

export const ordersDataTableFetcher: OrderDataTableFetcher = async (
  q: Query<SuperOrderAndAssoc>
) => {
  // #TODO
  return { data: [], error: null, count: 0 }
}
