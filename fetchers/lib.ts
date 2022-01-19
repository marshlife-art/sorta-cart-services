import { SupaMemberWithUser, SupaProduct } from '../../types/SupaTypes'

export const mapProductsToAutocomplete = (p: SupaProduct) => ({
  name: `${p.name} ${p.description} ${p.pk} ${p.size} $${p.ws_price} ${
    p.u_price !== p.ws_price ? `($${p.u_price} EA)` : ''
  }${
    isNaN(parseInt(`${p.count_on_hand}`)) ? '' : ` ${p.count_on_hand} on hand`
  }`,
  product: p
})

export const mapMembersToAutocomplete = (m: SupaMemberWithUser) => ({
  name: `${m.name} ${
    m.User && m.User.email ? m.User.email : m.registration_email
  }`,
  member: m
})
