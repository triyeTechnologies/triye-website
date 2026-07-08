import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Don't throw at import time — a missing env var would blank the whole site.
// The marketing pages must render even if the contact-form backend is unavailable.
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables — contact form and admin dashboard are disabled')
}

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

const requireSupabase = () => {
  if (!supabase) throw new Error('Supabase is not configured')
  return supabase
}

// Database operations
export const database = {
  // Insert new message
  async insertMessage(messageData) {
    try {
      const { data, error } = await requireSupabase()
        .from('messages')
        .insert([{
          name: messageData.name,
          email: messageData.email,
          phone: messageData.phone || null,
          subject: messageData.subject,
          message: messageData.message
        }])
        .select()

      if (error) throw error
      return data[0]
    } catch (error) {
      console.error('Database insert error:', error)
      throw error
    }
  },

  // Get all messages (admin only)
  async getMessages() {
    try {
      const { data, error } = await requireSupabase()
        .from('messages')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      return data
    } catch (error) {
      console.error('Database fetch error:', error)
      throw error
    }
  },

  // Delete message (admin only)
  async deleteMessage(messageId) {
    try {
      const { error } = await requireSupabase()
        .from('messages')
        .delete()
        .eq('id', messageId)

      if (error) throw error
    } catch (error) {
      console.error('Database delete error:', error)
      throw error
    }
  }
}

// Authentication operations
export const auth = {
  // Sign in admin
  async signIn(email, password) {
    try {
      const { data, error } = await requireSupabase().auth.signInWithPassword({
        email,
        password
      })

      if (error) throw error
      return data
    } catch (error) {
      console.error('Auth sign in error:', error)
      throw error
    }
  },

  // Sign out
  async signOut() {
    try {
      const { error } = await requireSupabase().auth.signOut()
      if (error) throw error
    } catch (error) {
      console.error('Auth sign out error:', error)
      throw error
    }
  },

  // Get current session
  async getSession() {
    try {
      const { data: { session } } = await requireSupabase().auth.getSession()
      return session
    } catch (error) {
      console.error('Get session error:', error)
      return null
    }
  },

  // Listen to auth changes
  onAuthStateChange(callback) {
    if (!supabase) {
      return { data: { subscription: { unsubscribe() {} } } }
    }
    return supabase.auth.onAuthStateChange(callback)
  }
}