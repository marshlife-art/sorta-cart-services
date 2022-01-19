import useSWR from 'swr'
import { wholesaleOrdersDashboardFetcher } from '../fetchers/supabase/wholesaleorders'

export function useWholesaleOrdersDashboard() {
  const { data, error } = useSWR(
    'dashboard_wholesaleorders',
    wholesaleOrdersDashboardFetcher
  )

  return {
    wholesaleOrders: data,
    isLoading: !error && !data,
    isError: error
  }
}
