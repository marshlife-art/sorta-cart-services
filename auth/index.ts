import {
  getSession as localGetSession,
  signIn as localSignIn,
  signOut as localSignOut
} from './local/auth'
import {
  getSession as supaGetSession,
  signIn as supaSignIn,
  signOut as supaSignOut
} from './supabase/auth'

export const getSession = process.env.USE_LOCAL_SERVICES
  ? localGetSession
  : supaGetSession

export const signIn = process.env.USE_LOCAL_SERVICES ? localSignIn : supaSignIn

export const signOut = process.env.USE_LOCAL_SERVICES
  ? localSignOut
  : supaSignOut
