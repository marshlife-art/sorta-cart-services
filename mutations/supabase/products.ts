import { supabase } from '../../../lib/supabaseClient'
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
  const { error } = await supabase
    .from<SupaProduct>('products')
    .update({ no_backorder: true }, { returning: 'minimal' })
    .eq('import_tag', prevImportTag)
  return { error }
}

export const upsertProducts: UpsertProducts = async (
  products: SupaProduct[],
  ignoreDuplicates: boolean
) => {
  const { error, count } = await supabase
    .from<SupaProduct>('products')
    .upsert(products, {
      count: 'exact',
      returning: 'minimal',
      ignoreDuplicates
    })
  return { error, count }
}

export const deleteProducts: DeleteProducts = async (ids: string[]) => {
  const { error } = await supabase
    .from<SupaProduct>('products')
    .delete({ returning: 'minimal' })
    .in('id', ids)

  return { error }
}

export const updateProducts: UpdateProducts = async (
  product: Partial<SupaProduct>,
  ids: string[]
) => {
  const { error } = await supabase
    .from<SupaProduct>('products')
    .update(product)
    .in('id', ids)

  return { error }
}
