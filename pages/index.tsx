import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import {useRouter} from "next/router";


export default function Home() {

    const router=useRouter()

    useEffect(()=>{
        router.push('/login')
    })

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

      </main>
    </>
  )
}
