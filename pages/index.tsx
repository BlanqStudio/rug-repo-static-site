import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Feature from './components/feature'
import Footer from './components/footer'

import HeroSection from './components/hero'

import NavBar from './components/navbar'


const Home: NextPage = () => {
  return (

    <>
          <NavBar/>
          <HeroSection/>


          
    <div className="bg-coolGray-900">
      <Head>
      <link rel="icon" type="image/svg+xml" href="/RugRepoIcon.svg"/>
  <link rel="icon" type="image/png" href="/RugRepoIcon.png"/>
        <title>RugRepo</title>
        <meta name="description" content="The place to talk about the validity of projects." />
        
      </Head>





      <article className="px-12 sm:px-20 py-24 mx-auto "  itemType="http://schema.org/BlogPosting">
  

  <div className="mx-auto prose text-white max-w-2xl">
  <h1 className="mb-3 text-4xl font-bold text-white text-center md:leading-tight md:text-5xl" itemProp="headline" title="What is RugRepo?">
      Crypto is <span className="text-violet-400 underline">confusing</span>
    </h1>
    <h2 className="text-white">{`When it comes to crypto projects, there's always one that you`} <span className="text-violet-400">{` wish `}</span> {`you go into early.`}</h2>
    <p>
      {`To be able to make an informed decision investing into a product, coin or project 
      you have to put the leg work in and make sure you know everything there is about to know about it
      before you even think about putting money into it.`}
    </p>

    <p>{`And more often than not, by the time you've done all of the research and planning, the thing has tripled in price and now you're stuck with a smaller bag. So how do you
    get into a project before that happens? Easy! You do less research!`}</p>
    <p>{`Doing minimal or no research at all before putting money into something is a sure fire way to lose it.`}</p>
    <h2 className="text-white"><span className="text-violet-400">{`FOMO `}</span> {`is a real thing and many people fall prey to it every single day.`} </h2>

    <p>{`When everyone is ranting and raving about the next big thing that you have just heard of,
    it's hard not to go with the flow and pick up a bag or two. What's the point in doing a bunch of research if people are already saying the project is solid?`}</p>
  
    <p>
      {`That's how a lot of people lose their hard earned money.`}
    </p>







  </div>
</article>
<div className="px-8">
<hr className="max-w-4xl mx-auto border-violet-400 border-dashed border-2"/>
</div>

<Feature/>

<div className="px-8">
<hr className="max-w-4xl mx-auto border-violet-400 border-dashed border-2"/>
</div>

<article className="px-12 sm:px-20 py-24 mx-auto "  itemType="http://schema.org/BlogPosting">
  

  <div className="mx-auto prose text-white max-w-2xl">
  <h1 className="mb-3 text-4xl font-bold text-white text-center md:leading-tight md:text-5xl" itemProp="headline" title="What is RugRepo?">
      What is <span className="text-violet-400 underline">RugRepo?</span>
    </h1>

    <h2 className="text-white"> {`We are aiming to help`} <span className="text-violet-400">{` educate `}</span> {`first time buyers and veterans`} </h2>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officia velit assumenda debitis reiciendis doloremque non dolore repellat aperiam quam sequi cumque,
     obcaecati earum quas quod maxime, odio sit? Nemo?</p>


     <h2 className="text-white"> {`We are aiming to help`} <span className="text-violet-400">{` educate `}</span> {`first time buyers and veterans`} </h2>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officia velit assumenda debitis reiciendis doloremque non dolore repellat aperiam quam sequi cumque,
     obcaecati earum quas quod maxime, odio sit? Nemo?</p>


    </div>
    </article>





     

      <Footer/>
    </div>
    </>
  )
}

export default Home
