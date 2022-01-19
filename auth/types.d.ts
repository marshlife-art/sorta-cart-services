import { Session, User, ApiError } from '@supabase/supabase-js'

export interface GetSession {
  (): Session | null
}

export interface SignIn {
  (email: string, password?: string | undefined): Promise<{
    session: Session | null
    user: User | null
    error: ApiError | null
  }>
}

export interface SingOut {
  (): void
}
