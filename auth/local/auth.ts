import { GetSession, SignIn, SingOut } from '../types'

// admin party!
const user = {
  email: 'admin@localhost',
  role: 'admin',
  id: '666',
  app_metadata: {
    provider: 'localhost'
  },
  user_metadata: {},
  aud: 'string',
  created_at: new Date().toISOString()
}
const session = {
  access_token: '666',
  token_type: 'test',
  user
}

export const getSession: GetSession = () => {
  return session
}

export const signIn: SignIn = async (email: string, password?: string) => {
  return { session, user, error: null }
}

export const signOut: SingOut = () => {
  // #TODO
}
