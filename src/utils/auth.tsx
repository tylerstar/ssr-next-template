import React, { useEffect } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import { NextPage, NextPageContext } from "next";

interface LoginFunction {
  token: string
}

export const login = ({ token }: LoginFunction) => {
  cookie.set('token', token, { expires: 1 })
  Router.push('/').then(() => null)
};

export const auth = (ctx: NextPageContext) => {
  const { token } = nextCookie(ctx)

  if (ctx.res && !token) {
    ctx.res.writeHead(302, '/login')
    ctx.res.end()
  }

  if (!token) {
    Router.push('/login').then(() => null)
  }

  return token
}

export const logout = () => {
  cookie.remove('token')
  window.localStorage.setItem('logout', String(Date.now()))
  Router.push('/login').then(() => null)
}

export const withAuthSync = (WrappedComponent: NextPage): React.FC => {
  const Wrapper = (props: object) => {
    const syncLogout = (event: StorageEvent) => {
      if (event.key === 'logout') {
        Router.push('/login').then(() => null)
      }
    }

    useEffect(() => {
      window.addEventListener('storage', syncLogout)

      return () => {
        window.removeEventListener('storage', syncLogout)
        window.localStorage.removeItem('logout')
      }
    }, [null])

    return <WrappedComponent {...props} />
  }

  Wrapper.getInitialProps = async (ctx: NextPageContext) => {
    const token = auth(ctx)

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx))

    return { ...componentProps, token }
  }

  return Wrapper
}
