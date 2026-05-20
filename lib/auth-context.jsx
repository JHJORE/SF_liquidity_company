'use client';
import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext(null);

const initial = {
  signedIn: false,
  step: 'credentials', // 'credentials' | 'mfa' | 'compliance' | 'done'
  email: 'alexandra.morrow@pantera.capital',
  password: 'somePassword12345',
  emailError: '',
  pwError: '',
  submitting: false,
  role: 'investor', // investor | issuer | operator
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value, [action.field + 'Error']: '' };
    case 'SET_ERRORS':
      return { ...state, emailError: action.email || '', pwError: action.pw || '' };
    case 'SUBMIT_START':
      return { ...state, submitting: true };
    case 'SIGN_IN':
      return { ...state, signedIn: true, submitting: false, step: 'done' };
    case 'SIGN_OUT':
      return { ...initial, signedIn: false };
    case 'SET_ROLE':
      return { ...state, role: action.role };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);

  const setField = (field, value) => dispatch({ type: 'SET_FIELD', field, value });
  const setRole = (role) => dispatch({ type: 'SET_ROLE', role });
  const signOut = () => dispatch({ type: 'SIGN_OUT' });
  const signIn = () => dispatch({ type: 'SIGN_IN' });

  const submit = (e, onSuccess) => {
    e?.preventDefault?.();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email);
    const pwValid = (state.password || '').length >= 12;
    if (!emailValid || !pwValid) {
      dispatch({
        type: 'SET_ERRORS',
        email: emailValid ? '' : 'Please enter a valid email address',
        pw: pwValid ? '' : 'Password must be at least 12 characters',
      });
      return;
    }
    dispatch({ type: 'SUBMIT_START' });
    setTimeout(() => {
      dispatch({ type: 'SIGN_IN' });
      onSuccess?.();
    }, 700);
  };

  return (
    <AuthContext.Provider value={{ state, setField, setRole, signOut, signIn, submit }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}

export const ROLE_ACCESS = {
  '/dashboard': ['investor', 'issuer', 'operator'],
  '/market': ['investor', 'issuer', 'operator'],
  '/derivatives': ['investor', 'operator'],
  '/portfolio': ['investor'],
  '/orders': ['investor', 'issuer'],
  '/admin/issuer': ['issuer', 'operator'],
  '/holder': ['investor', 'issuer', 'operator'],
};
