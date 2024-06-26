export default function Footer() {
  return (
    <div className='min-h-[15vh] bg-gray-100 dark:bg-gray-900 grid p-5 text-gray-700 dark:text-white grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3 place-items-center items-center '>
      <a
        className='font-bold'
        target='_blank'
        href='https://portafolio-alan1.netlify.app/'
        rel='noreferrer'
      >
        Portfolio.dev
      </a>
      <div className='grid place-items-center'>
        <p>
          Made with ❤️ &nbsp;by{' '}
          <a
            target='_blank'
            href='#'
            rel='noreferrer'
          >
            Alan Rosete
          </a>
        </p>
        <div className='flex'>
          Icons by&nbsp;
          <a target='_ blank' href='https://icons8.com' rel='noreferrer'>
            Icons8
          </a>
        </div>
      </div>
      <a
        className='font-bold'
        target='_blank'
        href='https://www.github.com/AlanRosete'
        rel='noreferrer'
      >
        Github
      </a>
    </div>
  )
}
