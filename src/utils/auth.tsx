import React, { useEffect } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import { NextPage, NextPageContext } from "next";

interface ITokens {
  accessToken: string,
  idToken: string,
  refreshToken: string
}

export const login = ({ accessToken, idToken, refreshToken }: ITokens) => {
  cookie.set('accessToken', accessToken, { expires: 1 })
  cookie.set('idToken', idToken, { expires: 1 })
  cookie.set('refreshToken', refreshToken, { expires: 1 })
  Router.push('/').then(() => null)
};

export const auth = (ctx: NextPageContext) => {
  const { accessToken } = nextCookie(ctx)

  if (ctx.res && !accessToken) {
    console.log("1")
    ctx.res.writeHead(302, { Location: '/signin' })
    ctx.res.end()
  }

  if (!accessToken) {
    console.log("2")
    Router.push('/signin')
  }

  return accessToken
}

export const logout = () => {
  cookie.remove('accessToken')
  cookie.remove('idToken')
  cookie.remove('refreshToken')
  window.localStorage.setItem('signout', String(Date.now()))
  Router.push('/login').then(() => null)
}

export const withAuthSync = (WrappedComponent: NextPage): React.FC => {
  const Wrapper = (props: object) => {
    const syncLogout = (event: StorageEvent) => {
      if (event.key === 'logout') {
        Router.push('/signin')
      }
    }

    useEffect(() => {
      window.addEventListener('storage', syncLogout)

      return () => {
        window.removeEventListener('storage', syncLogout)
        window.localStorage.removeItem('signout')
      }
    }, [null])

    return <WrappedComponent {...props} />
  }

  Wrapper.getInitialProps = async (ctx: any) => {
    console.log(Object.keys(ctx))
    const accessToken = auth(ctx)

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx))

    return { ...componentProps, accessToken }
  }

  return Wrapper
}
