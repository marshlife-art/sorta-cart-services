import { supabase } from '../../../lib/supabaseClient'
import { GetSession, SignIn, SingOut } from '../types'

export const getSession: GetSession = () => {
  return supabase.auth.session()
}

export const signIn: SignIn = async (email: string, password?: string) => {
  const { session, user, error } = await supabase.auth.signIn(
    { email, password },
    {
      redirectTo:
        process.env.NODE_ENV === 'production'
          ? 'https://sorta-cart.vercel.app/admin'
          : `${window.location.origin}/admin`
    }
  )

  return { session, user, error }
}

export const signOut: SingOut = () => {
  supabase.auth.signOut()
}
