import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import {useRouter} from "next/router";


export default function Home() {
    const router=useRouter()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={'bg-blue min-h-screen flex items-center justify-center'}>
        <div>
            <img className={'w-[614px] h-[183px] m-[92px]'} src={"/images/logo_base_614x183.png"}></img>
            <div className={'flex flex-wrap items-center justify-center'}>
                <form className={'flex flex-col'}>
                    <div className={'flex justify-between my-2'}>
                        <label htmlFor={'login'} className={'mr-4 text-xl font-verdana text-white'}>Username: </label>
                        <input name={'login'} className={'w-96 p-2 h-9'}/>
                    </div>
                    <div className={'flex justify-between my-2'}>
                        <label htmlFor={'password'} className={'mr-4 text-xl font-verdana text-white'}>Password: </label>
                        <input name={'password'} className={'w-96 p-2 h-9'}/>
                    </div>
                </form>
                <div className={'flex w-full items-center my-10 justify-around'}>
                    <button onClick={()=>{router.push('/admin/')}} className={'bg-orange font-bold w-40 h-10 font-verdana text-white'}>Login</button>
                    <button onClick={()=>{router.push('/admin/')}} className={'bg-orange font-bold w-40 h-10 font-verdana text-white'}>Exit</button>
                </div>
            </div>
        </div>
      </main>
    </>
  )
}