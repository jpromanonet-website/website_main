import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Clint | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Juan P. Romano</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/jpromanonet'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/jpromanonet'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Engineering Manager <span className='px-1'>& Teacher</span> {' '}
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Engineering Manager</p>
            <p>Teacher</p>
          </div>
        </div>
        <p>
        I am a motivated leader who loves to help their team mates to achieve their professional and personal goals, and possess solid interpersonal abilities and complex problem-solving skills. My track record of critical thinking, idea generation, and optimizing efficiencies is both effective and proven.
        </p>
        <br/>
        <p>
        As a highly analytical and innovative software professional, I possess extensive experience in customer service, team leadership, and organizational effectiveness in fast-paced and challenging environments. 
        </p>
        <br/>
        <p>
        My ability to develop effective strategies and drive streamlined operations has been honed through my diverse analytical skills, team collaboration, and relationship building abilities.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Back End</span>
            <span className='px-2'>:</span>C
            <span className='px-2'>|</span>C#
            <span className='px-2'>|</span>C++
            <span className='px-2'>|</span>Java
            <span className='px-2'>|</span>PHP
            <span className='px-2'>|</span>Code Igniter
            <span className='px-2'>|</span>Laravel
            <span className='px-2'>|</span>Flask
            <span className='px-2'>|</span>Golang
            <span className='px-2'>|</span>Rust
            <span className='px-2'>|</span>Django
            <span className='px-2'>|</span>Python
            <span className='px-2'>|</span>Node JS
            <span className='px-2'>|</span>R
            <span className='px-2'>|</span>Perl
            <span className='px-2'>|</span>Lisp
            <span className='px-2'>|</span>PyCharm
            <span className='px-2'>|</span>Rails
            <span className='px-2'>|</span>Ruby
            <span className='px-2'>|</span>.Net
            <span className='px-2'>|</span>.Net Core
          </p>
          <p className='py-2'>
            <span className='font-bold'>Front End</span>
            <span className='px-2'>:</span>Javascript
            <span className='px-2'>|</span>Typescript
            <span className='px-2'>|</span>React JS
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Angular
            <span className='px-2'>|</span>Vue JS
            <span className='px-2'>|</span>JQuery
            <span className='px-2'>|</span>CSS3 
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>Babel
            <span className='px-2'>|</span>HTML5
            <span className='px-2'>|</span>Bootstrap
            <span className='px-2'>|</span>Sass
          </p>
          <p className='py-2'>
            <span className='font-bold'>Databases</span>
            <span className='px-2'>:</span>MySQL
            <span className='px-2'>|</span>MS-SQL
            <span className='px-2'>|</span>PostgreSQL
            <span className='px-2'>|</span>MongoDB
            <span className='px-2'>|</span>Redis
            <span className='px-2'>|</span>Graph QL
          </p>
          <p className='py-2'>
            <span className='font-bold'>Tools</span>
            <span className='px-2'>:</span>Git
            <span className='px-2'>|</span>Github
            <span className='px-2'>|</span>Gitlab
            <span className='px-2'>|</span>Docker
            <span className='px-2'>|</span>Kubernetes
            <span className='px-2'>|</span>Composer
            <span className='px-2'>|</span>Bash
            <span className='px-2'>|</span>Linux
            <span className='px-2'>|</span>Win Server
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Adviters
            </span>
            <span className='px-2'>|</span>Buenos Aires, AR
          </p>
          <p className='py-1 italic'>Engineering Manager (2023 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Designs, implements, and refines product development, testing, and processes, manages staff and assigns tasks to engineering and technical personnel.
            </li>
            <li>
            Leading teams in the development of new products, solutions, and processes while taking care of the development teams by helping them to achieve their professional and personal goals.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Teaching & Mentoring Web Development
            </span>
            <span className='px-2'>|</span>Dallas, TX
          </p>
          <p className='py-1 italic'>Code Commerce - Youtube Channel (2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              In 2021 I started “Code Commerce”, a YouTube channel focused on
              sharing what I’m learning in web development, specifically
              front-end development.
            </li>
            <li>
              Private 1 on 1 Zoom coaching calls related to web development.
              More specifically debugging, teaching basic web development
              concepts and code reviews.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>CITY OF SHERMAN, TX</span>
            <span className='px-2'>|</span>Sherman, TX
          </p>
          <p className='py-1 italic'>Paramedic / Firefighter (2010 – 2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured proper implementation of firefighting techniques and
              practices including controlling and extinguishing fires, operating
              hose lines, and fire ground operations, ventilation, and search
              and rescue.
            </li>
            <li>
              Oversaw comprehensive understanding, operation, and maintenance of
              fire engines, ladder trucks, technical rescue apparatus, and
              response trailers.
            </li>
            <li>
              Performed ALS techniques as needed within emergency situations
              including the use of an esophageal or dual lumen airway device and
              oral intubation using laryngoscopy.
            </li>
            <li>
              Collaborated with a talented and high performing team of
              firefighters in high pressure and stressful situations as needed.
            </li>
            <li>
              Utilized proven and demonstrated knowledge of multiple
              certifications including Pediatric Advanced Life Support,
              Prehospital Trauma Life Support, and Advanced Cardiac Life
              Support, among others.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
