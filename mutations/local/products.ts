import { SupaProduct } from '../../../types/SupaTypes'
import {
  DeleteProducts,
  UpdateNoBackorder,
  UpdateProducts,
  UpsertProducts
} from '../types'

export const updateNoBackorder: UpdateNoBackorder = async (
  prevImportTag: string
) => {
  // #TODO
  return { error: null }
}

export const upsertProducts: UpsertProducts = async (
  products: SupaProduct[],
  ignoreDuplicates: boolean
) => {
  // #TODO
  return { error: null, count: products.length }
}

export const deleteProducts: DeleteProducts = async (ids: string[]) => {
  // #TODO
  return { error: null }
}

export const updateProducts: UpdateProducts = async (
  product: Partial<SupaProduct>,
  ids: string[]
) => {
  // #TODO:
  return { error: null }
}
